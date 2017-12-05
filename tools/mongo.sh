#!/usr/bin/env bash

mkdir -p ./volumes/mongo
docker run -d --name=dev-mongo -p 27017:27017 -v `pwd`/volumes/mongo:/data/db:Z --rm -it mongo:3.0-wheezy
