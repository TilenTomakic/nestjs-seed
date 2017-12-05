[![Build Status](https://travis-ci.org/TilenTomakic/nestjs-seed.svg?branch=master)](https://github.com/TilenTomakic/nestjs-seed)

# NestJs seed for kubernetes

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


## Start

```
$ ./tools/consul.sh
$ ./tools/mongo.sh
$ npm run start
```

## Deployment

Check kubernetes folder.

## Worth reading

- [The Twelve-Factor App](https://12factor.net)
