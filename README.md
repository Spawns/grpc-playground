# The GRPC playground

This is a playground that uses Golang GRPC server and gives you the possibility to create GRPC clients in different languages. The playground currently has Golang, Nodejs, Ruby and Python clients that can create customers or list them for the sake of the example. In order to run the GRPC server run: ```go run server/main.go``` . In order to use the Golang, Nodejs, Ruby or Python clients follow the instructions.

## For Golang

* ```protoc -I proto/ proto/customer.proto --go_out=plugins=grpc:proto/golang```

## For Nodejs (optional)

Nodejs automatically generates the protobuf definitions, but you can generate them yourself by running the following command and use the relevant code in clients/client.js depending on the situation.

* ```grpc_tools_node_protoc -I proto/ --js_out=import_style=commonjs,binary:proto/nodejs --grpc_out=proto/nodejs --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` customer.proto```

## For Ruby

* ```grpc_tools_ruby_protoc -I proto --ruby_out=proto/ruby --grpc_out=proto/ruby proto/customer.proto```

## For Python

#### Create virtualenvironment.

* ```python -m pip install virtualenv```
* ```virtualenv venv```

#### Source the venv folder.

* ```source venv/bin/activate```

#### Use the requirements.txt to install the needed modules in the venv.

* ```python -m pip install ${module_name}```

#### Generate GRPC code for Python.

* ```python -m grpc_tools.protoc -I proto --python_out=proto/python --grpc_python_out=proto/python proto/customer.proto```