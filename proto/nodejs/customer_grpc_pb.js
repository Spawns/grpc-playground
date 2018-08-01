// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var customer_pb = require('./customer_pb.js');

function serialize_customer_CustomerFilter(arg) {
  if (!(arg instanceof customer_pb.CustomerFilter)) {
    throw new Error('Expected argument of type customer.CustomerFilter');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_customer_CustomerFilter(buffer_arg) {
  return customer_pb.CustomerFilter.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customer_CustomerRequest(arg) {
  if (!(arg instanceof customer_pb.CustomerRequest)) {
    throw new Error('Expected argument of type customer.CustomerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_customer_CustomerRequest(buffer_arg) {
  return customer_pb.CustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customer_CustomerResponse(arg) {
  if (!(arg instanceof customer_pb.CustomerResponse)) {
    throw new Error('Expected argument of type customer.CustomerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_customer_CustomerResponse(buffer_arg) {
  return customer_pb.CustomerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CustomerService = exports.CustomerService = {
  getCustomers: {
    path: '/customer.Customer/GetCustomers',
    requestStream: false,
    responseStream: true,
    requestType: customer_pb.CustomerFilter,
    responseType: customer_pb.CustomerRequest,
    requestSerialize: serialize_customer_CustomerFilter,
    requestDeserialize: deserialize_customer_CustomerFilter,
    responseSerialize: serialize_customer_CustomerRequest,
    responseDeserialize: deserialize_customer_CustomerRequest,
  },
  createCustomer: {
    path: '/customer.Customer/CreateCustomer',
    requestStream: false,
    responseStream: false,
    requestType: customer_pb.CustomerRequest,
    responseType: customer_pb.CustomerResponse,
    requestSerialize: serialize_customer_CustomerRequest,
    requestDeserialize: deserialize_customer_CustomerRequest,
    responseSerialize: serialize_customer_CustomerResponse,
    responseDeserialize: deserialize_customer_CustomerResponse,
  },
};

exports.CustomerClient = grpc.makeGenericClientConstructor(CustomerService);
