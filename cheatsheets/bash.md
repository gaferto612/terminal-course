# 🐧 Bash Cheatsheet

## Navigation

| Command       | Does what                          |
|---------------|------------------------------------|
| `pwd`         | print working directory            |
| `ls`          | list files                         |
| `ls -lah`     | long listing, all files, human sizes |
| `cd dir`      | change directory                   |
| `cd ..`       | up one level                       |
| `cd ~` / `cd` | go home                            |
| `cd -`        | go back to previous directory      |

## Files

| Command          | Does what                       |
|------------------|---------------------------------|
| `touch file`     | create empty file               |
| `mkdir dir`      | make directory                  |
| `mkdir -p a/b/c` | make nested directories         |
| `cp src dst`     | copy file                       |
| `cp -r dir dst`  | copy directory recursively      |
| `mv old new`     | rename or move                  |
| `rm file`        | delete file                     |
| `rm -r dir`      | delete directory recursively    |
| `rm -i file`     | ask before deleting             |

## View

| Command            | Does what                |
|--------------------|--------------------------|
| `cat file`         | print whole file         |
| `less file`        | paginated view (q quits) |
| `head -n 5 file`   | first 5 lines            |
| `tail -n 20 file`  | last 20 lines            |
| `tail -f log.txt`  | follow live              |
| `wc -l file`       | count lines              |

## Search

| Command                          | Does what                |
|----------------------------------|--------------------------|
| `find . -name "*.txt"`           | find files by name       |
| `find . -type d`                 | find directories         |
| `find . -mtime -7`               | modified last 7 days     |
| `grep "x" file`                  | find lines with "x"      |
| `grep -i "x" file`               | case-insensitive         |
| `grep -r "x" .`                  | recursive                |
| `grep -n "x" file`               | with line numbers        |
| `grep -v "x" file`               | invert (lines NOT match) |

## Pipes & redirection

| Symbol   | Does what                                   |
|----------|---------------------------------------------|
| `|`      | pipe stdout to next command                 |
| `>`      | overwrite file with stdout                  |
| `>>`     | append stdout to file                       |
| `<`      | read from file as stdin                     |
| `2>`     | redirect stderr                             |
| `&>`     | redirect both stdout and stderr             |
| `2>&1`   | redirect stderr to wherever stdout is going |

## Permissions

| Command             | Does what                          |
|---------------------|------------------------------------|
| `chmod +x file`     | make executable                    |
| `chmod 755 file`    | rwx for owner, rx for everyone     |
| `chmod 644 file`    | rw for owner, r for everyone       |
| `chown user file`   | change owner                       |
| `sudo command`      | run as administrator               |

## Processes

| Command             | Does what                       |
|---------------------|---------------------------------|
| `ps`                | your processes                  |
| `ps aux`            | all processes, verbose          |
| `top` / `htop`      | live process view               |
| `kill PID`          | ask process to stop             |
| `kill -9 PID`       | force kill                      |
| `killall name`      | kill all by name                |
| `command &`         | run in background               |
| `jobs`              | list background jobs            |
| `fg` / `bg`         | foreground / background         |

## Variables

```bash
name="Alice"
echo "$name"

$0    # script name
$1    # first arg
$@    # all args
$#    # arg count
$?    # last exit code
$$    # current PID
```

## Control flow

```bash
# if
if [ "$x" -gt 5 ]; then
    echo "big"
elif [ "$x" -gt 0 ]; then
    echo "small"
else
    echo "zero or negative"
fi

# for
for f in *.txt; do
    echo "$f"
done

# while
while [ $count -lt 5 ]; do
    count=$((count + 1))
done

# function
mkcd() {
    mkdir -p "$1" && cd "$1"
}
```

## Useful keyboard shortcuts

| Keys          | Does what                  |
|---------------|----------------------------|
| `Ctrl + C`    | cancel current command     |
| `Ctrl + D`    | end of input / log out     |
| `Ctrl + L`    | clear screen               |
| `Ctrl + R`    | search history             |
| `Ctrl + A`    | move to start of line      |
| `Ctrl + E`    | move to end of line        |
| `Ctrl + U`    | delete to start of line    |
| `Ctrl + K`    | delete to end of line      |
| `Ctrl + W`    | delete previous word       |
| `Tab`         | autocomplete               |
| `↑` / `↓`     | previous / next command    |

## Safer-script header

```bash
#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'
```
