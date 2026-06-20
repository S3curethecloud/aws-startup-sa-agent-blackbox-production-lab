#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AgentBlackboxMvpStack } from '../lib/mvp-stack';
import { EnterpriseFoundationStack } from '../lib/enterprise-foundation-stack';

const app = new cdk.App();

const projectName = app.node.tryGetContext('projectName') ?? 'agent-blackbox';
const environmentName = app.node.tryGetContext('environmentName') ?? 'mvp';

new AgentBlackboxMvpStack(app, 'AgentBlackboxMvpStack', {
  projectName,
  environmentName,
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

new EnterpriseFoundationStack(app, 'EnterpriseFoundationStack', {
  projectName,
  environmentName,
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
