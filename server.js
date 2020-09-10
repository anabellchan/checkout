var express = require('express');

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('./'));

app.post('/save', (req, res) => {
  console.log(req.body);
  // if successful, go to the next form
  res.send('ok');
});

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});

