import { Console } from "console";
import {
  LogsMessages_Log,
  LogsMessages_LogForCreate,
  LogsMessages_logLevel,
} from "./dtos/logsCollector";
import { LogCollectorService } from "./service/logcollector.service";
import { HealthService } from "./service/health.service";

interface LoggerConfig {
  level: string;
  silent: boolean;
}

export class Logger extends Console {
  private logService: LogCollectorService;
  private healthService: HealthService;
  private logQueue: LogsMessages_LogForCreate[] = [];

  private constructor(serverAddress: string) {
    super(process.stdout, process.stderr);
    this.logQueue = [];
    this.logService = new LogCollectorService(serverAddress);
    this.healthService = new HealthService(serverAddress);
  }

  public async log(
    level: LogsMessages_logLevel,
    message: string,
    stackTrace?: string
  ): Promise<void> {
    super.log(`[${new Date().toISOString()}] [${level}] ${message}`);

    if (!stackTrace) stackTrace = "";

    this.logQueue.push({
      level,
      message,
      stackTrace,
    });
    new Promise(() => {
      this.healthService.isAvailable().then((isAvailable) => {
        if (isAvailable) {
          while (this.logQueue.length > 0) {
            const log = this.logQueue.pop();
            if (log) {
              this.logService.log(log);
            }
          }
        }
      });
    });
  }
}
