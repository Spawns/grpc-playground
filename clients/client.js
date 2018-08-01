const services = require('../proto/nodejs/customer_grpc_pb');
const messages = require('../proto/nodejs/customer_pb');
const grpc = require('grpc');

//For statically generated prtobuf definitions
const create = (client) => {

    const request = new messages.CustomerRequest();
    request.setId(102);
    request.setName('Ivan Vankata Vankata');
    request.setEmail('dnasldkasd@basi.bg');
    request.setPhone('0987896621');

    const address1 = new messages.CustomerRequest.Address();
    address1.setCity("Sofia");
    address1.setState("SO");
    address1.setStreet("BSR1");
    address1.setIsshippingaddress(false);
    address1.setZip("1800");

    const address2 = new messages.CustomerRequest.Address();
    address2.setCity("Plovdiv");
    address2.setState("PB");
    address2.setStreet("blvd Ruski");
    address2.setIsshippingaddress(true);
    address2.setZip("123123");

    request.setAddressesList([address1, address2]);

    client.createCustomer(request, (err, response) => {
        console.log(err ? err : `ID: ${response.getId()}  -> Success: ${response.getSuccess()}`);
    });
};


const get = client => {
    const request = new messages.CustomerFilter();
    request.setKeyword("");
    const call = client.getCustomers(request, (err, response) => {
        console.log(err ? err : response.getMessage());
    });
    call.on('data', customer => {
        console.log(`Customer: {ID: ${customer.getId()}, Name: ${customer.getName()}, Addresses: ${customer.getAddressesList()}}`);
    });
};

const main = () => {
    const client = new services.CustomerClient('localhost:50051', grpc.credentials.createInsecure());

    create(client);
    get(client);
};

main();


/*
For dynamically generating protobuf definitions

const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync(__dirname + '/../proto/customer.proto', {keepCase: true});
const customer_proto = grpc.loadPackageDefinition(packageDefinition).customer;


const create = client =>{
    client.CreateCustomer({
        id: 101,
        name: "Ivan Ivanov",
        email: "test@abv.bg",
        phone: "231232123",
        addresses: [{
            street: "BSR1",
            city: "Sofia",
            state: "SO",
            zip: "1800",
            isShippingAddress: false

        },{
            street:            "BSR2",
            city:              "Sofia",
            state:             "SO",
            zip:               "1800",
            isShippingAddress: true
        }]
    }, (err, response) => {
        console.log(err ? err: response);
    });
};

const get = client => {
    const call =  client.GetCustomers({
        keyword: ""
    }, (err, response) => {
        console.log(err ? err: response);
    });
    call.on('data', customer => {
        console.log(customer);
    });
};

const main = () => {
    const client = new customer_proto.Customer('localhost:50051', grpc.credentials.createInsecure());
    create(client);
    get(client)

};

main();
*/
