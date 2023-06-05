#!/usr/bin/env bash
set -e

echo "CLEANING DEPENDENCIES AND NODE_MODULES..."

rm -fr node_modules
rm -fr apps/*/node_modules
rm -fr libs/*/node_modules
rm -fr packages/*/node_modules
rm -fr serverless/*/node_modules
rm -fr services/*/node_modules
rm -fr stacks/*/node_modules
rm -fr reports
rm -fr "*/**/package-lock.json"
rm -fr "*/**/yarn.lock"
rm -fr .husky

echo "CLEAN & DEPENDENCIES COMPLETE"