import { HealthCheckResponse_ServingStatus } from "../dtos/health";
export declare class HealthService {
    private client;
    constructor(address: string);
    check(): Promise<HealthCheckResponse_ServingStatus>;
    isAvailable(): Promise<boolean>;
}
