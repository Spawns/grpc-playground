from __future__ import print_function
import inspect
import os
import sys
import grpc
from proto import customer_pb2_grpc, customer_pb2

current_dir = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))
parent_dir = os.path.dirname(current_dir)
sys.path.insert(0, parent_dir)


def run():
    channel = grpc.insecure_channel('localhost:50051')
    stub = customer_pb2_grpc.CustomerStub(channel)
    create_customer(stub)
    get_all_customers(stub)


def create_customer(stub):
    response = stub.CreateCustomer(customer_pb2.CustomerRequest(
        id=101,
        name="Ivan Ivanov",
        email="test@abv.bg",
        phone="231232123",
        addresses=[customer_pb2.CustomerRequest.Address(
            street="BSR1",
            city="Sofia",
            state="SO",
            zip="1800",
            isShippingAddress=False
        ), customer_pb2.CustomerRequest.Address(
            street="BSR2",
            city="Sofia",
            state="SO",
            zip="1800",
            isShippingAddress=True
        )]
    ))
    print(response)


def get_all_customers(stub):
    response = stub.GetCustomers(customer_pb2.CustomerFilter(keyword=""))
    for r in response:
        print(r)


if __name__ == '__main__':
    run()
