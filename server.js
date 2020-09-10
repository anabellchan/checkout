var express = require('express');
var db = require('./database.js');

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('./'));

app.post('/save', (req, res) => {
  db.save(req.body, (err, data) => {
    if (err) {
      console.error(err.stack);
      res.sendStatus(500);
    } else {
      console.log('save result', data);
      res.sendStatus(201);
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});

