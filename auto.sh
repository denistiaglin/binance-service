#!/bin/bash

echo 'Build container'
docker build -t binance-service ./

echo 'start all'
docker-compose up -d