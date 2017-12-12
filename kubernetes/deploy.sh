#!/usr/bin/env bash

gcloud container clusters get-credentials "fri-cluster" --zone "europe-west3-c"

kubectl apply -f mongo-statefulset.yaml
kubectl apply -f mongo-service.yaml

kubectl apply -f app-statefulset.yaml
kubectl apply -f app-service.yaml

kubectl apply -f consul-service.yaml
kubectl apply -f consul-statefulset.yaml
