#!/usr/bin/env bash
set -e

echo "PRETTYING STAGED FILES..."

rm -fr .husky
yarn husky install
yarn husky add .husky/pre-push "yarn lint"
yarn husky add .husky/pre-commit "yarn audit:commit"
yarn husky add .husky/commit-msg "npx commitlint --edit $1"

echo "FILES ARE NOW PRETTY AGAIN"