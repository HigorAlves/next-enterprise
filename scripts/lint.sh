#!/usr/bin/env bash
set -e

next lint --fix
prettier --write "**/*.{ts,tsx,js,jsx,md,json,yml}"
eslint --fix --cache --quiet --ext ts,tsx,js,jsx,json,yml --format html --output-file ./reports/eslint.html