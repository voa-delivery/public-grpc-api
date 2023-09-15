/* eslint-disable */
/*Generated by GenDocu.com*/
// package: public.v1
// file: orders.proto

import * as orders_pb from "./orders_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type OrdersServiceCreateOrder = {
  readonly methodName: string;
  readonly service: typeof OrdersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof orders_pb.CreateOrderRequest;
  readonly responseType: typeof orders_pb.CreateOrderResponse;
};

type OrdersServiceGetOrder = {
  readonly methodName: string;
  readonly service: typeof OrdersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof orders_pb.GetOrderRequest;
  readonly responseType: typeof orders_pb.GetOrderResponse;
};

type OrdersServiceCancelOrder = {
  readonly methodName: string;
  readonly service: typeof OrdersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof orders_pb.CancelOrderRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

export class OrdersService {
  static readonly serviceName: string;
  static readonly CreateOrder: OrdersServiceCreateOrder;
  static readonly GetOrder: OrdersServiceGetOrder;
  static readonly CancelOrder: OrdersServiceCancelOrder;
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

export class OrdersServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createOrder(
    requestMessage: orders_pb.CreateOrderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: orders_pb.CreateOrderResponse|null) => void
  ): UnaryResponse;
  createOrder(
    requestMessage: orders_pb.CreateOrderRequest,
    callback: (error: ServiceError|null, responseMessage: orders_pb.CreateOrderResponse|null) => void
  ): UnaryResponse;
  getOrder(
    requestMessage: orders_pb.GetOrderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: orders_pb.GetOrderResponse|null) => void
  ): UnaryResponse;
  getOrder(
    requestMessage: orders_pb.GetOrderRequest,
    callback: (error: ServiceError|null, responseMessage: orders_pb.GetOrderResponse|null) => void
  ): UnaryResponse;
  cancelOrder(
    requestMessage: orders_pb.CancelOrderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  cancelOrder(
    requestMessage: orders_pb.CancelOrderRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
}

