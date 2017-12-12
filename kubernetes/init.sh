#!/usr/bin/env bash

gcloud config set project icowatch-185821
gcloud container clusters create "fri-cluster" --zone "europe-west3-c" --machine-type "f1-micro" --image-type "COS" --disk-size "12" --num-nodes "3"

./init.sh
