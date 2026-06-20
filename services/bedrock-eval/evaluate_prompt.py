"""Minimal Bedrock invocation scaffold.

This script is intentionally a scaffold. You must select a region and model ID
available in your AWS account before running it.
"""

import argparse
import json
import time
from dataclasses import dataclass, asdict
from typing import Optional

import boto3


@dataclass
class EvalResult:
    model_id: str
    prompt_chars: int
    latency_ms: int
    response_preview: str
    passed_basic_checks: bool


def invoke_bedrock(model_id: str, prompt: str, guardrail_id: Optional[str], guardrail_version: Optional[str]) -> EvalResult:
    client = boto3.client("bedrock-runtime")
    body = json.dumps({
        "messages": [{"role": "user", "content": [{"text": prompt}]}],
        "inferenceConfig": {"maxTokens": 512, "temperature": 0.2},
    })
    kwargs = {"modelId": model_id, "body": body}
    if guardrail_id and guardrail_version:
        kwargs["guardrailIdentifier"] = guardrail_id
        kwargs["guardrailVersion"] = guardrail_version
    start = time.time()
    response = client.invoke_model(**kwargs)
    latency_ms = int((time.time() - start) * 1000)
    raw = response["body"].read().decode("utf-8")
    return EvalResult(
        model_id=model_id,
        prompt_chars=len(prompt),
        latency_ms=latency_ms,
        response_preview=raw[:500],
        passed_basic_checks="source" in raw.lower() or "citation" in raw.lower(),
    )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--model-id", required=True)
    parser.add_argument("--prompt", required=True)
    parser.add_argument("--guardrail-id")
    parser.add_argument("--guardrail-version")
    args = parser.parse_args()
    result = invoke_bedrock(args.model_id, args.prompt, args.guardrail_id, args.guardrail_version)
    print(json.dumps(asdict(result), indent=2))


if __name__ == "__main__":
    main()
