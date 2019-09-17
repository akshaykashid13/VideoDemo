const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/welcome.html'));
});
app.use(express.static('public'), () => {
	console.log('Request Recived');
});
app.listen(port, () => {
	console.log('Listening on Port ', port);
});
