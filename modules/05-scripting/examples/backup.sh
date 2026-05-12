#!/usr/bin/env bash
# Example: simple backup script
# Usage: ./backup.sh <directory>
#
# Creates a zip file: <dirname>-backup-YYYY-MM-DD.zip

set -euo pipefail

if [ $# -ne 1 ]; then
    echo "Usage: $0 <directory>" >&2
    exit 1
fi

src=$1

if [ ! -d "$src" ]; then
    echo "Error: '$src' is not a directory" >&2
    exit 1
fi

# Strip trailing slash from the source name for a clean output file name
base=$(basename "$src")
date_tag=$(date +%Y-%m-%d)
out="${base}-backup-${date_tag}.zip"

echo "Backing up $src → $out ..."
zip -r "$out" "$src" > /dev/null
echo "Done. Created $out ($(du -h "$out" | cut -f1))"
