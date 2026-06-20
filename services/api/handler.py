import json
import os
import time
import uuid
from typing import Any, Dict


def response(status_code: int, body: Dict[str, Any]) -> Dict[str, Any]:
    return {
        "statusCode": status_code,
        "headers": {
            "content-type": "application/json",
            "cache-control": "no-store",
        },
        "body": json.dumps(body),
    }


def parse_body(event: Dict[str, Any]) -> Dict[str, Any]:
    raw = event.get("body") or "{}"
    if event.get("isBase64Encoded"):
        raise ValueError("base64 body is not supported in this MVP handler")
    data = json.loads(raw)
    if not isinstance(data, dict):
        raise ValueError("request body must be a JSON object")
    return data


def validate_tenant(event: Dict[str, Any]) -> str:
    headers = {str(k).lower(): v for k, v in (event.get("headers") or {}).items()}
    tenant_id = headers.get("x-tenant-id") or "demo-tenant"
    if not isinstance(tenant_id, str) or len(tenant_id) < 3:
        raise ValueError("invalid tenant id")
    return tenant_id


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    route = event.get("rawPath") or event.get("path") or "/"
    method = (event.get("requestContext", {}).get("http", {}).get("method") or event.get("httpMethod") or "GET").upper()

    if method == "GET" and route == "/health":
        return response(200, {
            "status": "ok",
            "service": "agent-blackbox-api",
            "evidence_bucket_configured": bool(os.getenv("EVIDENCE_BUCKET")),
        })

    if method == "POST" and route == "/evidence":
        try:
            tenant_id = validate_tenant(event)
            body = parse_body(event)
            event_type = body.get("event_type")
            if not event_type:
                return response(400, {"error": "event_type is required"})

            evidence_id = str(uuid.uuid4())
            now = int(time.time())
            # In deployed AWS, this is where the handler would write to S3, DynamoDB,
            # and EventBridge. The lab keeps the handler side-effect-light for tests.
            return response(202, {
                "evidence_id": evidence_id,
                "tenant_id": tenant_id,
                "status": "accepted",
                "event_type": event_type,
                "created_at_epoch": now,
                "next": "async scoring and evidence package workflow",
            })
        except (json.JSONDecodeError, ValueError) as exc:
            return response(400, {"error": str(exc)})

    if method == "GET" and route.startswith("/decisions/"):
        decision_id = route.rsplit("/", 1)[-1]
        return response(200, {
            "decision_id": decision_id,
            "status": "placeholder",
            "enforcement": "not authorized in MVP",
            "explanation": "Decision lookup is stubbed for lab use.",
        })

    return response(404, {"error": "not found", "route": route, "method": method})
