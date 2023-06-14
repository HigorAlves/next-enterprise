#!/usr/bin/env bash
set -e

prettier --check "**/*.{ts,tsx,js,jsx,md,json,yml}"
eslint . --cache --quiet --ext ts,tsx,js,jsx,yml
next lint