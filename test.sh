#!/usr/bin/env bash

docker-compose -f docker-compose.test.yml build
docker-compose -f docker-compose.test.yml up --exit-code-from app-test

if [ $? -eq 0 ]; then
    echo "TESTS PASSED"
else
    echo "TESTS FAILED"
fi
