const fs = require('fs');
const { exec } = require('child_process');
fs.readFile('stackbit.config.js', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  exec(data);
});