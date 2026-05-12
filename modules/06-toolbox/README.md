# Module 6 — The Toolbox

> The standard library of any working professional. Git, SSH, package managers, and a handful of network and data utilities.

## In this module

- [6.1 Git from the terminal](#61-git-from-the-terminal)
- [6.2 Package managers](#62-package-managers)
- [6.3 SSH — connect to remote machines](#63-ssh-connect-to-remote-machines)
- [6.4 `curl` and `wget` — talk to the web](#64-curl-and-wget-talk-to-the-web)
- [6.5 `jq` — work with JSON](#65-jq-work-with-json)
- [6.6 Python from the CLI](#66-python-from-the-cli)
- [6.7 Other classics: `tar`, `awk`, `sed`](#67-other-classics-tar-awk-sed)
- [Exercises](#-exercises)

**Estimated time:** 2 hours.

---

## 6.1 Git from the terminal

You probably know Git through GitHub Desktop or VS Code. The terminal version is faster once you know it.

### The everyday workflow

```bash
git status                          # what's changed?
git add file.txt                    # stage one file
git add .                           # stage everything
git commit -m "Fix typo in README"  # commit with message
git push                            # send to GitHub
git pull                            # get latest changes
```

### Branches

```bash
git branch                          # list branches
git checkout -b new-feature         # create and switch
git checkout main                   # switch back
git merge new-feature               # merge into current branch
```

### Looking at history

```bash
git log                             # full log
git log --oneline                   # one line per commit
git log --graph --oneline --all     # visual tree
git diff                            # what's changed since last commit
git diff HEAD~1                     # diff vs. 1 commit ago
```

### Undoing things

```bash
git restore file.txt                # discard unstaged changes
git restore --staged file.txt       # unstage
git reset --soft HEAD~1             # undo last commit, keep changes
git reset --hard HEAD~1             # undo last commit, DISCARD changes (careful!)
```

### Cloning

```bash
git clone https://github.com/YOUR-USERNAME/repo.git
```

---

## 6.2 Package managers

Package managers install programs from the terminal. They handle dependencies, updates, and uninstalls.

### Linux

**Debian/Ubuntu (`apt`)**:

```bash
sudo apt update                  # refresh package lists
sudo apt install firefox         # install
sudo apt remove firefox          # uninstall
sudo apt upgrade                 # upgrade everything
apt search "image editor"        # find packages
```

**Fedora/RHEL (`dnf`)**:

```bash
sudo dnf install firefox
sudo dnf remove firefox
sudo dnf upgrade
```

**Arch (`pacman`)**:

```bash
sudo pacman -S firefox           # install
sudo pacman -R firefox           # remove
sudo pacman -Syu                 # update everything
```

### macOS (Homebrew)

```bash
brew install wget
brew install --cask visual-studio-code   # GUI apps
brew uninstall wget
brew update && brew upgrade
brew search "image editor"
```

### Windows (winget or Chocolatey)

```powershell
# winget — comes with Windows 11
winget install Git.Git
winget install Mozilla.Firefox
winget search "image editor"
winget upgrade --all

# Chocolatey — must install first (chocolatey.org)
choco install git
```

### Language-specific package managers

| Language | Tool         | Example                   |
|----------|--------------|---------------------------|
| Python   | `pip`        | `pip install requests`    |
| Node.js  | `npm`, `yarn`| `npm install express`     |
| Ruby     | `gem`        | `gem install bundler`     |
| Rust     | `cargo`      | `cargo install ripgrep`   |
| Go       | `go install` | `go install ./cmd/server` |

---

## 6.3 SSH — connect to remote machines

SSH ("Secure Shell") lets you log into another computer over the network and use *its* terminal.

```bash
ssh user@server.example.com
```

You'll be asked for a password. Once connected, every command you type runs on the **remote** machine.

### SSH keys (much better than passwords)

Generate a key pair:

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

This creates:

- `~/.ssh/id_ed25519` — your **private** key (never share!)
- `~/.ssh/id_ed25519.pub` — your **public** key (share freely)

Copy your public key to a server:

```bash
ssh-copy-id user@server.example.com
```

Now `ssh user@server.example.com` connects without a password.

### Copy files over SSH

```bash
scp local-file.txt user@server:/remote/path/
scp user@server:/remote/file.txt ./
scp -r mydir/ user@server:/remote/path/
```

`rsync` is better for big or repeated transfers:

```bash
rsync -avh --progress mydir/ user@server:/backup/
```

---

## 6.4 `curl` and `wget` — talk to the web

```bash
# Download a file
curl -O https://example.com/file.zip
wget https://example.com/file.zip          # same idea

# GET a URL and print to terminal
curl https://api.github.com/users/torvalds

# Save to a specific filename
curl -o my-name.zip https://example.com/file.zip

# POST data to an API
curl -X POST https://api.example.com/login \
     -H "Content-Type: application/json" \
     -d '{"user": "alice", "pass": "secret"}'

# Include headers in the output (good for debugging)
curl -i https://example.com

# Follow redirects
curl -L https://t.co/abc123
```

---

## 6.5 `jq` — work with JSON

`jq` is a tiny program that makes JSON usable from the command line. **Install it** — you'll thank yourself.

```bash
# pretty-print JSON
curl https://api.github.com/users/torvalds | jq

# extract a single field
curl https://api.github.com/users/torvalds | jq '.name'

# pull out two fields
curl https://api.github.com/users/torvalds | jq '{name, public_repos}'

# work with arrays
curl https://api.github.com/users/torvalds/repos | jq '.[].name'
```

PowerShell has this built in — use `ConvertFrom-Json`:

```powershell
Invoke-RestMethod https://api.github.com/users/torvalds
```

---

## 6.6 Python from the CLI

Python is everywhere. Knowing the CLI essentials saves time.

```bash
python3 --version            # which version
python3 script.py            # run a script
python3 -c "print(2 + 2)"    # one-liner
python3 -m http.server 8000  # start a web server in current dir!
python3 -m json.tool < data.json  # pretty-print JSON
```

### Virtual environments — essential

Never `pip install` globally on your system. Use venvs:

```bash
python3 -m venv .venv               # create venv in .venv/
source .venv/bin/activate           # activate (Linux/macOS)
.\.venv\Scripts\Activate            # activate (PowerShell)

pip install requests pandas         # install into the venv
deactivate                          # leave the venv
```

### `pipx` for installing CLI tools

```bash
pipx install httpie       # installs the `http` command system-wide, isolated
```

---

## 6.7 Other classics: `tar`, `awk`, `sed`

### `tar` — archive files

```bash
tar czvf archive.tar.gz mydir/      # create gzipped tar
tar xzvf archive.tar.gz             # extract
tar tzvf archive.tar.gz             # list contents
```

Mnemonic for the flags: **c**reate, e**x**tract, lis**t**; **z** for gzip, **v** for verbose, **f** for filename.

### `awk` — column-aware text processing

```bash
# Print the second column of a file
awk '{print $2}' data.txt

# Sum the numbers in column 3
awk '{sum += $3} END {print sum}' data.txt

# Print only lines where column 1 = "ERROR"
awk '$1 == "ERROR" {print}' log.txt
```

### `sed` — stream editor (find & replace)

```bash
# Replace "foo" with "bar" in a file (print to screen)
sed 's/foo/bar/g' file.txt

# Replace in place (modifies the file!)
sed -i 's/foo/bar/g' file.txt

# Delete lines containing "DEBUG"
sed '/DEBUG/d' log.txt
```

> 💡 **Modern alternatives**: `rg` (ripgrep) replaces `grep` and is much faster. `fd` replaces `find`. `bat` replaces `cat` with syntax highlighting. Install them if you use the terminal a lot.

---

## 🧪 Exercises

### Exercise 1 — Clone, change, commit

```bash
git clone https://github.com/YOUR-USERNAME/some-repo.git
cd some-repo
echo "test" > newfile.txt
git add newfile.txt
git commit -m "Add test file"
git log --oneline
```

### Exercise 2 — Install a tool

Install `jq` or `htop` or `ripgrep` using your platform's package manager. Verify it works.

### Exercise 3 — Hit an API

```bash
curl https://api.github.com/users/torvalds | jq '{name, location, public_repos}'
```

Now try a different GitHub user, including yourself if you have an account.

### Exercise 4 — Quick web server

In a directory full of files:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000` in your browser. Magic.

### Exercise 5 — Create a venv

Create a Python virtual environment, install `requests`, write a tiny script that fetches a URL, and run it.

→ Solutions in [solutions.md](solutions.md)

---

## ✅ Module checklist

- [ ] I can clone, commit, push from the terminal
- [ ] I know my OS's package manager
- [ ] I've connected to a server via SSH (or at least generated keys)
- [ ] I can fetch a URL with `curl`
- [ ] I can pretty-print JSON with `jq` or `ConvertFrom-Json`
- [ ] I know what a venv is and how to make one

---

## ➡️ Next

**[Module 7 — Productivity](../07-productivity/)**

Make the terminal *yours*. Aliases, dotfiles, prompts, tmux, and the capstone.
