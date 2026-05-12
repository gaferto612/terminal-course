# Module 7 — Productivity

> Make the terminal feel like *yours*. By the end, you'll have a customized environment and a capstone project to prove what you've learned.

## In this module

- [7.1 Dotfiles and shell config](#71-dotfiles-and-shell-config)
- [7.2 Aliases and functions](#72-aliases-and-functions)
- [7.3 A better prompt](#73-a-better-prompt)
- [7.4 History tricks](#74-history-tricks)
- [7.5 `tmux` — multiple terminals at once](#75-tmux-multiple-terminals-at-once)
- [7.6 Backing up your dotfiles with Git](#76-backing-up-your-dotfiles-with-git)
- [7.7 Capstone project](#-77-capstone-project)

**Estimated time:** 2–3 hours including the capstone.

---

## 7.1 Dotfiles and shell config

When your shell starts, it reads configuration files in your home directory. These are **hidden files** (their name starts with a dot) — hence "dotfiles."

| Shell      | Config file              |
|------------|--------------------------|
| Bash       | `~/.bashrc` (interactive), `~/.bash_profile` (login) |
| Zsh        | `~/.zshrc`               |
| Fish       | `~/.config/fish/config.fish` |
| PowerShell | run `$PROFILE` to find it |

To **see** the file (might not exist yet):

```bash
ls -la ~/.bashrc
```

To open it for editing:

```bash
nano ~/.bashrc
```

(or `vim ~/.bashrc`, or `code ~/.bashrc` if you have VS Code)

After editing, **reload** so changes take effect:

```bash
source ~/.bashrc
```

For PowerShell:

```powershell
notepad $PROFILE
. $PROFILE                    # reload
```

---

## 7.2 Aliases and functions

### Aliases — short names for long commands

In `~/.bashrc` or `~/.zshrc`:

```bash
# Safety
alias rm='rm -i'
alias cp='cp -i'
alias mv='mv -i'

# Better defaults
alias ls='ls --color=auto'
alias ll='ls -lah'
alias la='ls -A'
alias grep='grep --color=auto'

# Shortcuts
alias ..='cd ..'
alias ...='cd ../..'
alias gs='git status'
alias gp='git push'
alias gc='git commit -m'
```

In PowerShell (`$PROFILE`):

```powershell
Set-Alias ll Get-ChildItem
function gs { git status }
function gp { git push }
function gc { git commit -m $args[0] }
```

### Functions — aliases with arguments

Aliases can't take arguments easily. Functions can:

```bash
mkcd() {
    mkdir -p "$1" && cd "$1"
}

# usage: mkcd new-project
# creates and enters new-project/
```

```bash
# Find files by name, fast
ff() {
    find . -iname "*$1*" 2>/dev/null
}

# usage: ff readme
```

---

## 7.3 A better prompt

The text before your cursor (`$`, `>`, etc.) is the **prompt**. You can customize it.

### Bash example

In `~/.bashrc`:

```bash
# Show user@host, current dir, git branch
parse_git_branch() {
    git branch 2>/dev/null | sed -n 's/^\* \(.*\)/ (\1)/p'
}

PS1='\[\e[32m\]\u@\h\[\e[0m\]:\[\e[34m\]\w\[\e[33m\]$(parse_git_branch)\[\e[0m\]\$ '
```

You'll see something like:

```
alice@laptop:~/projects/site (main)$
```

### The easy way — install a prompt framework

- **Starship** (works in every shell): [starship.rs](https://starship.rs/)
- **Oh My Posh** (especially good on Windows): [ohmyposh.dev](https://ohmyposh.dev/)
- **Powerlevel10k** (Zsh-specific, super fast)

Starship setup:

```bash
curl -sS https://starship.rs/install.sh | sh
# then add to your config:
# bash:  eval "$(starship init bash)"
# zsh:   eval "$(starship init zsh)"
# fish:  starship init fish | source
```

---

## 7.4 History tricks

Every command you type is saved. Use it.

```bash
history                # show all past commands
history | tail -20     # last 20
!!                     # repeat the last command
!42                    # repeat command number 42
!grep                  # repeat the last command starting with "grep"
sudo !!                # re-run the last command with sudo
```

### Search history with Ctrl+R

Press `Ctrl + R`, then start typing. The shell searches backwards through your history.

- `Ctrl + R` again to find the previous match
- `Enter` to run it
- `Ctrl + G` to cancel

This is one of the most underused superpowers in the terminal.

### Make history bigger

In `~/.bashrc`:

```bash
HISTSIZE=10000
HISTFILESIZE=20000
HISTCONTROL=ignoredups        # don't store duplicates
```

---

## 7.5 `tmux` — multiple terminals at once

`tmux` lets you have multiple terminal sessions in one window — and keeps them running even if you disconnect.

### Install

```bash
sudo apt install tmux       # Ubuntu/Debian
brew install tmux           # macOS
```

### Essential commands

```bash
tmux                                # start a session
tmux new -s work                    # named session
tmux attach -t work                 # reattach
tmux ls                             # list sessions
```

### Inside tmux

Everything starts with the **prefix key**: `Ctrl + B`, then a command:

| Keys          | Does what                |
|---------------|--------------------------|
| `Ctrl+B  c`   | new window               |
| `Ctrl+B  n`   | next window              |
| `Ctrl+B  p`   | previous window          |
| `Ctrl+B  %`   | split pane left/right    |
| `Ctrl+B  "`   | split pane top/bottom    |
| `Ctrl+B  arrow` | move between panes     |
| `Ctrl+B  d`   | detach (session keeps running) |
| `Ctrl+B  &`   | kill current window      |

> 💡 **Why this matters**: SSH into a server, start a long-running task in tmux, detach, disconnect. Come back hours later — your task is still running.

---

## 7.6 Backing up your dotfiles with Git

Once you've customized your environment, **don't lose it**.

```bash
mkdir ~/dotfiles
cd ~/dotfiles
cp ~/.bashrc .
cp ~/.gitconfig .
cp -r ~/.config/fish .       # if you use fish

git init
git add .
git commit -m "Initial dotfiles"
```

Push to GitHub, then on a new machine:

```bash
git clone https://github.com/YOUR-USERNAME/dotfiles.git ~/dotfiles
ln -s ~/dotfiles/.bashrc ~/.bashrc
```

Symlinks (`ln -s`) let you edit the file in `~/dotfiles/` and have changes reflected in `~/.bashrc` automatically.

---

## 🎯 7.7 Capstone project

You've made it. Time to prove it.

### The brief

Build a **server health check** tool that:

1. Runs as a Bash script *and* a PowerShell script (your choice — pick the one you'd actually use)
2. Prints a small report showing:
   - Hostname and date
   - Disk usage (warn if any partition is over 85%)
   - Memory usage
   - Top 5 processes by CPU
   - Number of users currently logged in
3. Takes an optional `--mail you@example.com` flag (Bash) or `-Mail you@example.com` parameter (PowerShell) to email the report. *(If email is too much, save the report to a timestamped file instead.)*
4. Uses functions for each check
5. Has proper error handling (`set -euo pipefail` or `$ErrorActionPreference = "Stop"`)

### Bonus points

- Color-code the output (red for warnings)
- Add a `--json` / `-Json` mode that outputs structured JSON instead of human-readable text
- Schedule it to run every hour using `cron` (Linux/macOS) or Task Scheduler (Windows)

### Submission

This is your project. Push it to GitHub, share it with friends, deploy it on a server. If you do publish it, link it in our repo's discussions — we'd love to see it.

---

## ✅ Final checklist

- [ ] My shell has a customized prompt
- [ ] I have at least 5 aliases I actually use
- [ ] My dotfiles are in a Git repo
- [ ] I've used Ctrl+R to find a previous command
- [ ] I've finished the capstone

---

## 🎓 You're done

You started this course not knowing what a shell was. Now you can:

- Move around any Unix or Windows system from the terminal
- Read, search, transform, and combine files at scale
- Write scripts in two different languages
- Use Git, SSH, package managers, and an API from the CLI
- Customize your environment to make work faster

The terminal is no longer scary. It's your fastest tool.

**Now go build something with it.**

→ Back to the [course home](../../README.md) · [Cheatsheets](../../cheatsheets/)
