const express = require("express");

const app = express();

app.use('/fonts', express.static('fonts/brl-font-icons/fonts'));
app.use('/fonts-css', express.static('fonts/brl-font-icons'));
app.use('/out', express.static('out'));
app.use('/src', express.static('src'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});