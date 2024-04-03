#!/usr/bin/env bash
set -e

# Check if the first argument is "--stop"
if [ "$1" == "--stop" ]; then
    echo "STOPPING THE DEVELOPMENT DOCKER"
    make stop-development
    echo "ENVIRONMENT HAS BEEN STOPPED"
else
    echo "STARTING THE NEW DEVELOPMENT DOCKER"
    make build-development
    make start-development
    echo "ENVIRONMENT IS UP AND RUNNING"
fi
