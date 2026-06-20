import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3]))

from services.api.handler import handler


def test_health():
    event = {"rawPath": "/health", "requestContext": {"http": {"method": "GET"}}}
    res = handler(event, None)
    assert res["statusCode"] == 200
    body = json.loads(res["body"])
    assert body["status"] == "ok"


def test_evidence_accepts_event():
    event = {
        "rawPath": "/evidence",
        "headers": {"x-tenant-id": "tenant-a"},
        "requestContext": {"http": {"method": "POST"}},
        "body": json.dumps({"event_type": "agent.identity.verified"}),
    }
    res = handler(event, None)
    assert res["statusCode"] == 202
    body = json.loads(res["body"])
    assert body["tenant_id"] == "tenant-a"
    assert body["event_type"] == "agent.identity.verified"


def test_evidence_requires_event_type():
    event = {
        "rawPath": "/evidence",
        "requestContext": {"http": {"method": "POST"}},
        "body": json.dumps({}),
    }
    res = handler(event, None)
    assert res["statusCode"] == 400
