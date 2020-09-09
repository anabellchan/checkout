var express = require('express');
var parser = require('body-parser');

var app = express();

app.use(express.static('./'));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});

