#!/usr/bin/env bash
set -e

echo "AUDITING YARN PACKAGES"

npx audit-ci

# exit code of 16 or higher indicates we have critical security issues.
# critical issues should fail build.
# https://classic.yarnpkg.com/en/docs/cli/audit/#toc-yarn-audit
EXIT_CODE=$?
if [ $EXIT_CODE -ge 16 ]; then
    echo "Security issue found"
    # shellcheck disable=SC2242
    exit EXIT_CODE
fi

echo "AUDIT COMPLETE"