[![Build Status](https://travis-ci.org/TilenTomakic/nestjs-seed.svg?branch=master)](https://github.com/TilenTomakic/nestjs-seed)

# NestJs seed for kubernetes

**I created this seed for my educational purposes. Some design decisions will not make sense as why I used consul if kubernetes is already providing service discovery...** So if you use this seed you will probably have to do some clean ups.

<div align="center">
  <img src="http://kamilmysliwiec.com/public/nest-logo.png" width="100">
  <img src="https://github.com/kubernetes/kubernetes/raw/master/logo/logo.png" width="50">
</div>

## Description

Seed for [Nest](https://github.com/nestjs/nest) framework with mongodb, swagger and consul (for auto discovery). With config ready for travis build, docker push and kubernetes deployment.

> Note: you probably don't need Consul if you are using Kubernetes

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
> Note: you will need docker & docker-compose.


## Start (for developing)

```
$ ./dev.ts
$ npm run start
```

## Start (prod mode)

```typescript
$ docker-compose build && docker-compose up
```

## Deployment

Go to `kubernetes/` folder and use `kubectl apply -f` command for each yaml file.

## Todo

- optimize .travis.yml

## Worth reading

- [The Twelve-Factor App](https://12factor.net)
