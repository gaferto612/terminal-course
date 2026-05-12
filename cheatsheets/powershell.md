# 🪟 PowerShell Cheatsheet

## Navigation

| Cmdlet                     | Alias    | Does what          |
|----------------------------|----------|--------------------|
| `Get-Location`             | `pwd`    | current directory  |
| `Set-Location <path>`      | `cd`     | change directory   |
| `Get-ChildItem`            | `ls`/`dir` | list contents    |
| `Get-ChildItem -Recurse`   |          | recursive list     |
| `Get-ChildItem -Hidden`    |          | include hidden     |
| `Get-ChildItem -File`      |          | only files         |
| `Get-ChildItem -Directory` |          | only directories   |

## Files

| Cmdlet                                | Alias   | Does what       |
|---------------------------------------|---------|-----------------|
| `New-Item -Type File name.txt`        | `ni`    | create file     |
| `New-Item -Type Directory name`       | `mkdir` | create folder   |
| `Copy-Item src dst`                   | `cp`    | copy            |
| `Move-Item src dst`                   | `mv`    | move / rename   |
| `Remove-Item file`                    | `rm`    | delete          |
| `Remove-Item -Recurse -Force dir`     |         | delete tree     |
| `Get-Content file`                    | `cat`   | print file      |
| `Get-Content file -Tail 20`           |         | last 20 lines   |
| `Get-Content file -Wait`              |         | follow live     |

## Search

| Cmdlet                                     | Does what                |
|--------------------------------------------|--------------------------|
| `Get-ChildItem -Recurse -Filter "*.txt"`   | find files by pattern    |
| `Select-String "pattern" file.txt`         | search in files (grep)   |
| `Select-String -Pattern "TODO" -Path *.cs` | search in many files     |
| `Get-Command *process*`                    | find cmdlets             |
| `Get-Help Get-Process -Examples`           | help for a cmdlet        |

## Pipeline workhorses

```powershell
# Filter
Get-Process | Where-Object { $_.CPU -gt 100 }

# Project / select columns
Get-Process | Select-Object Name, CPU, WorkingSet

# Top N
Get-Process | Sort-Object CPU -Descending | Select-Object -First 5

# Per-item action
Get-ChildItem *.txt | ForEach-Object { $_.Name.ToUpper() }

# Count, sum, etc
Get-ChildItem | Measure-Object -Property Length -Sum
```

## Comparison operators

| Op       | Means              |
|----------|--------------------|
| `-eq`    | equals             |
| `-ne`    | not equal          |
| `-gt` `-lt` | greater / less   |
| `-ge` `-le` | greater/less or equal |
| `-like`  | wildcard (`*foo*`) |
| `-match` | regex              |
| `-in`    | value in array     |
| `-contains` | array contains  |
| `-and` `-or` `-not` | logic   |

## Variables and parameters

```powershell
$name = "Alice"
"Hello, $name!"

# Script parameters
param(
    [string]$Path = ".",
    [int]$Top = 10,
    [switch]$Verbose
)

# Special
$_         # current pipeline object
$args      # array of all args (in functions)
$LASTEXITCODE
$Error
```

## Control flow

```powershell
if ($x -gt 5) { "big" }
elseif ($x -gt 0) { "small" }
else { "zero or negative" }

foreach ($f in Get-ChildItem) {
    $f.Name
}

for ($i = 0; $i -lt 10; $i++) { $i }

while ($count -lt 5) { $count++ }

function Get-Greeting {
    param([string]$Name)
    "Hello, $Name!"
}
```

## Processes & services

```powershell
Get-Process
Get-Process | Where-Object { $_.Name -like "chrome*" }
Stop-Process -Id 1234
Stop-Process -Name "notepad"

Get-Service
Get-Service | Where-Object { $_.Status -eq "Running" }
Start-Service spooler
Stop-Service spooler
```

## Network & web

```powershell
Invoke-WebRequest https://example.com -OutFile page.html
Invoke-RestMethod https://api.github.com/users/torvalds   # auto-parses JSON

Test-Connection google.com               # ping
Resolve-DnsName example.com              # DNS lookup
```

## Working with JSON

```powershell
# Object → JSON
$obj | ConvertTo-Json

# JSON → object
Get-Content data.json | ConvertFrom-Json
```

## Safer-script header

```powershell
[CmdletBinding()]
param()
$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest
```

## Keyboard shortcuts

Same as Bash for the most part — `Ctrl+R`, `Tab`, `Ctrl+C`. PowerShell has PSReadLine built in for great line editing.
