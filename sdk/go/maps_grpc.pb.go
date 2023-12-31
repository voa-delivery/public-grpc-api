// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package _go

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// MapsServiceClient is the client API for MapsService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type MapsServiceClient interface {
	Geocode(ctx context.Context, in *GeocodeRequest, opts ...grpc.CallOption) (*GeocodeResponse, error)
}

type mapsServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewMapsServiceClient(cc grpc.ClientConnInterface) MapsServiceClient {
	return &mapsServiceClient{cc}
}

func (c *mapsServiceClient) Geocode(ctx context.Context, in *GeocodeRequest, opts ...grpc.CallOption) (*GeocodeResponse, error) {
	out := new(GeocodeResponse)
	err := c.cc.Invoke(ctx, "/public.v1.MapsService/Geocode", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MapsServiceServer is the server API for MapsService service.
// All implementations must embed UnimplementedMapsServiceServer
// for forward compatibility
type MapsServiceServer interface {
	Geocode(context.Context, *GeocodeRequest) (*GeocodeResponse, error)
	mustEmbedUnimplementedMapsServiceServer()
}

// UnimplementedMapsServiceServer must be embedded to have forward compatible implementations.
type UnimplementedMapsServiceServer struct {
}

func (UnimplementedMapsServiceServer) Geocode(context.Context, *GeocodeRequest) (*GeocodeResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Geocode not implemented")
}
func (UnimplementedMapsServiceServer) mustEmbedUnimplementedMapsServiceServer() {}

// UnsafeMapsServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to MapsServiceServer will
// result in compilation errors.
type UnsafeMapsServiceServer interface {
	mustEmbedUnimplementedMapsServiceServer()
}

func RegisterMapsServiceServer(s grpc.ServiceRegistrar, srv MapsServiceServer) {
	s.RegisterService(&MapsService_ServiceDesc, srv)
}

func _MapsService_Geocode_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GeocodeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MapsServiceServer).Geocode(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/public.v1.MapsService/Geocode",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MapsServiceServer).Geocode(ctx, req.(*GeocodeRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// MapsService_ServiceDesc is the grpc.ServiceDesc for MapsService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var MapsService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "public.v1.MapsService",
	HandlerType: (*MapsServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Geocode",
			Handler:    _MapsService_Geocode_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "maps.proto",
}
