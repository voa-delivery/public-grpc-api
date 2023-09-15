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

// OrganizationsServiceClient is the client API for OrganizationsService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type OrganizationsServiceClient interface {
	GetOrganization(ctx context.Context, in *GetOrganizationRequest, opts ...grpc.CallOption) (*GetOrganizationResponse, error)
}

type organizationsServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewOrganizationsServiceClient(cc grpc.ClientConnInterface) OrganizationsServiceClient {
	return &organizationsServiceClient{cc}
}

func (c *organizationsServiceClient) GetOrganization(ctx context.Context, in *GetOrganizationRequest, opts ...grpc.CallOption) (*GetOrganizationResponse, error) {
	out := new(GetOrganizationResponse)
	err := c.cc.Invoke(ctx, "/public.v1.OrganizationsService/GetOrganization", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// OrganizationsServiceServer is the server API for OrganizationsService service.
// All implementations must embed UnimplementedOrganizationsServiceServer
// for forward compatibility
type OrganizationsServiceServer interface {
	GetOrganization(context.Context, *GetOrganizationRequest) (*GetOrganizationResponse, error)
	mustEmbedUnimplementedOrganizationsServiceServer()
}

// UnimplementedOrganizationsServiceServer must be embedded to have forward compatible implementations.
type UnimplementedOrganizationsServiceServer struct {
}

func (UnimplementedOrganizationsServiceServer) GetOrganization(context.Context, *GetOrganizationRequest) (*GetOrganizationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetOrganization not implemented")
}
func (UnimplementedOrganizationsServiceServer) mustEmbedUnimplementedOrganizationsServiceServer() {}

// UnsafeOrganizationsServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to OrganizationsServiceServer will
// result in compilation errors.
type UnsafeOrganizationsServiceServer interface {
	mustEmbedUnimplementedOrganizationsServiceServer()
}

func RegisterOrganizationsServiceServer(s grpc.ServiceRegistrar, srv OrganizationsServiceServer) {
	s.RegisterService(&OrganizationsService_ServiceDesc, srv)
}

func _OrganizationsService_GetOrganization_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetOrganizationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OrganizationsServiceServer).GetOrganization(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/public.v1.OrganizationsService/GetOrganization",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OrganizationsServiceServer).GetOrganization(ctx, req.(*GetOrganizationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// OrganizationsService_ServiceDesc is the grpc.ServiceDesc for OrganizationsService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var OrganizationsService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "public.v1.OrganizationsService",
	HandlerType: (*OrganizationsServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetOrganization",
			Handler:    _OrganizationsService_GetOrganization_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "organizations.proto",
}