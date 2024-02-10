import { ChannelCredentials } from "@grpc/grpc-js";
import { SurfaceCall } from "@grpc/grpc-js/build/src/call";
import {
  LogCollectorServiceClient,
  LogCreatedResponse,
  LogsMessages_LogForCreate,
} from "../dtos/logsCollector";

export class LogCollectorService {
  private client: LogCollectorServiceClient;

  constructor(address: string) {
    this.client = new LogCollectorServiceClient(
      address,
      ChannelCredentials.createInsecure(),
      {
        "grpc.keepalive_time_ms": 120000,
        "grpc.http2.min_time_between_pings_ms": 120000,
        "grpc.keepalive_timeout_ms": 20000,
        "grpc.http2.max_pings_without_data": 0,
        "grpc.keepalive_permit_without_calls": 1,
      }
    );
  }

  async log(msg: LogsMessages_LogForCreate): Promise<LogCreatedResponse> {
    return new Promise((resolve, rejects) => {
      this.client.create(msg, (err, response) => {
        if (err) rejects(err);
        resolve(response);
      });
    });
  }
}
