#!/usr/bin/env bash
set -e

# Check if the first argument is "--stop"
if [ "$1" == "--stop" ]; then
    echo "STOPPING THE PRODUCTION DOCKER"
    make stop-production
    echo "ENVIRONMENT HAS BEEN STOPPED"
else
    echo "STARTING THE NEW PRODUCTION DOCKER"
    make build-production
    make start-production
    echo "ENVIRONMENT IS UP AND RUNNING"
fi
