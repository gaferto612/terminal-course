# Module 5 — Solutions

### Exercise 1 — Backup script

See [examples/backup.sh](examples/backup.sh).

### Exercise 2 — Word counter

```bash
#!/usr/bin/env bash
set -euo pipefail

if [ $# -ne 1 ]; then
    echo "Usage: $0 <filename>"
    exit 1
fi

file=$1

if [ ! -f "$file" ]; then
    echo "Error: $file does not exist"
    exit 1
fi

echo "Lines:      $(wc -l < "$file")"
echo "Words:      $(wc -w < "$file")"
echo "Characters: $(wc -c < "$file")"
```

### Exercise 3 — FizzBuzz

See [examples/fizzbuzz.sh](examples/fizzbuzz.sh).

### Exercise 4 — PowerShell renamer

```powershell
Get-ChildItem -Filter "*.txt" | ForEach-Object {
    $newName = $_.Name.ToLower()
    if ($_.Name -cne $newName) {
        Rename-Item -Path $_.FullName -NewName $newName
    }
}
```

`-cne` is "case-sensitive not equal" — avoids trying to rename already-lowercase names.

### Exercise 5 — Argument validator

```bash
#!/usr/bin/env bash
set -euo pipefail

if [ $# -ne 2 ]; then
    echo "Usage: $0 <arg1> <arg2>" >&2
    exit 1
fi

echo "Got: $1 and $2"
```
