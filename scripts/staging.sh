#!/usr/bin/env bash
set -e

# Check if the first argument is "--stop"
if [ "$1" == "--stop" ]; then
    echo "STOPPING THE STAGING DOCKER"
    make stop-staging
    echo "ENVIRONMENT HAS BEEN STOPPED"
else
    echo "STARTING THE NEW STAGING DOCKER"
    make build-staging
    make start-staging
    echo "ENVIRONMENT IS UP AND RUNNING"
fi
