# Module 2 — Solutions

### Exercise 1 — Project structure

```
terminal-practice/
├── data/
├── notes/
│   ├── lesson1.txt
│   └── lesson2.txt
└── scripts/
    └── hello.sh
```

### Exercise 2 — Counting fruits

1. Total lines:
   ```bash
   wc -l fruits.txt
   ```
   → 6

2. Unique fruits:
   ```bash
   sort fruits.txt | uniq | wc -l
   ```
   → 3 (apple, banana, cherry)

3. Most frequent:
   ```bash
   sort fruits.txt | uniq -c | sort -rn
   ```
   →
   ```
   3 apple
   2 banana
   1 cherry
   ```

### Exercise 3 — Find things

```bash
find ~ -name "*.md"
find ~ -type d -name "node_modules"
grep -r "important" ~ --include="*.txt"
```

### Exercise 4 — Permissions

The script doesn't have execute permission. Fix it:

```bash
chmod +x greet.sh
./greet.sh
```

### Exercise 5 — Real-world combo

```bash
grep "ERROR" app.log | tail -n 10 > recent-errors.txt
```
