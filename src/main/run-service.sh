#!/bin/bash

docker stop  service-v1
docker rm service-v1
docker run --name service-v1 -d -p 3100:3000 nexweb1/canary-demo:v1
