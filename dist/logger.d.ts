/// <reference types="node" />
import { Console } from "console";
import { LogsMessages_logLevel } from "./dtos/logsCollector";
export declare class Logger extends Console {
    private logService;
    private healthService;
    private logQueue;
    private constructor();
    log(level: LogsMessages_logLevel, message: string, stackTrace?: string): Promise<void>;
}
