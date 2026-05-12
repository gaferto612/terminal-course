/* Terminal hero animation — cycles through realistic commands */

(function () {
  const target = document.querySelector('.typed');
  if (!target) return;

  const terminalBody = document.getElementById('terminal-demo');

  const sequence = [
    {
      cmd: 'ls -la',
      output: [
        '<p class="dim">drwxr-xr-x  notes/</p>',
        '<p class="dim">-rw-r--r--  hello.txt</p>',
        '<p class="dim">-rwxr-xr-x  <span class="green">backup.sh</span></p>',
      ],
    },
    {
      cmd: 'cat hello.txt | grep -i "terminal"',
      output: [
        '<p>The <span class="yellow">terminal</span> is your superpower.</p>',
      ],
    },
    {
      cmd: 'Get-Process | Sort-Object CPU -Descending',
      output: [
        '<p class="dim"><span class="blue">PowerShell</span> uses objects, not text.</p>',
      ],
    },
    {
      cmd: 'git commit -m "learned the terminal"',
      output: [
        '<p class="green">[main 4f2c1a8]</p>',
        '<p class="dim">1 file changed, ∞ confidence +1</p>',
      ],
    },
  ];

  let idx = 0;
  let charIdx = 0;
  let phase = 'typing'; // typing | pause | output | wait
  let outputLines = [];

  function renderPrompt(typed = '') {
    return `<p><span class="green">you@laptop</span>:<span class="blue">~</span>$ ${typed}<span class="caret">▌</span></p>`;
  }

  function tick() {
    const current = sequence[idx];

    if (phase === 'typing') {
      charIdx++;
      const typed = current.cmd.slice(0, charIdx);
      terminalBody.innerHTML =
        outputLines.join('') + renderPrompt(typed);

      if (charIdx >= current.cmd.length) {
        phase = 'pause';
        setTimeout(tick, 500);
        return;
      }
      setTimeout(tick, 60 + Math.random() * 60);
    } else if (phase === 'pause') {
      phase = 'output';
      // promote the typed prompt to history (no caret)
      const finalPrompt = `<p><span class="green">you@laptop</span>:<span class="blue">~</span>$ ${current.cmd}</p>`;
      outputLines.push(finalPrompt);
      outputLines.push(...current.output);
      terminalBody.innerHTML = outputLines.join('') + renderPrompt('');
      setTimeout(tick, 1500);
    } else if (phase === 'output') {
      idx = (idx + 1) % sequence.length;
      charIdx = 0;
      phase = 'typing';
      // keep only last 4 lines of history for clean look
      if (outputLines.length > 6) outputLines = outputLines.slice(-6);
      setTimeout(tick, 200);
    }
  }

  // start
  terminalBody.innerHTML = renderPrompt('');
  setTimeout(tick, 800);
})();
