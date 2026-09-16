const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'parts');
const order = ['01_head.html','02_plan.html','03_python.html','04_ds.html','05a_algo.html','05b_algo.html','06a_mine.html','06_asked.html','07_design_behav.html'];
let html = order.map(f => fs.readFileSync(path.join(dir, f), 'utf8')).join('\n');
let count = 0;
html = html.replace(/<pre>([\s\S]*?)<\/pre>/g, (m, code) => {
  count++;
  const esc = code.replace(/^\n/, '').replace(/\n+$/, '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return '<pre>' + esc + '</pre>';
});
html = html.replace("</body>", fs.readFileSync(path.join(dir, "08_reels.html"), "utf8") + "\n</body>");
const out = process.argv[2];
fs.writeFileSync(out, html, 'utf8');
console.log('pre blocks escaped:', count, 'bytes:', Buffer.byteLength(html), 'lines:', html.split('\n').length);
