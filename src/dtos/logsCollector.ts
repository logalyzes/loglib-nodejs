/* eslint-disable */
import {
  ChannelCredentials,
  Client,
  makeGenericClientConstructor,
  Metadata,
} from "@grpc/grpc-js";
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface Empty {}

export interface LogsMessages {}

export enum LogsMessages_logLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  FATAL = 4,
  UNRECOGNIZED = -1,
}

export function logsMessages_logLevelFromJSON(
  object: any
): LogsMessages_logLevel {
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

export function logsMessages_logLevelToJSON(
  object: LogsMessages_logLevel
): string {
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

export enum LogsMessages_appEnvironment {
  DEV = 0,
  TEST = 1,
  PROD = 2,
  UNRECOGNIZED = -1,
}

export function logsMessages_appEnvironmentFromJSON(
  object: any
): LogsMessages_appEnvironment {
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

export function logsMessages_appEnvironmentToJSON(
  object: LogsMessages_appEnvironment
): string {
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

export interface LogsMessages_Application {
  name: string;
  version?: string | undefined;
  environment: LogsMessages_appEnvironment;
}

export interface LogsMessages_Log {
  logTime: number;
  level: LogsMessages_logLevel;
  message: string;
  stackTrace: string;
  application?: LogsMessages_Application | undefined;
  id: string;
}

export interface LogsMessages_LogForCreate {
  level: LogsMessages_logLevel;
  message: string;
  stackTrace: string;
  application?: LogsMessages_Application | undefined;
}

export interface LogCreatedResponse {
  created: boolean;
}

function createBaseEmpty(): Empty {
  return {};
}

export const Empty = {
  encode(_: Empty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Empty {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  fromJSON(_: any): Empty {
    return {};
  },

  toJSON(_: Empty): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Empty>, I>>(base?: I): Empty {
    return Empty.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Empty>, I>>(_: I): Empty {
    const message = createBaseEmpty();
    return message;
  },
};

function createBaseLogsMessages(): LogsMessages {
  return {};
}

export const LogsMessages = {
  encode(
    _: LogsMessages,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogsMessages {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  fromJSON(_: any): LogsMessages {
    return {};
  },

  toJSON(_: LogsMessages): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<LogsMessages>, I>>(
    base?: I
  ): LogsMessages {
    return LogsMessages.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LogsMessages>, I>>(
    _: I
  ): LogsMessages {
    const message = createBaseLogsMessages();
    return message;
  },
};

function createBaseLogsMessages_Application(): LogsMessages_Application {
  return { name: "", version: undefined, environment: 0 };
}

export const LogsMessages_Application = {
  encode(
    message: LogsMessages_Application,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LogsMessages_Application {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

          message.environment = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LogsMessages_Application {
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

  toJSON(message: LogsMessages_Application): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<LogsMessages_Application>, I>>(
    base?: I
  ): LogsMessages_Application {
    return LogsMessages_Application.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LogsMessages_Application>, I>>(
    object: I
  ): LogsMessages_Application {
    const message = createBaseLogsMessages_Application();
    message.name = object.name ?? "";
    message.version = object.version ?? undefined;
    message.environment = object.environment ?? 0;
    return message;
  },
};

function createBaseLogsMessages_Log(): LogsMessages_Log {
  return {
    logTime: 0,
    level: 0,
    message: "",
    stackTrace: "",
    application: undefined,
    id: "",
  };
}

export const LogsMessages_Log = {
  encode(
    message: LogsMessages_Log,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      LogsMessages_Application.encode(
        message.application,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.id !== "") {
      writer.uint32(50).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogsMessages_Log {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogsMessages_Log();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.logTime = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.level = reader.int32() as any;
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

          message.application = LogsMessages_Application.decode(
            reader,
            reader.uint32()
          );
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

  fromJSON(object: any): LogsMessages_Log {
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
        ? LogsMessages_Application.fromJSON(object.application)
        : undefined,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
    };
  },

  toJSON(message: LogsMessages_Log): unknown {
    const obj: any = {};
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
      obj.application = LogsMessages_Application.toJSON(message.application);
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LogsMessages_Log>, I>>(
    base?: I
  ): LogsMessages_Log {
    return LogsMessages_Log.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LogsMessages_Log>, I>>(
    object: I
  ): LogsMessages_Log {
    const message = createBaseLogsMessages_Log();
    message.logTime = object.logTime ?? 0;
    message.level = object.level ?? 0;
    message.message = object.message ?? "";
    message.stackTrace = object.stackTrace ?? "";
    message.application =
      object.application !== undefined && object.application !== null
        ? LogsMessages_Application.fromPartial(object.application)
        : undefined;
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseLogsMessages_LogForCreate(): LogsMessages_LogForCreate {
  return { level: 0, message: "", stackTrace: "", application: undefined };
}

export const LogsMessages_LogForCreate = {
  encode(
    message: LogsMessages_LogForCreate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      LogsMessages_Application.encode(
        message.application,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LogsMessages_LogForCreate {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogsMessages_LogForCreate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 16) {
            break;
          }

          message.level = reader.int32() as any;
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

          message.application = LogsMessages_Application.decode(
            reader,
            reader.uint32()
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LogsMessages_LogForCreate {
    return {
      level: isSet(object.level)
        ? logsMessages_logLevelFromJSON(object.level)
        : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      stackTrace: isSet(object.stackTrace)
        ? globalThis.String(object.stackTrace)
        : "",
      application: isSet(object.application)
        ? LogsMessages_Application.fromJSON(object.application)
        : undefined,
    };
  },

  toJSON(message: LogsMessages_LogForCreate): unknown {
    const obj: any = {};
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
      obj.application = LogsMessages_Application.toJSON(message.application);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LogsMessages_LogForCreate>, I>>(
    base?: I
  ): LogsMessages_LogForCreate {
    return LogsMessages_LogForCreate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LogsMessages_LogForCreate>, I>>(
    object: I
  ): LogsMessages_LogForCreate {
    const message = createBaseLogsMessages_LogForCreate();
    message.level = object.level ?? 0;
    message.message = object.message ?? "";
    message.stackTrace = object.stackTrace ?? "";
    message.application =
      object.application !== undefined && object.application !== null
        ? LogsMessages_Application.fromPartial(object.application)
        : undefined;
    return message;
  },
};

function createBaseLogCreatedResponse(): LogCreatedResponse {
  return { created: false };
}

export const LogCreatedResponse = {
  encode(
    message: LogCreatedResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.created === true) {
      writer.uint32(8).bool(message.created);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogCreatedResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  fromJSON(object: any): LogCreatedResponse {
    return {
      created: isSet(object.created)
        ? globalThis.Boolean(object.created)
        : false,
    };
  },

  toJSON(message: LogCreatedResponse): unknown {
    const obj: any = {};
    if (message.created === true) {
      obj.created = message.created;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LogCreatedResponse>, I>>(
    base?: I
  ): LogCreatedResponse {
    return LogCreatedResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LogCreatedResponse>, I>>(
    object: I
  ): LogCreatedResponse {
    const message = createBaseLogCreatedResponse();
    message.created = object.created ?? false;
    return message;
  },
};

export type LogCollectorServiceService = typeof LogCollectorServiceService;
export const LogCollectorServiceService = {
  create: {
    path: "/LogCollector.LogCollectorService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LogsMessages_LogForCreate) =>
      Buffer.from(LogsMessages_LogForCreate.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      LogsMessages_LogForCreate.decode(value),
    responseSerialize: (value: LogCreatedResponse) =>
      Buffer.from(LogCreatedResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LogCreatedResponse.decode(value),
  },
} as const;

export interface LogCollectorServiceServer
  extends UntypedServiceImplementation {
  create: handleUnaryCall<LogsMessages_LogForCreate, LogCreatedResponse>;
}

export interface LogCollectorServiceClient extends Client {
  create(
    request: LogsMessages_LogForCreate,
    callback: (error: ServiceError | null, response: LogCreatedResponse) => void
  ): ClientUnaryCall;
  create(
    request: LogsMessages_LogForCreate,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: LogCreatedResponse) => void
  ): ClientUnaryCall;
  create(
    request: LogsMessages_LogForCreate,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: LogCreatedResponse) => void
  ): ClientUnaryCall;
}

export const LogCollectorServiceClient = makeGenericClientConstructor(
  LogCollectorServiceService,
  "LogCollector.LogCollectorService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>
  ): LogCollectorServiceClient;
  service: typeof LogCollectorServiceService;
  serviceName: string;
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

type DeepPartial<T> = T extends Builtin
  ? T
  : T extends globalThis.Array<infer U>
  ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
