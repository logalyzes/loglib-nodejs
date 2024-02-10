"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const console_1 = require("console");
const logcollector_service_1 = require("./service/logcollector.service");
const health_service_1 = require("./service/health.service");
class Logger extends console_1.Console {
    constructor(serverAddress) {
        super(process.stdout, process.stderr);
        this.logQueue = [];
        this.logQueue = [];
        this.logService = new logcollector_service_1.LogCollectorService(serverAddress);
        this.healthService = new health_service_1.HealthService(serverAddress);
    }
    log(level, message, stackTrace) {
        const _super = Object.create(null, {
            log: { get: () => super.log }
        });
        return __awaiter(this, void 0, void 0, function* () {
            _super.log.call(this, `[${new Date().toISOString()}] [${level}] ${message}`);
            if (!stackTrace)
                stackTrace = "";
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
        });
    }
}
exports.Logger = Logger;
