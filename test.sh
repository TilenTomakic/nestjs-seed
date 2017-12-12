#!/usr/bin/env bash

docker-compose -f docker-compose.test.yml build
docker-compose -f docker-compose.test.yml up --abort-on-container-exit
TEST_STATUS=`docker wait apiseed_app-test_1`

if [ ${TEST_STATUS} -eq 0 ]; then
    echo "TESTS PASSED"
else
    echo "TESTS FAILED"
fi
