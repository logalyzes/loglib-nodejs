"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogCollectorServiceClient = exports.LogCollectorServiceService = exports.LogCreatedResponse = exports.LogsMessages_LogForCreate = exports.LogsMessages_Log = exports.LogsMessages_Application = exports.LogsMessages = exports.Empty = exports.logsMessages_appEnvironmentToJSON = exports.logsMessages_appEnvironmentFromJSON = exports.LogsMessages_appEnvironment = exports.logsMessages_logLevelToJSON = exports.logsMessages_logLevelFromJSON = exports.LogsMessages_logLevel = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
var LogsMessages_logLevel;
(function (LogsMessages_logLevel) {
    LogsMessages_logLevel[LogsMessages_logLevel["DEBUG"] = 0] = "DEBUG";
    LogsMessages_logLevel[LogsMessages_logLevel["INFO"] = 1] = "INFO";
    LogsMessages_logLevel[LogsMessages_logLevel["WARN"] = 2] = "WARN";
    LogsMessages_logLevel[LogsMessages_logLevel["ERROR"] = 3] = "ERROR";
    LogsMessages_logLevel[LogsMessages_logLevel["FATAL"] = 4] = "FATAL";
    LogsMessages_logLevel[LogsMessages_logLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LogsMessages_logLevel || (exports.LogsMessages_logLevel = LogsMessages_logLevel = {}));
function logsMessages_logLevelFromJSON(object) {
    switch (object) {
        case 0:
        case "DEBUG":
            return LogsMessages_logLevel.DEBUG;
        case 1:
        case "INFO":
            return LogsMessages_logLevel.INFO;
        case 2:
        case "WARN":
            return LogsMessages_logLevel.WARN;
        case 3:
        case "ERROR":
            return LogsMessages_logLevel.ERROR;
        case 4:
        case "FATAL":
            return LogsMessages_logLevel.FATAL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return LogsMessages_logLevel.UNRECOGNIZED;
    }
}
exports.logsMessages_logLevelFromJSON = logsMessages_logLevelFromJSON;
function logsMessages_logLevelToJSON(object) {
    switch (object) {
        case LogsMessages_logLevel.DEBUG:
            return "DEBUG";
        case LogsMessages_logLevel.INFO:
            return "INFO";
        case LogsMessages_logLevel.WARN:
            return "WARN";
        case LogsMessages_logLevel.ERROR:
            return "ERROR";
        case LogsMessages_logLevel.FATAL:
            return "FATAL";
        case LogsMessages_logLevel.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.logsMessages_logLevelToJSON = logsMessages_logLevelToJSON;
var LogsMessages_appEnvironment;
(function (LogsMessages_appEnvironment) {
    LogsMessages_appEnvironment[LogsMessages_appEnvironment["DEV"] = 0] = "DEV";
    LogsMessages_appEnvironment[LogsMessages_appEnvironment["TEST"] = 1] = "TEST";
    LogsMessages_appEnvironment[LogsMessages_appEnvironment["PROD"] = 2] = "PROD";
    LogsMessages_appEnvironment[LogsMessages_appEnvironment["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LogsMessages_appEnvironment || (exports.LogsMessages_appEnvironment = LogsMessages_appEnvironment = {}));
function logsMessages_appEnvironmentFromJSON(object) {
    switch (object) {
        case 0:
        case "DEV":
            return LogsMessages_appEnvironment.DEV;
        case 1:
        case "TEST":
            return LogsMessages_appEnvironment.TEST;
        case 2:
        case "PROD":
            return LogsMessages_appEnvironment.PROD;
        case -1:
        case "UNRECOGNIZED":
        default:
            return LogsMessages_appEnvironment.UNRECOGNIZED;
    }
}
exports.logsMessages_appEnvironmentFromJSON = logsMessages_appEnvironmentFromJSON;
function logsMessages_appEnvironmentToJSON(object) {
    switch (object) {
        case LogsMessages_appEnvironment.DEV:
            return "DEV";
        case LogsMessages_appEnvironment.TEST:
            return "TEST";
        case LogsMessages_appEnvironment.PROD:
            return "PROD";
        case LogsMessages_appEnvironment.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.logsMessages_appEnvironmentToJSON = logsMessages_appEnvironmentToJSON;
function createBaseEmpty() {
    return {};
}
exports.Empty = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmpty();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.Empty.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseEmpty();
        return message;
    },
};
function createBaseLogsMessages() {
    return {};
}
exports.LogsMessages = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLogsMessages();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.LogsMessages.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseLogsMessages();
        return message;
    },
};
function createBaseLogsMessages_Application() {
    return { name: "", version: undefined, environment: 0 };
}
exports.LogsMessages_Application = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.version !== undefined) {
            writer.uint32(18).string(message.version);
        }
        if (message.environment !== 0) {
            writer.uint32(24).int32(message.environment);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLogsMessages_Application();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.version = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.environment = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            version: isSet(object.version)
                ? globalThis.String(object.version)
                : undefined,
            environment: isSet(object.environment)
                ? logsMessages_appEnvironmentFromJSON(object.environment)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.version !== undefined) {
            obj.version = message.version;
        }
        if (message.environment !== 0) {
            obj.environment = logsMessages_appEnvironmentToJSON(message.environment);
        }
        return obj;
    },
    create(base) {
        return exports.LogsMessages_Application.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseLogsMessages_Application();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.version = (_b = object.version) !== null && _b !== void 0 ? _b : undefined;
        message.environment = (_c = object.environment) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseLogsMessages_Log() {
    return {
        logTime: 0,
        level: 0,
        message: "",
        stackTrace: "",
        application: undefined,
        id: "",
    };
}
exports.LogsMessages_Log = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.logTime !== 0) {
            writer.uint32(8).int64(message.logTime);
        }
        if (message.level !== 0) {
            writer.uint32(16).int32(message.level);
        }
        if (message.message !== "") {
            writer.uint32(26).string(message.message);
        }
        if (message.stackTrace !== "") {
            writer.uint32(34).string(message.stackTrace);
        }
        if (message.application !== undefined) {
            exports.LogsMessages_Application.encode(message.application, writer.uint32(42).fork()).ldelim();
        }
        if (message.id !== "") {
            writer.uint32(50).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLogsMessages_Log();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.logTime = longToNumber(reader.int64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.level = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.message = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.stackTrace = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.application = exports.LogsMessages_Application.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            logTime: isSet(object.logTime) ? globalThis.Number(object.logTime) : 0,
            level: isSet(object.level)
                ? logsMessages_logLevelFromJSON(object.level)
                : 0,
            message: isSet(object.message) ? globalThis.String(object.message) : "",
            stackTrace: isSet(object.stackTrace)
                ? globalThis.String(object.stackTrace)
                : "",
            application: isSet(object.application)
                ? exports.LogsMessages_Application.fromJSON(object.application)
                : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.logTime !== 0) {
            obj.logTime = Math.round(message.logTime);
        }
        if (message.level !== 0) {
            obj.level = logsMessages_logLevelToJSON(message.level);
        }
        if (message.message !== "") {
            obj.message = message.message;
        }
        if (message.stackTrace !== "") {
            obj.stackTrace = message.stackTrace;
        }
        if (message.application !== undefined) {
            obj.application = exports.LogsMessages_Application.toJSON(message.application);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.LogsMessages_Log.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseLogsMessages_Log();
        message.logTime = (_a = object.logTime) !== null && _a !== void 0 ? _a : 0;
        message.level = (_b = object.level) !== null && _b !== void 0 ? _b : 0;
        message.message = (_c = object.message) !== null && _c !== void 0 ? _c : "";
        message.stackTrace = (_d = object.stackTrace) !== null && _d !== void 0 ? _d : "";
        message.application =
            object.application !== undefined && object.application !== null
                ? exports.LogsMessages_Application.fromPartial(object.application)
                : undefined;
        message.id = (_e = object.id) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseLogsMessages_LogForCreate() {
    return { level: 0, message: "", stackTrace: "", application: undefined };
}
exports.LogsMessages_LogForCreate = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.level !== 0) {
            writer.uint32(16).int32(message.level);
        }
        if (message.message !== "") {
            writer.uint32(26).string(message.message);
        }
        if (message.stackTrace !== "") {
            writer.uint32(34).string(message.stackTrace);
        }
        if (message.application !== undefined) {
            exports.LogsMessages_Application.encode(message.application, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLogsMessages_LogForCreate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.level = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.message = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.stackTrace = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.application = exports.LogsMessages_Application.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            level: isSet(object.level)
                ? logsMessages_logLevelFromJSON(object.level)
                : 0,
            message: isSet(object.message) ? globalThis.String(object.message) : "",
            stackTrace: isSet(object.stackTrace)
                ? globalThis.String(object.stackTrace)
                : "",
            application: isSet(object.application)
                ? exports.LogsMessages_Application.fromJSON(object.application)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.level !== 0) {
            obj.level = logsMessages_logLevelToJSON(message.level);
        }
        if (message.message !== "") {
            obj.message = message.message;
        }
        if (message.stackTrace !== "") {
            obj.stackTrace = message.stackTrace;
        }
        if (message.application !== undefined) {
            obj.application = exports.LogsMessages_Application.toJSON(message.application);
        }
        return obj;
    },
    create(base) {
        return exports.LogsMessages_LogForCreate.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseLogsMessages_LogForCreate();
        message.level = (_a = object.level) !== null && _a !== void 0 ? _a : 0;
        message.message = (_b = object.message) !== null && _b !== void 0 ? _b : "";
        message.stackTrace = (_c = object.stackTrace) !== null && _c !== void 0 ? _c : "";
        message.application =
            object.application !== undefined && object.application !== null
                ? exports.LogsMessages_Application.fromPartial(object.application)
                : undefined;
        return message;
    },
};
function createBaseLogCreatedResponse() {
    return { created: false };
}
exports.LogCreatedResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.created === true) {
            writer.uint32(8).bool(message.created);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLogCreatedResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.created = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            created: isSet(object.created)
                ? globalThis.Boolean(object.created)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.created === true) {
            obj.created = message.created;
        }
        return obj;
    },
    create(base) {
        return exports.LogCreatedResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseLogCreatedResponse();
        message.created = (_a = object.created) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
exports.LogCollectorServiceService = {
    create: {
        path: "/LogCollector.LogCollectorService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.LogsMessages_LogForCreate.encode(value).finish()),
        requestDeserialize: (value) => exports.LogsMessages_LogForCreate.decode(value),
        responseSerialize: (value) => Buffer.from(exports.LogCreatedResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.LogCreatedResponse.decode(value),
    },
};
exports.LogCollectorServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.LogCollectorServiceService, "LogCollector.LogCollectorService");
function longToNumber(long) {
    if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
