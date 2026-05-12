# 📟 CMD (Command Prompt) Cheatsheet

> CMD is the older Windows shell. You'll rarely use it daily, but it's good to know for recovery consoles, legacy scripts, and quick tasks.

## Navigation

| Command           | Does what                  |
|-------------------|----------------------------|
| `cd`              | show current directory     |
| `cd path`         | change directory           |
| `cd ..`           | up one level               |
| `cd \`            | go to drive root           |
| `D:`              | switch to D: drive         |
| `dir`             | list files                 |
| `dir /a`          | include hidden             |
| `dir /s`          | recursive                  |
| `dir /b`          | bare format (names only)   |
| `tree`            | show directory tree        |
| `tree /f`         | tree with filenames        |

## Files

| Command                  | Does what                       |
|--------------------------|---------------------------------|
| `type file.txt`          | print file contents             |
| `more file.txt`          | paginated view                  |
| `copy src dst`           | copy a file                     |
| `xcopy src dst /s /e`    | copy directories recursively    |
| `robocopy src dst /e`    | better copy (built-in)          |
| `move src dst`           | move / rename                   |
| `ren oldname newname`    | rename                          |
| `del file.txt`           | delete file                     |
| `rmdir dir`              | delete empty directory          |
| `rmdir /s /q dir`        | force delete directory tree     |
| `mkdir dir`              | create directory                |

## Output

| Command                      | Does what                |
|------------------------------|--------------------------|
| `echo Hello`                 | print text               |
| `echo. > file.txt`           | create empty file        |
| `cls`                        | clear screen             |
| `command > out.txt`          | redirect output          |
| `command >> out.txt`         | append output            |
| `command 2> err.txt`         | redirect errors          |
| `command1 \| command2`        | pipe                     |

## Search

| Command                              | Does what                |
|--------------------------------------|--------------------------|
| `find "text" file.txt`               | search in a file         |
| `findstr "pattern" file.txt`         | grep equivalent          |
| `findstr /s /i "TODO" *.txt`         | recursive, case-insensitive |
| `where notepad`                      | find program location    |

## Processes

| Command                       | Does what                  |
|-------------------------------|----------------------------|
| `tasklist`                    | list processes             |
| `tasklist /fi "imagename eq chrome.exe"` | filter             |
| `taskkill /pid 1234`          | kill by PID                |
| `taskkill /im chrome.exe /f`  | force kill by name         |

## System info

| Command          | Does what                  |
|------------------|----------------------------|
| `whoami`         | your user                  |
| `hostname`       | computer name              |
| `ver`            | Windows version            |
| `systeminfo`     | detailed system info       |
| `ipconfig`       | network info               |
| `ipconfig /all`  | full network info          |
| `ping host`      | ping                       |

## Batch script basics

Save as `hello.bat`:

```cmd
@echo off
set name=World
echo Hello, %name%!

if "%1"=="hi" (
    echo You said hi
) else (
    echo You said something else
)

for %%f in (*.txt) do (
    echo Found: %%f
)
```

Variables: `%name%` (in scripts: `%%f` for loops).

## When to use CMD vs PowerShell

**Use CMD when:**
- A legacy app/installer requires it
- You're in a Windows recovery environment
- You need a simple, fast one-liner

**Use PowerShell otherwise.** For anything modern, PowerShell is more capable and consistent.
