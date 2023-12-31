/* eslint-disable */
/*Generated by GenDocu.com*/
// package: public.v1
// file: simulations.proto

import * as simulations_pb from "./simulations_pb";
import {grpc} from "@improbable-eng/grpc-web";

type SimulationsServiceSimulate = {
  readonly methodName: string;
  readonly service: typeof SimulationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof simulations_pb.SimulateRequest;
  readonly responseType: typeof simulations_pb.SimulateResponse;
};

export class SimulationsService {
  static readonly serviceName: string;
  static readonly Simulate: SimulationsServiceSimulate;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class SimulationsServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  simulate(
    requestMessage: simulations_pb.SimulateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: simulations_pb.SimulateResponse|null) => void
  ): UnaryResponse;
  simulate(
    requestMessage: simulations_pb.SimulateRequest,
    callback: (error: ServiceError|null, responseMessage: simulations_pb.SimulateResponse|null) => void
  ): UnaryResponse;
}

