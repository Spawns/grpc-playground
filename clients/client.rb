require 'grpc'
require 'customer_services_pb'

this_dir = File.expand_path(File.dirname(__FILE__))
lib_dir = File.join(this_dir, '/../proto/ruby')
$LOAD_PATH.unshift(lib_dir) unless $LOAD_PATH.include?(lib_dir)


def get_customers(stub)
  getResp = stub.get_customers(Customer::CustomerFilter.new(keyword: ""))
  getResp.each {|customer| puts customer.to_json}
end

def create_customer(stub)

  customer = {:id => 121,
              :name => "Ivan Ivanov",
              :email => "test@abv.bg",
              :phone => "231232123",
              :addresses => [
                  Customer::CustomerRequest::Address.new(
                      :street => "BSR1",
                      :city => "Sofia",
                      :state => "SO",
                      :zip => "1800",
                      :isShippingAddress => false),
                  Customer::CustomerRequest::Address.new(
                      :street => "BSR2",
                      :city => "Sofia",
                      :state => "SO",
                      :zip => "1800",
                      :isShippingAddress => true
                  )]}

  getResp = stub.create_customer(Customer::CustomerRequest.new(customer))
  puts getResp.to_json
end

def main
  stub = Customer::Customer::Stub.new('localhost:50051', :this_channel_is_insecure)

  create_customer(stub)
  get_customers(stub)

end

main