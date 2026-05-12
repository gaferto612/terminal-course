# 🏋️ Extra Exercises

Each module has its own exercises. The challenges here are for when you've finished and want **more practice** or want to test yourself.

## How to use this

Pick one. Don't peek at the solution. Time yourself if you want. Each should take 15-30 minutes.

---

## Challenge 1 — File census

Write a single command (Bash or PowerShell, your choice) that, for your home directory, reports:

- Total number of files
- Total disk space used
- The 5 file extensions that appear most often

## Challenge 2 — Log analyzer

Given a web server log file where each line looks like:

```
192.168.1.42 - - [12/May/2026:08:23:11 +0000] "GET /index.html HTTP/1.1" 200 1543
```

Write a script that prints:

- Total number of requests
- Number of unique IPs
- Top 10 most-requested URLs
- Top 10 IPs by request count
- Number of error responses (status >= 400)

## Challenge 3 — Dotfiles bootstrap

Write a `bootstrap.sh` script that, when run on a fresh Ubuntu machine:

- Installs git, curl, vim, tmux
- Clones your dotfiles repo
- Creates symlinks for `.bashrc`, `.gitconfig`, `.vimrc`
- Idempotent: running it twice is safe

## Challenge 4 — Disk space watchdog

Write a script that:

- Checks every mounted filesystem
- Logs a warning if any partition is over 80% full
- Logs an error if any is over 95%
- Returns exit code 0 (ok), 1 (warning), or 2 (critical)

## Challenge 5 — JSON to CSV

Given a file `users.json` like:

```json
[
  {"name": "Alice", "age": 30, "city": "Paris"},
  {"name": "Bob",   "age": 25, "city": "Tokyo"}
]
```

Write a one-liner (using `jq` or PowerShell) that outputs:

```
name,age,city
Alice,30,Paris
Bob,25,Tokyo
```

## Challenge 6 — Mass file rename

You have a folder full of files like `IMG_2024-05-12_001.jpg`, `IMG_2024-05-12_002.jpg`, ...

Write a script that renames them all to `photo-001.jpg`, `photo-002.jpg`, ... in order.

## Challenge 7 — Health check API

Combine everything:

- Use `curl` to hit a list of URLs from a file (one per line)
- Record the HTTP status code for each
- Mark anything that's not 200 as a failure
- Save a report to `health-report-<date>.txt`
- Bonus: send an alert email if anything failed

## Challenge 8 — Git history excavator

Write a script that, for the current Git repo, prints:

- Total commits
- The 10 most-frequently changed files
- The most active contributor
- The week with the most commits

Hint: `git log --pretty=format:`, `git log --shortstat`, and `sort | uniq -c` are your friends.

---

## Solutions

Solutions are intentionally **not** provided for these. The point is to struggle, search, and figure it out — that's how the terminal sticks.

Try, fail, search, try again. When you get one working, post it as a GitHub Discussion in this repo and compare with other learners.

→ Back to [course home](../README.md)
