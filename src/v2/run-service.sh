#!/bin/bash

docker stop  service-v2
docker rm service-v2
docker run --name service-v2 -d -p 3200:3000 nexweb1/canary-demo:v2
