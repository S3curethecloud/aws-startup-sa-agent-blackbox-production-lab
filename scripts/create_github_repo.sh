#!/usr/bin/env bash
set -euo pipefail

REPO_NAME="aws-startup-sa-agent-blackbox-production-lab"
OWNER="Olagoldstx"

if ! command -v gh >/dev/null 2>&1; then
  echo "GitHub CLI is required: https://cli.github.com/"
  exit 1
fi

gh repo create "${OWNER}/${REPO_NAME}" --private --source=. --remote=origin --push
