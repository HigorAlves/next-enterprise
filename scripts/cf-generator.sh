#!/usr/bin/env bash
set -e

export $(cat .env | awk '!/^\\s*#/' | awk '!/^\\s*$/')
cf-content-types-generator --spaceId $CONTENTFUL_SPACE_ID --token $CONTENTFUL_MANAGEMENT_TOKEN -o @types/contentful/types -X -g
