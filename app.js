const express = require('express');
const app = express();


app.get('/', (req, res) => {
;
});

app.put('/update', (req, res) => {
  res.send('');
});

app.post('/create', (req, res) => {
  res.send('');
});

app.delete('/delete', (req, res) => {
  res.send('');
});




export default app;