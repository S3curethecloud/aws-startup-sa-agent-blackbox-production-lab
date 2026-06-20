# API Service

Minimal Lambda-compatible API handler for the MVP lab.

## Routes

- `GET /health`: health check.
- `POST /evidence`: validates and accepts an evidence event.
- `GET /decisions/{id}`: placeholder decision lookup.

## Local test

```bash
pip install -r requirements.txt
pytest
```
