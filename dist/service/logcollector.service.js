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
exports.LogCollectorService = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const logsCollector_1 = require("../dtos/logsCollector");
class LogCollectorService {
    constructor(address) {
        this.client = new logsCollector_1.LogCollectorServiceClient(address, grpc_js_1.ChannelCredentials.createInsecure(), {
            "grpc.keepalive_time_ms": 120000,
            "grpc.http2.min_time_between_pings_ms": 120000,
            "grpc.keepalive_timeout_ms": 20000,
            "grpc.http2.max_pings_without_data": 0,
            "grpc.keepalive_permit_without_calls": 1,
        });
    }
    log(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, rejects) => {
                this.client.create(msg, (err, response) => {
                    if (err)
                        rejects(err);
                    resolve(response);
                });
            });
        });
    }
}
exports.LogCollectorService = LogCollectorService;
