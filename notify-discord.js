// notify-discord.js
const https = require('https');

const webhookUrl = 'https://discord.com/api/webhooks/1359492861376073849/UG5D1MUvgsO2cPYacgJX9md7S19nGOQ0W0cOov9IN7pcfyXW1KxJXjewK_EjWZm4FmBA';
const message = {
  content: `✅ Se generó un nuevo build del APK para pruebas. ¡Equipo, pueden comenzar a testear! 🎉`,
};

const data = JSON.stringify(message);
const url = new URL(webhookUrl);

const req = https.request({
  hostname: url.hostname,
  path: url.pathname + url.search,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
  },
}, res => {
  res.on('data', d => process.stdout.write(d));
});

req.on('error', error => console.error(error));
req.write(data);
req.end();
