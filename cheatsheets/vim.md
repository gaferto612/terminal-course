# 🪖 Vim Survival Guide

> Sooner or later you'll SSH into a server with no nano, just Vim. Don't panic. Here's enough to survive.

## The one thing you must know

To **quit Vim**:

```
Press Esc
Type :q!
Press Enter
```

That force-quits without saving. If you remember nothing else, remember this.

## Vim has modes

This is the thing that trips everyone up. Vim is **modal** — the same key does different things in different modes.

| Mode      | What it's for             | How to enter      |
|-----------|---------------------------|-------------------|
| **Normal** | navigation, commands     | Press `Esc`       |
| **Insert** | type text                | Press `i` (from normal) |
| **Visual** | select text              | Press `v` (from normal) |
| **Command** | run a `:command`        | Press `:` (from normal) |

> 🧠 **Mental model**: Normal mode is "home." You always come back to it. Insert mode is when you're literally typing text. Everything else is a brief detour.

## The essentials

### Opening / saving / quitting (in command mode, `:`)

| Type            | Does what                  |
|-----------------|----------------------------|
| `:w`            | save                       |
| `:q`            | quit                       |
| `:wq` or `:x`   | save and quit              |
| `:q!`           | quit without saving        |
| `:e file.txt`   | open another file          |

### Moving around (normal mode, no `:`)

| Key         | Moves                      |
|-------------|----------------------------|
| `h j k l`   | left, down, up, right      |
| `w`         | next word                  |
| `b`         | previous word              |
| `0`         | start of line              |
| `$`         | end of line                |
| `gg`        | top of file                |
| `G`         | bottom of file             |
| `:42`       | go to line 42              |
| `Ctrl + d`  | half page down             |
| `Ctrl + u`  | half page up               |

> 💡 **Arrow keys work**. You don't have to use `hjkl` until you want to.

### Editing (normal mode)

| Key   | Does what                          |
|-------|------------------------------------|
| `i`   | enter insert mode (before cursor)  |
| `a`   | enter insert mode (after cursor)   |
| `o`   | new line below, enter insert mode  |
| `O`   | new line above, enter insert mode  |
| `x`   | delete character under cursor      |
| `dd`  | delete current line                |
| `yy`  | copy ("yank") current line         |
| `p`   | paste below                        |
| `u`   | undo                               |
| `Ctrl + r` | redo                          |
| `dw`  | delete to end of word              |
| `d$`  | delete to end of line              |
| `D`   | same as `d$`                       |
| `cc`  | replace line (delete + insert)     |

### Search and replace

| Type          | Does what                        |
|---------------|----------------------------------|
| `/word`       | search for "word"                |
| `n`           | next match                       |
| `N`           | previous match                   |
| `:%s/old/new/g` | replace all "old" with "new"  |
| `:%s/old/new/gc` | confirm each replacement     |

## A complete first session

You're SSH'd into a server. You want to edit `/etc/hosts`:

```bash
sudo vim /etc/hosts
```

Now:

1. Press `i` → you're in insert mode, can type
2. Make your changes
3. Press `Esc` → back to normal mode
4. Type `:wq` and press Enter → saved and quit

That's it. That's a Vim session.

## Survival tier list

If you only learn these, you can survive:

```
Esc          back to safety
i            start typing
:w           save
:q!          rage quit
:wq          save and quit
dd           delete a line
u            undo
/word        find
```

## Going further

Vim is genuinely one of the most efficient text editors once you learn it. If you decide to invest:

- Type `vimtutor` in your terminal — interactive 30-minute tutorial bundled with Vim
- Try [Vim Adventures](https://vim-adventures.com/) (game-based learning)
- Install [`nvim`](https://neovim.io/) for the modern fork

## "Nano is fine"

100% fair. Nano is simpler and shows its own shortcuts at the bottom of the screen. If you don't want to learn Vim, just:

```bash
sudo apt install nano       # or it might be already installed
nano file.txt
```

Inside nano:
- Type normally
- `Ctrl + O` to save
- `Ctrl + X` to exit

Both are valid. Some servers only have Vim — that's why this page exists.
