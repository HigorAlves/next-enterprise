#!/usr/bin/env bash
set -e

yarn lint
yarn lint-staged
yarn validate-branch-name