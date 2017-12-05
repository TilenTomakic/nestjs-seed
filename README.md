[![Build Status](https://travis-ci.org/NestJsPlayground/api-seed.svg?branch=master)](https://travis-ci.org/NestJsPlayground/api-seed)

# NestJs seed for kubernetes

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
$ ./tools/startConsul.sh
$ npm run start
```

## Worth reading

- [The Twelve-Factor App](https://12factor.net)
