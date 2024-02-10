/// <reference types="node" />
import { ChannelCredentials, Client, Metadata } from "@grpc/grpc-js";
import type { CallOptions, ClientOptions, ClientUnaryCall, handleUnaryCall, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
export interface Empty {
}
export interface LogsMessages {
}
export declare enum LogsMessages_logLevel {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3,
    FATAL = 4,
    UNRECOGNIZED = -1
}
export declare function logsMessages_logLevelFromJSON(object: any): LogsMessages_logLevel;
export declare function logsMessages_logLevelToJSON(object: LogsMessages_logLevel): string;
export declare enum LogsMessages_appEnvironment {
    DEV = 0,
    TEST = 1,
    PROD = 2,
    UNRECOGNIZED = -1
}
export declare function logsMessages_appEnvironmentFromJSON(object: any): LogsMessages_appEnvironment;
export declare function logsMessages_appEnvironmentToJSON(object: LogsMessages_appEnvironment): string;
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
export declare const Empty: {
    encode(_: Empty, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Empty;
    fromJSON(_: any): Empty;
    toJSON(_: Empty): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): Empty;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): Empty;
};
export declare const LogsMessages: {
    encode(_: LogsMessages, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LogsMessages;
    fromJSON(_: any): LogsMessages;
    toJSON(_: LogsMessages): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): LogsMessages;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): LogsMessages;
};
export declare const LogsMessages_Application: {
    encode(message: LogsMessages_Application, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LogsMessages_Application;
    fromJSON(object: any): LogsMessages_Application;
    toJSON(message: LogsMessages_Application): unknown;
    create<I extends {
        name?: string | undefined;
        version?: string | undefined;
        environment?: LogsMessages_appEnvironment | undefined;
    } & {
        name?: string | undefined;
        version?: string | undefined;
        environment?: LogsMessages_appEnvironment | undefined;
    } & { [K in Exclude<keyof I, keyof LogsMessages_Application>]: never; }>(base?: I | undefined): LogsMessages_Application;
    fromPartial<I_1 extends {
        name?: string | undefined;
        version?: string | undefined;
        environment?: LogsMessages_appEnvironment | undefined;
    } & {
        name?: string | undefined;
        version?: string | undefined;
        environment?: LogsMessages_appEnvironment | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof LogsMessages_Application>]: never; }>(object: I_1): LogsMessages_Application;
};
export declare const LogsMessages_Log: {
    encode(message: LogsMessages_Log, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LogsMessages_Log;
    fromJSON(object: any): LogsMessages_Log;
    toJSON(message: LogsMessages_Log): unknown;
    create<I extends {
        logTime?: number | undefined;
        level?: LogsMessages_logLevel | undefined;
        message?: string | undefined;
        stackTrace?: string | undefined;
        application?: {
            name?: string | undefined;
            version?: string | undefined;
            environment?: LogsMessages_appEnvironment | undefined;
        } | undefined;
        id?: string | undefined;
    } & {
        logTime?: number | undefined;
        level?: LogsMessages_logLevel | undefined;
        message?: string | undefined;
        stackTrace?: string | undefined;
        application?: ({
            name?: string | undefined;
            version?: string | undefined;
            environment?: LogsMessages_appEnvironment | undefined;
        } & {
            name?: string | undefined;
            version?: string | undefined;
            environment?: LogsMessages_appEnvironment | undefined;
        } & { [K in Exclude<keyof I["application"], keyof LogsMessages_Application>]: never; }) | undefined;
        id?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof LogsMessages_Log>]: never; }>(base?: I | undefined): LogsMessages_Log;
    fromPartial<I_1 extends {
        logTime?: number | undefined;
        level?: LogsMessages_logLevel | undefined;
        message?: string | undefined;
        stackTrace?: string | undefined;
        application?: {
            name?: string | undefined;
            version?: string | undefined;
            environment?: LogsMessages_appEnvironment | undefined;
        } | undefined;
        id?: string | undefined;
    } & {
        logTime?: number | undefined;
        level?: LogsMessages_logLevel | undefined;
        message?: string | undefined;
        stackTrace?: string | undefined;
        application?: ({
            name?: string | undefined;
            version?: string | undefined;
            environment?: LogsMessages_appEnvironment | undefined;
        } & {
            name?: string | undefined;
            version?: string | undefined;
            environment?: LogsMessages_appEnvironment | undefined;
        } & { [K_2 in Exclude<keyof I_1["application"], keyof LogsMessages_Application>]: never; }) | undefined;
        id?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof LogsMessages_Log>]: never; }>(object: I_1): LogsMessages_Log;
};
export declare const LogsMessages_LogForCreate: {
    encode(message: LogsMessages_LogForCreate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LogsMessages_LogForCreate;
    fromJSON(object: any): LogsMessages_LogForCreate;
    toJSON(message: LogsMessages_LogForCreate): unknown;
    create<I extends {
        level?: LogsMessages_logLevel | undefined;
        message?: string | undefined;
        stackTrace?: string | undefined;
        application?: {
            name?: string | undefined;
            version?: string | undefined;
            environment?: LogsMessages_appEnvironment | undefined;
        } | undefined;
    } & {
        level?: LogsMessages_logLevel | undefined;
        message?: string | undefined;
        stackTrace?: string | undefined;
        application?: ({
            name?: string | undefined;
            version?: string | undefined;
            environment?: LogsMessages_appEnvironment | undefined;
        } & {
            name?: string | undefined;
            version?: string | undefined;
            environment?: LogsMessages_appEnvironment | undefined;
        } & { [K in Exclude<keyof I["application"], keyof LogsMessages_Application>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof LogsMessages_LogForCreate>]: never; }>(base?: I | undefined): LogsMessages_LogForCreate;
    fromPartial<I_1 extends {
        level?: LogsMessages_logLevel | undefined;
        message?: string | undefined;
        stackTrace?: string | undefined;
        application?: {
            name?: string | undefined;
            version?: string | undefined;
            environment?: LogsMessages_appEnvironment | undefined;
        } | undefined;
    } & {
        level?: LogsMessages_logLevel | undefined;
        message?: string | undefined;
        stackTrace?: string | undefined;
        application?: ({
            name?: string | undefined;
            version?: string | undefined;
            environment?: LogsMessages_appEnvironment | undefined;
        } & {
            name?: string | undefined;
            version?: string | undefined;
            environment?: LogsMessages_appEnvironment | undefined;
        } & { [K_2 in Exclude<keyof I_1["application"], keyof LogsMessages_Application>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof LogsMessages_LogForCreate>]: never; }>(object: I_1): LogsMessages_LogForCreate;
};
export declare const LogCreatedResponse: {
    encode(message: LogCreatedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LogCreatedResponse;
    fromJSON(object: any): LogCreatedResponse;
    toJSON(message: LogCreatedResponse): unknown;
    create<I extends {
        created?: boolean | undefined;
    } & {
        created?: boolean | undefined;
    } & { [K in Exclude<keyof I, "created">]: never; }>(base?: I | undefined): LogCreatedResponse;
    fromPartial<I_1 extends {
        created?: boolean | undefined;
    } & {
        created?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I_1, "created">]: never; }>(object: I_1): LogCreatedResponse;
};
export type LogCollectorServiceService = typeof LogCollectorServiceService;
export declare const LogCollectorServiceService: {
    readonly create: {
        readonly path: "/LogCollector.LogCollectorService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: LogsMessages_LogForCreate) => Buffer;
        readonly requestDeserialize: (value: Buffer) => LogsMessages_LogForCreate;
        readonly responseSerialize: (value: LogCreatedResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => LogCreatedResponse;
    };
};
export interface LogCollectorServiceServer extends UntypedServiceImplementation {
    create: handleUnaryCall<LogsMessages_LogForCreate, LogCreatedResponse>;
}
export interface LogCollectorServiceClient extends Client {
    create(request: LogsMessages_LogForCreate, callback: (error: ServiceError | null, response: LogCreatedResponse) => void): ClientUnaryCall;
    create(request: LogsMessages_LogForCreate, metadata: Metadata, callback: (error: ServiceError | null, response: LogCreatedResponse) => void): ClientUnaryCall;
    create(request: LogsMessages_LogForCreate, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: LogCreatedResponse) => void): ClientUnaryCall;
}
export declare const LogCollectorServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): LogCollectorServiceClient;
    service: typeof LogCollectorServiceService;
    serviceName: string;
};
