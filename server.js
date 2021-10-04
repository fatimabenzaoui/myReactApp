const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});