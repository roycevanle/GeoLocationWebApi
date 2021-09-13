// import statement, put all in var called 
const express = require('express');

// create a web app into app by calling express func
const app = express();

// server listens, need to specify port 
// **(will need to change for prod)
app.listen(3000, () => console.log('listening at 3000'));
