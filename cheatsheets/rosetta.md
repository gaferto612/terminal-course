# 🗿 Rosetta Stone — Same task, every shell

Look up what you want to do, see how every shell expresses it. Useful when you know one and need to translate.

## Filesystem

| Task                          | Bash / Zsh / Fish | PowerShell                | CMD               |
|-------------------------------|-------------------|---------------------------|-------------------|
| Show current directory        | `pwd`             | `Get-Location` / `pwd`    | `cd`              |
| Change directory              | `cd path`         | `Set-Location path` / `cd` | `cd path`        |
| List files                    | `ls`              | `Get-ChildItem` / `ls`    | `dir`             |
| Long listing                  | `ls -la`          | `Get-ChildItem` / `ls`    | `dir`             |
| Recursive list                | `ls -R` / `find .` | `Get-ChildItem -Recurse` | `dir /s`          |
| Make directory                | `mkdir name`      | `mkdir name` / `New-Item -Type Directory` | `mkdir name` |
| Make nested dirs              | `mkdir -p a/b/c`  | `mkdir a/b/c`             | `mkdir a\b\c`     |
| Create empty file             | `touch file`      | `New-Item file`           | `echo. > file`    |
| Copy file                     | `cp src dst`      | `Copy-Item src dst`       | `copy src dst`    |
| Copy directory                | `cp -r src dst`   | `Copy-Item -Recurse src dst` | `xcopy /s src dst` |
| Move / rename                 | `mv old new`      | `Move-Item old new`       | `move old new`    |
| Delete file                   | `rm file`         | `Remove-Item file`        | `del file`        |
| Delete directory              | `rm -r dir`       | `Remove-Item -Recurse dir`| `rmdir /s dir`    |

## Files and content

| Task                          | Bash / Zsh / Fish      | PowerShell                | CMD            |
|-------------------------------|------------------------|---------------------------|----------------|
| Show file contents            | `cat file`             | `Get-Content file` / `cat`| `type file`    |
| First N lines                 | `head -n 10 file`      | `Get-Content file -Head 10` | (no easy way)|
| Last N lines                  | `tail -n 10 file`      | `Get-Content file -Tail 10` |              |
| Follow file as it grows       | `tail -f log`          | `Get-Content log -Wait`   |                |
| Count lines                   | `wc -l file`           | `(Get-Content file).Count`|                |
| Find text in file             | `grep "x" file`        | `Select-String "x" file`  | `findstr "x" file` |
| Find files by name            | `find . -name "*.txt"` | `Get-ChildItem -Recurse -Filter *.txt` | `dir /s *.txt` |
| Sort lines                    | `sort file`            | `Get-Content file \| Sort-Object` |          |
| Unique lines                  | `sort file \| uniq`     | `\| Sort-Object -Unique`   |                |

## Pipes and redirection

| Task                          | Bash / Zsh         | PowerShell           | CMD            |
|-------------------------------|--------------------|----------------------|----------------|
| Pipe to next command          | `a \| b`            | `a \| b`              | `a \| b`        |
| Write output to file          | `cmd > file`       | `cmd > file`         | `cmd > file`   |
| Append output to file         | `cmd >> file`      | `cmd >> file`        | `cmd >> file`  |
| Send errors to file           | `cmd 2> err`       | `cmd 2> err`         | `cmd 2> err`   |
| Discard output                | `cmd > /dev/null`  | `cmd > $null`        | `cmd > NUL`    |

## Variables

| Task                          | Bash / Zsh           | PowerShell             | CMD              |
|-------------------------------|----------------------|------------------------|------------------|
| Assign variable               | `name="Alice"`       | `$name = "Alice"`      | `set name=Alice` |
| Use variable                  | `echo "$name"`       | `Write-Host $name`     | `echo %name%`    |
| Environment variable          | `export PATH=...`    | `$env:PATH = "..."`    | `set PATH=...`   |
| Read env variable             | `$HOME`              | `$env:USERPROFILE`     | `%USERPROFILE%`  |

## Control flow

### if / else

```bash
# Bash
if [ "$x" -gt 5 ]; then
    echo "big"
else
    echo "small"
fi
```

```powershell
# PowerShell
if ($x -gt 5) {
    "big"
} else {
    "small"
}
```

```cmd
:: CMD
if %x% gtr 5 (echo big) else (echo small)
```

### for loop over files

```bash
# Bash
for f in *.txt; do echo "$f"; done
```

```powershell
# PowerShell
foreach ($f in Get-ChildItem *.txt) { $f.Name }
```

```cmd
:: CMD
for %f in (*.txt) do echo %f
```

### Range

```bash
# Bash
for i in {1..5}; do echo "$i"; done
```

```powershell
# PowerShell
1..5 | ForEach-Object { $_ }
```

```cmd
:: CMD
for /l %i in (1,1,5) do echo %i
```

## Processes

| Task                          | Bash / Zsh           | PowerShell                | CMD                  |
|-------------------------------|----------------------|---------------------------|----------------------|
| List processes                | `ps aux`             | `Get-Process`             | `tasklist`           |
| Find process by name          | `ps aux \| grep name` | `Get-Process -Name name`  | `tasklist /fi "imagename eq name.exe"` |
| Kill by PID                   | `kill 1234`          | `Stop-Process -Id 1234`   | `taskkill /pid 1234` |
| Kill by name                  | `killall name`       | `Stop-Process -Name name` | `taskkill /im name.exe /f` |
| Live process viewer           | `top` / `htop`       | (no built-in equivalent)  | (no built-in)        |

## System info

| Task                          | Bash / Zsh         | PowerShell             | CMD              |
|-------------------------------|--------------------|------------------------|------------------|
| Username                      | `whoami`           | `$env:USERNAME`        | `whoami`         |
| Hostname                      | `hostname`         | `hostname`             | `hostname`       |
| Date/time                     | `date`             | `Get-Date`             | `date /t`        |
| Disk usage                    | `df -h`            | `Get-PSDrive`          | `wmic logicaldisk` |
| Network info                  | `ip addr` / `ifconfig` | `Get-NetIPAddress`  | `ipconfig`       |
| Ping                          | `ping host`        | `Test-Connection host` | `ping host`      |

## Help

| Task                          | Bash / Zsh           | PowerShell                  | CMD              |
|-------------------------------|----------------------|-----------------------------|------------------|
| Help for command              | `man cmd` / `cmd --help` | `Get-Help cmd`          | `cmd /?`         |
| Find commands                 | `apropos word`       | `Get-Command *word*`        | `help`           |
| Which command would run       | `which name`         | `Get-Command name`          | `where name`     |

---

**Print this page out** — it's a lifeline when you're switching contexts.
