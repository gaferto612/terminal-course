# 🌿 Git Cheatsheet

## Setup (one time)

```bash
git config --global user.name  "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
git config --global pull.rebase false        # use merge for pulls
```

## Starting a project

```bash
git init                          # turn current folder into a repo
git clone <url>                   # clone a remote repo
git clone <url> myname            # clone into folder "myname"
```

## The everyday cycle

```bash
git status                        # what's changed
git diff                          # show unstaged changes
git diff --staged                 # show staged changes
git add file.txt                  # stage one file
git add .                         # stage everything
git commit -m "Message"           # commit
git push                          # send to remote
git pull                          # get latest from remote
```

## Branching

```bash
git branch                        # list branches
git branch new-feature            # create branch
git checkout new-feature          # switch to branch
git checkout -b new-feature       # create + switch
git switch main                   # modern alternative to checkout
git merge new-feature             # merge a branch into current
git branch -d branch-name         # delete merged branch
git branch -D branch-name         # force-delete branch
```

## Remotes

```bash
git remote -v                              # show remotes
git remote add origin <url>                # add remote
git remote set-url origin <new-url>        # change remote URL
git push -u origin main                    # push and set upstream
git fetch                                  # download remote changes (don't merge)
```

## History

```bash
git log                           # full log
git log --oneline                 # compact
git log --graph --oneline --all   # visual graph of all branches
git log -p file.txt               # log with diffs for one file
git log --author="Alice"          # commits by Alice
git log --since="2 weeks ago"
git show abc123                   # show a specific commit
git blame file.txt                # who wrote each line
```

## Undoing things

```bash
# Unstage a file
git restore --staged file.txt

# Discard unstaged changes (CAREFUL — can't undo)
git restore file.txt

# Discard ALL unstaged changes in working tree
git restore .

# Amend the last commit (e.g. fix the message)
git commit --amend -m "New message"

# Undo last commit, keep changes staged
git reset --soft HEAD~1

# Undo last commit, keep changes unstaged
git reset HEAD~1

# Undo last commit, DISCARD changes (CAREFUL)
git reset --hard HEAD~1

# Revert a published commit (creates an inverse commit)
git revert abc123
```

## Stashing

Save uncommitted work temporarily:

```bash
git stash                         # stash changes
git stash list                    # show stashes
git stash pop                     # restore most recent
git stash apply stash@{0}         # restore but keep stash
git stash drop                    # delete most recent
git stash clear                   # delete all
```

## Tags

```bash
git tag v1.0.0                              # lightweight tag
git tag -a v1.0.0 -m "Release 1.0"          # annotated tag
git push origin v1.0.0                       # push a tag
git push --tags                              # push all tags
```

## Inspecting & comparing

```bash
git diff main..feature           # diff two branches
git log main..feature            # commits in feature not in main
git show HEAD                    # last commit details
git show HEAD~3                  # 3 commits ago
git reflog                       # local history of HEAD (useful for recovery)
```

## .gitignore essentials

```
# OS
.DS_Store
Thumbs.db

# Editors
.vscode/
.idea/

# Dependencies
node_modules/
__pycache__/
.venv/

# Build output
dist/
build/

# Secrets
.env
*.key
```

## Common workflows

### Start a feature

```bash
git checkout main
git pull
git checkout -b feature/new-thing
# ... work ...
git add .
git commit -m "Add new thing"
git push -u origin feature/new-thing
```

### Sync your fork

```bash
git remote add upstream <original-repo-url>
git fetch upstream
git checkout main
git merge upstream/main
git push
```

### Recover something you "lost"

```bash
git reflog                       # find the SHA of where you were
git checkout abc123              # go there
# or:
git reset --hard abc123          # rewind branch to that point
```

## Aliases worth setting

```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.lg "log --graph --oneline --all"
git config --global alias.unstage "restore --staged"
```

Now `git st`, `git co main`, `git lg` all work.
