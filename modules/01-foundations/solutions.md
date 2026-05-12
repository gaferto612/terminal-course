# Module 1 — Solutions

### Exercise 3 — Man page

The `-h` (or `--human-readable`) flag, usually combined with `-l`:

```bash
ls -lh
```

This shows sizes like `4.2K`, `1.3M`, `7.1G` instead of raw byte counts.

### Exercise 4 — Get-Process

`Get-Process` lists all running processes on your computer. Example:

```powershell
Get-Process -Name chrome
```

Lists all Chrome processes.

### Exercise 5 — Path resolution

Starting from `/home/alice/Documents/projects/`:

1. `./report.pdf` → `/home/alice/Documents/projects/report.pdf`
2. `../resume.pdf` → `/home/alice/Documents/resume.pdf`
3. `../../music/` → `/home/alice/music/`
4. `~/Desktop/` → `/home/alice/Desktop/`
5. `../../../etc/hosts` → `/etc/hosts`
