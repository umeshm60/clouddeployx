const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({ status: 'CloudDeployX is running', version: '1.0' });
});

app.get('/health', (req, res) => {
  res.json({ health: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});// demo trigger Thu May 21 11:03:08 IST 2026
