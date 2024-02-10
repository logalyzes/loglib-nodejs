import { LogCreatedResponse, LogsMessages_LogForCreate } from "../dtos/logsCollector";
export declare class LogCollectorService {
    private client;
    constructor(address: string);
    log(msg: LogsMessages_LogForCreate): Promise<LogCreatedResponse>;
}
