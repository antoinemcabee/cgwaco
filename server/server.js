const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'public');
const indexPath = path.join(__dirname, '..', 'src');

console.log(`Public Path: ${publicPath}`);
console.log(`Index Path: ${indexPath}`);

app.use(express.static(publicPath));
app.use(express.static(indexPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});