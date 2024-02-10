import { ChannelCredentials } from "@grpc/grpc-js";
import {
  HealthCheckResponse_ServingStatus,
  HealthClient,
} from "../dtos/health";

export class HealthService {
  private client: HealthClient;
  constructor(address: string) {
    this.client = new HealthClient(
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

  async check(): Promise<HealthCheckResponse_ServingStatus> {
    return new Promise((resolve, rejects) => {
      this.client.check({ service: "" }, (err, response) => {
        if (err) rejects(err);
        resolve(response.status);
      });
    });
  }

  async isAvailable(): Promise<boolean> {
    return (await this.check()) === HealthCheckResponse_ServingStatus.SERVING;
  }
}
