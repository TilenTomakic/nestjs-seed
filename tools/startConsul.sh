#!/usr/bin/env bash

mkdir -p ./volumes/consul
docker run -d --name=dev-consul -p 8400:8400 -p 8500:8500 -p 8600:53/udp -e CONSUL_BIND_INTERFACE=eth0 -v `pwd`/volumes/consul:/consul/data:Z --rm -it consul
