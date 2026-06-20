#!/usr/bin/env bash
set -euo pipefail

cd infra/cdk
npm install
npm run build
npx cdk synth
