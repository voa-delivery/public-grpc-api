/* eslint-disable */
/*Generated by GenDocu.com*/
// package: public.v1
// file: simulations.proto

var simulations_pb = require("./simulations_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var SimulationsService = (function () {
  function SimulationsService() {}
  SimulationsService.serviceName = "public.v1.SimulationsService";
  return SimulationsService;
}());

SimulationsService.Simulate = {
  methodName: "Simulate",
  service: SimulationsService,
  requestStream: false,
  responseStream: false,
  requestType: simulations_pb.SimulateRequest,
  responseType: simulations_pb.SimulateResponse
};

exports.SimulationsService = SimulationsService;

function SimulationsServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SimulationsServiceClient.prototype.simulate = function simulate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SimulationsService.Simulate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.SimulationsServiceClient = SimulationsServiceClient;
