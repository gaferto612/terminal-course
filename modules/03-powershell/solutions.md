# Module 3 — Solutions

### Exercise 1 — Processes

1. Processes starting with "s":
   ```powershell
   Get-Process | Where-Object { $_.Name -like "s*" }
   ```

2. Top 3 by memory, only Name + WorkingSet:
   ```powershell
   Get-Process | Sort-Object WorkingSet -Descending | Select-Object Name, WorkingSet -First 3
   ```

### Exercise 2 — PDFs

1. Larger than 1 MB:
   ```powershell
   Get-ChildItem -Recurse -Filter "*.pdf" | Where-Object { $_.Length -gt 1MB }
   ```

2. Modified in last 30 days:
   ```powershell
   Get-ChildItem -Recurse -Filter "*.pdf" | Where-Object { $_.LastWriteTime -gt (Get-Date).AddDays(-30) }
   ```

3. Count:
   ```powershell
   (Get-ChildItem -Recurse -Filter "*.pdf").Count
   ```

### Exercise 3 — Services

It shows the **count** of running services. `Measure-Object` does aggregate calculations: count, sum, average, min, max.

```powershell
Get-Service | Where-Object { $_.Status -eq "Running" } | Measure-Object
# Add -Property Length -Sum to total file sizes, for example
```

### Exercise 4 — One-liner

```powershell
Get-ChildItem ~ | Where-Object { -not $_.PSIsContainer } | Sort-Object Length -Descending | Select-Object Name, Length -First 10
```

`-not $_.PSIsContainer` excludes directories. There's also `-File` as a parameter on `Get-ChildItem`:

```powershell
Get-ChildItem ~ -File | Sort-Object Length -Descending | Select-Object Name, Length -First 10
```
