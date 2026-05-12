# Module 0 — Getting Started

> Before we learn anything, you need a working terminal on your machine.

## What you'll do in this module

1. Identify what operating system you have
2. Open (or install) a proper terminal
3. Type your first command
4. Get comfortable with the prompt

**Estimated time:** 20–30 minutes.

---

## 🪟 If you're on Windows

Windows is the most confusing platform because it has **multiple** terminals. You'll use the modern one.

### Step 1: Install Windows Terminal

Windows 11 has it pre-installed. On Windows 10, install it from the Microsoft Store (search for "Windows Terminal").

### Step 2: Install WSL (Windows Subsystem for Linux)

This gives you a real Linux environment alongside Windows — essential for this course because most online tutorials assume Linux/macOS commands.

Open **PowerShell as Administrator** (right-click Start → "Terminal (Admin)") and run:

```powershell
wsl --install
```

Restart your computer. When it comes back up, Ubuntu will finish setting itself up and ask you to create a username and password. **Write the password down** — you'll need it.

### Step 3: Confirm everything works

Open Windows Terminal. Click the dropdown arrow at the top — you should see at least:

- **PowerShell** (the modern Windows shell)
- **Command Prompt** (the old one, called CMD)
- **Ubuntu** (your Linux environment)

If you see all three, you're set.

---

## 🍎 If you're on macOS

macOS comes with a terminal built in.

### Step 1: Open the Terminal app

Press `Cmd + Space` to open Spotlight, type "Terminal", press Enter.

You should see something like:

```
yourname@MacBook ~ %
```

The `%` at the end means you're using **Zsh** (the default since macOS Catalina). That's perfect.

### Step 2 (optional but recommended): Install iTerm2

Apple's built-in Terminal is fine, but **iTerm2** is better. Download it from [iterm2.com](https://iterm2.com/) — it's free.

### Step 3 (optional): Install Homebrew

Homebrew is macOS's package manager. We'll need it later. Run:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Follow the prompts. You can come back to this later — it's not required for Module 1.

---

## 🐧 If you're on Linux

You're already in the best place. Just open your terminal:

- **Ubuntu / Mint:** `Ctrl + Alt + T`
- **Fedora / GNOME:** Activities → "Terminal"
- **KDE:** Application menu → "Konsole"

You're using Bash (or Zsh on some distros). Either is fine.

---

## ✅ Your first command

Whatever your OS, type this and press Enter:

```bash
echo "Hello, terminal."
```

You should see:

```
Hello, terminal.
```

🎉 **Congratulations.** You just ran your first command. Whatever you do from here, you've crossed the line that scares most people away.

---

## What just happened?

Three things:

1. **You typed a command** (`echo`) and an **argument** (`"Hello, terminal."`)
2. **The shell read it**, figured out what you meant, and ran the `echo` program
3. **The program printed output** back to you and **returned control** to the shell (you see the prompt again)

That pattern — type, run, read output, repeat — is **everything**. The rest of this course is just learning more commands and how they work together.

---

## 🧪 Exercise

Try each of these and observe what happens. Don't worry about understanding them yet:

```bash
echo "I am learning the terminal"
date
whoami
pwd
ls
```

**On PowerShell, try these too:**

```powershell
Write-Host "I am learning the terminal"
Get-Date
$env:USERNAME
Get-Location
Get-ChildItem
```

Notice anything? They do the same thing with different names. We'll explore why in Module 3.

---

## ➡️ Next

Once you have a working terminal and you've run your first commands, head to:

**[Module 1 — Foundations](../01-foundations/)**

You'll learn what a shell actually *is*, how to think about files and paths, and the anatomy of every command you'll ever type.

---

## Troubleshooting

<details>
<summary>"wsl --install" didn't work on Windows</summary>

You may need to enable virtualization in your BIOS, or you might be on an older Windows 10. See Microsoft's [WSL install guide](https://learn.microsoft.com/en-us/windows/wsl/install) for alternative methods.
</details>

<details>
<summary>I can't find Terminal on my Mac</summary>

It's in `/Applications/Utilities/Terminal.app`. Open Finder → Applications → Utilities folder.
</details>

<details>
<summary>The `echo` command did nothing</summary>

Make sure you pressed Enter after typing. The prompt should reappear after the output. If you see another prompt with no output between, the command silently succeeded — try `echo hello` without quotes.
</details>
