#!/usr/bin/env bash
set -e

echo "PRETTYING STAGED FILES..."

rm -fr .husky
yarn husky install
yarn husky add .husky/pre-push "yarn lint"
yarn husky add .husky/pre-commit "yarn audit:commit"
yarn husky add .husky/commit-msg "git-conventional-commits commit-msg-hook $commit_message"

echo "FILES ARE NOW PRETTY AGAIN"