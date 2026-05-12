# Module 4 — Other Shells

> Bash and PowerShell are the big two. But the shell world is wider — and some of these alternatives are genuinely better for daily use.

## In this module

- [4.1 Zsh — the macOS default](#41-zsh-the-macos-default)
- [4.2 Fish — the friendly shell](#42-fish-the-friendly-shell)
- [4.3 WSL — Linux inside Windows](#43-wsl-linux-inside-windows)
- [4.4 Nushell — a structured-data shell](#44-nushell-a-structured-data-shell)
- [4.5 Picking your daily shell](#45-picking-your-daily-shell)
- [Exercises](#-exercises)

**Estimated time:** 60 minutes (mostly reading & exploring).

---

## 4.1 Zsh — the macOS default

Zsh ("Z shell") is **mostly Bash-compatible** but with quality-of-life upgrades. Apple made it macOS's default in 2019.

### What you get over Bash

- **Better tab completion** — case-insensitive, completes anywhere in a word
- **Spelling correction** — "did you mean `git status`?"
- **Glob superpowers** — `**` matches across directories recursively
- **Themes and plugins** via Oh My Zsh

### Try it

If you're on macOS, you're already running Zsh:

```bash
echo $SHELL    # should print /bin/zsh or /usr/bin/zsh
```

### Install Oh My Zsh

[Oh My Zsh](https://ohmyz.sh/) is the most popular Zsh framework. It bundles themes, plugins, and sensible defaults.

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Then edit `~/.zshrc` to set a theme:

```bash
ZSH_THEME="agnoster"     # or "robbyrussell", "powerlevel10k", etc.
```

### Useful Zsh features Bash doesn't have

```bash
# Recursive glob — find every .log file under the tree
cat **/*.log

# Numerical sorting in globs
ls *.txt(om)             # sort by modification time, newest first

# Quick directory hopping (with autojump or zoxide installed)
z proj                   # jumps to your most-used directory matching "proj"
```

---

## 4.2 Fish — the friendly shell

[Fish](https://fishshell.com/) ("Friendly Interactive Shell") is the rebel. It is **not** Bash-compatible, but it's gorgeous and beginner-friendly out of the box.

### Why people love Fish

- **Autosuggestions as you type** (greyed-out completion of past commands)
- **Syntax highlighting** built in — typos turn red before you press Enter
- **No configuration needed** — sensible defaults
- **Cleaner scripting syntax** than Bash

### Install

```bash
# macOS
brew install fish

# Ubuntu / Debian
sudo apt install fish

# Fedora
sudo dnf install fish
```

### Fish syntax is different

Bash:
```bash
if [ "$x" -gt 5 ]; then
  echo "big"
fi
```

Fish:
```fish
if test $x -gt 5
  echo "big"
end
```

Cleaner, but **you can't paste Bash snippets** into Fish and expect them to work. This is the main reason advanced users sometimes avoid Fish.

> 💡 **Recommendation**: Use Fish as your interactive shell, but keep scripts in Bash for portability.

---

## 4.3 WSL — Linux inside Windows

WSL (Windows Subsystem for Linux) lets you run a real Linux environment alongside Windows. You installed it in Module 0.

### Why WSL?

- Most documentation, tutorials, and developer tools assume Linux/macOS
- You can run Linux commands and Windows commands side by side
- Files are accessible from both worlds

### Accessing your Windows files from WSL

```bash
cd /mnt/c/Users/YourName/Documents
```

The `C:\` drive is mounted at `/mnt/c/`.

### Accessing WSL files from Windows

In File Explorer, type:

```
\\wsl$
```

You'll see your Linux distros as if they were network drives.

### Run Windows programs from WSL

```bash
notepad.exe file.txt              # opens in Windows Notepad
explorer.exe .                    # opens current dir in File Explorer
```

### Run Linux programs from PowerShell

```powershell
wsl ls -la
wsl grep "error" /var/log/syslog
```

---

## 4.4 Nushell — a structured-data shell

[Nushell](https://www.nushell.sh/) is a newer experimental shell that takes PowerShell's "objects in pipes" idea and runs further with it. Everything is a table.

```nu
ls | where size > 1MB | sort-by modified | first 5
```

That `ls` doesn't print text — it returns a **table** you can query like a database. If you ever wished the shell felt more like SQL or pandas, look at Nushell.

It's not (yet) a daily driver for most people, but it's worth watching.

---

## 4.5 Picking your daily shell

There's no single right answer. Here's a practical guide:

| If you...                                         | Use this    |
|---------------------------------------------------|-------------|
| Are on Linux and want maximum compatibility       | **Bash**    |
| Are on macOS and want everything to "just work"   | **Zsh** (already there) |
| Want the most pleasant interactive experience     | **Fish**    |
| Manage Windows servers or write Windows automation| **PowerShell** |
| Want one shell that runs everywhere               | **PowerShell Core** (yes, it runs on Linux/Mac now) |
| Want to experiment with the future of shells      | **Nushell** |

### My personal recommendation for this course

- **Linux/macOS:** Stick with Bash or Zsh for now. Switch to Fish later if you want.
- **Windows:** Use PowerShell for Windows work, WSL with Bash for everything else.

You'll learn the **concepts** regardless of which shell you pick. They all do the same basic things — they're just different dialects.

---

## 🧪 Exercises

### Exercise 1 — What shell are you running?

```bash
echo $SHELL          # Linux/macOS
$PSVersionTable      # PowerShell
```

What does it print? What version?

### Exercise 2 — Switch shells temporarily

If you have multiple shells installed, you can just type the name:

```bash
fish     # switch to fish
exit     # back to your previous shell

zsh      # try zsh
exit
```

Spend 5 minutes typing the same `ls -la` and `cd` commands in each. Notice the differences.

### Exercise 3 — WSL crossover (Windows users)

From WSL:

```bash
cd /mnt/c/Users/$USER/Desktop
ls
notepad.exe hello.txt    # opens Windows Notepad on a file you create
```

This is the WSL superpower — both worlds in one terminal.

### Exercise 4 — Compare a glob

In Bash:

```bash
find . -name "*.txt"
```

In Zsh (if available):

```bash
ls **/*.txt
```

Both should return similar results. Notice how Zsh's `**` is shorter.

---

## ✅ Module checklist

- [ ] I know there are multiple shells and I can name three
- [ ] I have a sense of which shell I'm using
- [ ] I've tried (or at least read about) Fish or Zsh
- [ ] I can move files between Windows and WSL if I'm on Windows

---

## ➡️ Next

**[Module 5 — Scripting](../05-scripting/)**

Time to graduate from typing commands to writing programs.
