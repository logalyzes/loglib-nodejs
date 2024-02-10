/// <reference types="node" />
import { ChannelCredentials, Client, ClientReadableStream, handleServerStreamingCall, Metadata } from "@grpc/grpc-js";
import type { CallOptions, ClientOptions, ClientUnaryCall, handleUnaryCall, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
export interface HealthCheckRequest {
    service: string;
}
export interface HealthCheckResponse {
    status: HealthCheckResponse_ServingStatus;
}
export declare enum HealthCheckResponse_ServingStatus {
    UNKNOWN = 0,
    SERVING = 1,
    NOT_SERVING = 2,
    /** SERVICE_UNKNOWN - Used only by the Watch method. */
    SERVICE_UNKNOWN = 3,
    UNRECOGNIZED = -1
}
export declare function healthCheckResponse_ServingStatusFromJSON(object: any): HealthCheckResponse_ServingStatus;
export declare function healthCheckResponse_ServingStatusToJSON(object: HealthCheckResponse_ServingStatus): string;
export declare const HealthCheckRequest: {
    encode(message: HealthCheckRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheckRequest;
    fromJSON(object: any): HealthCheckRequest;
    toJSON(message: HealthCheckRequest): unknown;
    create<I extends {
        service?: string | undefined;
    } & {
        service?: string | undefined;
    } & { [K in Exclude<keyof I, "service">]: never; }>(base?: I | undefined): HealthCheckRequest;
    fromPartial<I_1 extends {
        service?: string | undefined;
    } & {
        service?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "service">]: never; }>(object: I_1): HealthCheckRequest;
};
export declare const HealthCheckResponse: {
    encode(message: HealthCheckResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheckResponse;
    fromJSON(object: any): HealthCheckResponse;
    toJSON(message: HealthCheckResponse): unknown;
    create<I extends {
        status?: HealthCheckResponse_ServingStatus | undefined;
    } & {
        status?: HealthCheckResponse_ServingStatus | undefined;
    } & { [K in Exclude<keyof I, "status">]: never; }>(base?: I | undefined): HealthCheckResponse;
    fromPartial<I_1 extends {
        status?: HealthCheckResponse_ServingStatus | undefined;
    } & {
        status?: HealthCheckResponse_ServingStatus | undefined;
    } & { [K_1 in Exclude<keyof I_1, "status">]: never; }>(object: I_1): HealthCheckResponse;
};
export type HealthService = typeof HealthService;
export declare const HealthService: {
    /**
     * If the requested service is unknown, the call will fail with status
     * NOT_FOUND.
     */
    readonly check: {
        readonly path: "/health.Health/Check";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: HealthCheckRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => HealthCheckRequest;
        readonly responseSerialize: (value: HealthCheckResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => HealthCheckResponse;
    };
    /**
     * Performs a watch for the serving status of the requested service.
     * The server will immediately send back a message indicating the current
     * serving status.  It will then subsequently send a new message whenever
     * the service's serving status changes.
     *
     * If the requested service is unknown when the call is received, the
     * server will send a message setting the serving status to
     * SERVICE_UNKNOWN but will *not* terminate the call.  If at some
     * future point, the serving status of the service becomes known, the
     * server will send a new message with the service's serving status.
     *
     * If the call terminates with status UNIMPLEMENTED, then clients
     * should assume this method is not supported and should not retry the
     * call.  If the call terminates with any other status (including OK),
     * clients should retry the call with appropriate exponential backoff.
     */
    readonly watch: {
        readonly path: "/health.Health/Watch";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: HealthCheckRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => HealthCheckRequest;
        readonly responseSerialize: (value: HealthCheckResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => HealthCheckResponse;
    };
};
export interface HealthServer extends UntypedServiceImplementation {
    /**
     * If the requested service is unknown, the call will fail with status
     * NOT_FOUND.
     */
    check: handleUnaryCall<HealthCheckRequest, HealthCheckResponse>;
    /**
     * Performs a watch for the serving status of the requested service.
     * The server will immediately send back a message indicating the current
     * serving status.  It will then subsequently send a new message whenever
     * the service's serving status changes.
     *
     * If the requested service is unknown when the call is received, the
     * server will send a message setting the serving status to
     * SERVICE_UNKNOWN but will *not* terminate the call.  If at some
     * future point, the serving status of the service becomes known, the
     * server will send a new message with the service's serving status.
     *
     * If the call terminates with status UNIMPLEMENTED, then clients
     * should assume this method is not supported and should not retry the
     * call.  If the call terminates with any other status (including OK),
     * clients should retry the call with appropriate exponential backoff.
     */
    watch: handleServerStreamingCall<HealthCheckRequest, HealthCheckResponse>;
}
export interface HealthClient extends Client {
    /**
     * If the requested service is unknown, the call will fail with status
     * NOT_FOUND.
     */
    check(request: HealthCheckRequest, callback: (error: ServiceError | null, response: HealthCheckResponse) => void): ClientUnaryCall;
    check(request: HealthCheckRequest, metadata: Metadata, callback: (error: ServiceError | null, response: HealthCheckResponse) => void): ClientUnaryCall;
    check(request: HealthCheckRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: HealthCheckResponse) => void): ClientUnaryCall;
    /**
     * Performs a watch for the serving status of the requested service.
     * The server will immediately send back a message indicating the current
     * serving status.  It will then subsequently send a new message whenever
     * the service's serving status changes.
     *
     * If the requested service is unknown when the call is received, the
     * server will send a message setting the serving status to
     * SERVICE_UNKNOWN but will *not* terminate the call.  If at some
     * future point, the serving status of the service becomes known, the
     * server will send a new message with the service's serving status.
     *
     * If the call terminates with status UNIMPLEMENTED, then clients
     * should assume this method is not supported and should not retry the
     * call.  If the call terminates with any other status (including OK),
     * clients should retry the call with appropriate exponential backoff.
     */
    watch(request: HealthCheckRequest, options?: Partial<CallOptions>): ClientReadableStream<HealthCheckResponse>;
    watch(request: HealthCheckRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<HealthCheckResponse>;
}
export declare const HealthClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): HealthClient;
    service: typeof HealthService;
    serviceName: string;
};
