/* eslint-disable */
/*Generated by GenDocu.com*/
// package: public.v1
// file: maps.proto

import * as jspb from "google-protobuf";
import * as entities_pb from "./entities_pb";

export class GeocodeRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeocodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GeocodeRequest): GeocodeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeocodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeocodeRequest;
  static deserializeBinaryFromReader(message: GeocodeRequest, reader: jspb.BinaryReader): GeocodeRequest;
}

export namespace GeocodeRequest {
  export type AsObject = {
    query: string,
  }
}

export class GeocodeResponse extends jspb.Message {
  clearSuggestionsList(): void;
  getSuggestionsList(): Array<entities_pb.Address>;
  setSuggestionsList(value: Array<entities_pb.Address>): void;
  addSuggestions(value?: entities_pb.Address, index?: number): entities_pb.Address;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeocodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GeocodeResponse): GeocodeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeocodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeocodeResponse;
  static deserializeBinaryFromReader(message: GeocodeResponse, reader: jspb.BinaryReader): GeocodeResponse;
}

export namespace GeocodeResponse {
  export type AsObject = {
    suggestionsList: Array<entities_pb.Address.AsObject>,
  }
}

