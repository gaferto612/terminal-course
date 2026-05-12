# Module 5 — Scripting

> A script is just a file full of commands. But scripts open up loops, conditions, variables, and functions — at which point you've crossed into programming.

## In this module

- [5.1 Your first Bash script](#51-your-first-bash-script)
- [5.2 Variables and arguments](#52-variables-and-arguments)
- [5.3 Conditionals: `if`, `else`, `elif`](#53-conditionals-if-else-elif)
- [5.4 Loops: `for`, `while`](#54-loops-for-and-while)
- [5.5 Functions](#55-functions)
- [5.6 PowerShell scripting](#56-powershell-scripting)
- [5.7 Error handling & exit codes](#57-error-handling-exit-codes)
- [Exercises](#-exercises)

**Estimated time:** 2 hours.

---

## 5.1 Your first Bash script

Create a file `hello.sh`:

```bash
#!/usr/bin/env bash
echo "Hello, scripting world!"
echo "Today is $(date)"
```

Two important lines:

1. **`#!/usr/bin/env bash`** — the **shebang**. Tells the OS "run this with Bash."
2. The script body — same commands you'd type at the prompt.

Make it executable, then run it:

```bash
chmod +x hello.sh
./hello.sh
```

You should see:

```
Hello, scripting world!
Today is Tue May 12 14:22:01 UTC 2026
```

> 💡 **The `./` matters**. It says "run the file in the *current* directory." Without it, the shell only looks in special `$PATH` directories.

---

## 5.2 Variables and arguments

### Variables

```bash
name="Alice"
greeting="Hello"

echo "$greeting, $name!"
```

**Rules:**

- No spaces around `=` (this is **wrong**: `name = "Alice"`)
- Quote when using: `"$name"` is safer than `$name`
- Use `${name}` when ambiguous: `"${name}_backup.txt"`

### Reading arguments

When you run `./script.sh foo bar baz`, the script sees:

- `$0` — the script's name (`./script.sh`)
- `$1` — first argument (`foo`)
- `$2` — second (`bar`)
- `$@` — all arguments
- `$#` — number of arguments

```bash
#!/usr/bin/env bash
echo "Script name: $0"
echo "First arg:   $1"
echo "All args:    $@"
echo "Number:      $#"
```

### Reading user input

```bash
read -p "What's your name? " username
echo "Hi, $username!"
```

---

## 5.3 Conditionals: `if`, `else`, `elif`

```bash
#!/usr/bin/env bash
if [ "$1" = "hello" ]; then
    echo "Hi back!"
elif [ "$1" = "bye" ]; then
    echo "See you."
else
    echo "I don't understand."
fi
```

### Common tests

| Test                       | Meaning                          |
|----------------------------|----------------------------------|
| `[ "$a" = "$b" ]`          | strings equal                    |
| `[ "$a" != "$b" ]`         | strings not equal                |
| `[ "$a" -eq "$b" ]`        | numbers equal                    |
| `[ "$a" -gt "$b" ]`        | greater than                     |
| `[ "$a" -lt "$b" ]`        | less than                        |
| `[ -f file.txt ]`          | file exists and is regular       |
| `[ -d /etc ]`              | directory exists                 |
| `[ -z "$a" ]`              | string is empty                  |
| `[ -n "$a" ]`              | string is non-empty              |

> ⚠️ **Always quote variables in tests.** `[ -z $a ]` breaks if `$a` is empty.

---

## 5.4 Loops: `for` and `while`

### `for`

```bash
# Iterate over a list
for fruit in apple banana cherry; do
    echo "I like $fruit"
done

# Iterate over files
for file in *.txt; do
    echo "Processing $file..."
done

# Numeric range
for i in {1..5}; do
    echo "Iteration $i"
done
```

### `while`

```bash
count=0
while [ $count -lt 5 ]; do
    echo "Count: $count"
    count=$((count + 1))
done
```

### Read a file line by line

```bash
while IFS= read -r line; do
    echo "Line: $line"
done < input.txt
```

---

## 5.5 Functions

```bash
#!/usr/bin/env bash

greet() {
    local name=$1
    echo "Hello, $name!"
}

# Call it
greet "Alice"
greet "Bob"
```

- `local` keeps the variable scoped to the function
- Arguments inside the function are still `$1`, `$2`, etc. (its own arguments, not the script's)

### Return values

Bash functions return **exit codes** (0–255), not values. To pass data, use `echo`:

```bash
add() {
    echo $(( $1 + $2 ))
}

result=$(add 5 3)
echo "Result: $result"   # 8
```

---

## 5.6 PowerShell scripting

Save as `Hello.ps1`:

```powershell
param(
    [string]$Name = "World"
)

Write-Host "Hello, $Name!"

# Variables don't need types
$age = 30
$greeting = "Hello"

# Conditionals
if ($age -gt 18) {
    Write-Host "Adult"
} elseif ($age -gt 12) {
    Write-Host "Teen"
} else {
    Write-Host "Child"
}

# Loops
foreach ($i in 1..5) {
    Write-Host "Iteration $i"
}

# Function
function Get-Greeting {
    param([string]$Name)
    return "Hi, $Name!"
}

$message = Get-Greeting -Name "Alice"
Write-Host $message
```

### Running PowerShell scripts

By default, Windows blocks script execution. Allow it:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Then run with:

```powershell
.\Hello.ps1 -Name "Alice"
```

---

## 5.7 Error handling & exit codes

Every command returns an **exit code**: `0` = success, anything else = error.

```bash
ls /nonexistent
echo $?           # prints the exit code of the last command (probably 2)
```

### Make scripts safer

Add this at the top of any Bash script:

```bash
#!/usr/bin/env bash
set -euo pipefail
```

- `-e`: exit immediately if any command fails
- `-u`: treat unset variables as errors
- `-o pipefail`: a failure in a pipeline counts as a failure

This catches bugs early. **Use this every time.**

### PowerShell

```powershell
$ErrorActionPreference = "Stop"

try {
    Get-Content "missing.txt"
} catch {
    Write-Host "Caught: $_"
}
```

---

## 🧪 Exercises

### Exercise 1 — Backup script

Write a Bash script `backup.sh` that:

- Takes a directory name as argument
- Creates a zip file `<dirname>-backup-<date>.zip`
- Exits with an error if the directory doesn't exist

### Exercise 2 — Word counter

Write a script that takes a filename and prints:

- Number of lines
- Number of words
- Number of characters

### Exercise 3 — FizzBuzz in Bash

Print numbers 1 to 30, but:

- Multiples of 3 → "Fizz"
- Multiples of 5 → "Buzz"
- Multiples of both → "FizzBuzz"

### Exercise 4 — PowerShell renamer

Write a PowerShell script that renames every `.txt` file in the current directory to lowercase.

### Exercise 5 — Argument validator

Write a script that:

- Requires exactly 2 arguments
- Prints a usage message and exits with code 1 if not
- Otherwise prints "Got: <arg1> and <arg2>"

→ Solutions in [solutions.md](solutions.md) and [examples/](examples/)

---

## ✅ Module checklist

- [ ] I've written a Bash script with a shebang and made it executable
- [ ] I can use `if`, `for`, and `while`
- [ ] I know what `$1`, `$2`, `$@` mean
- [ ] I've written a PowerShell script with `param()`
- [ ] I use `set -euo pipefail` in my Bash scripts

---

## ➡️ Next

**[Module 6 — The Toolbox](../06-toolbox/)**

Git, SSH, package managers, curl, Python CLI — the tools that make you actually productive.
