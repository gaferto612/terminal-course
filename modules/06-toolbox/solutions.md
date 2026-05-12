# Module 6 — Solutions

### Exercise 3 — API

```bash
curl -s https://api.github.com/users/torvalds | jq '{name, location, public_repos}'
```

Output (example):

```json
{
  "name": "Linus Torvalds",
  "location": "Portland, OR",
  "public_repos": 6
}
```

### Exercise 5 — Venv + requests

```bash
mkdir url-fetcher && cd url-fetcher
python3 -m venv .venv
source .venv/bin/activate         # Linux/macOS
# or: .\.venv\Scripts\Activate    on PowerShell

pip install requests

cat > fetch.py <<'EOF'
import requests
r = requests.get("https://api.github.com/users/torvalds")
print(r.json()["name"])
EOF

python fetch.py
# → Linus Torvalds
```
