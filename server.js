const express = require('express');
const app = express();




app.get('/', (req, res) => {
    res.send('Hello World!');
});



app.listen(5200, () => {console.log('Server started on port 5200')});