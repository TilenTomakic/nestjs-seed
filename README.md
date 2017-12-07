[![Build Status](https://travis-ci.org/TilenTomakic/nestjs-seed.svg?branch=master)](https://github.com/TilenTomakic/nestjs-seed)

# NestJs seed for kubernetes (work in progress)

<div align="center">
  <img src="http://kamilmysliwiec.com/public/nest-logo.png" width="100">
  <img src="https://github.com/kubernetes/kubernetes/raw/master/logo/logo.png" width="50">
</div>

## Description

Seed for [Nest](https://github.com/nestjs/nest) framework with mongodb, swagger and consul (for auto discovery). With config ready for travis build, docker push and kubernetes deployment.


## Features

- jest
- mongodb
- swagger
- consul
- travis
- docker
- kubernetes
  
  
## Installation
```bash
$ yarn install
```
> Note: you will need docker for running consul container.


## Start (for developing)

```
$ docker run -d --name=dev-consul -p 8400:8400 -p 8500:8500 -p 8600:53/udp -e CONSUL_BIND_INTERFACE=eth0 -v `pwd`/.volumes/consul:/consul/data:Z --rm -it consul
$ docker run -d --name=dev-mongo -p 27017:27017 -v `pwd`/.volumes/mongo:/data/db:Z --rm -it mongo:3.0-wheezy

$ npm run start
```

## Start

```typescript
$ docker-compose up
```

## Deployment

Go to `kubernetes/` folder and use `kubectl apply -f` command for each yaml file.

## Todo

- optimize .travis.yml

## Worth reading

- [The Twelve-Factor App](https://12factor.net)
