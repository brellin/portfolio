const express = require('express');
const path = require('path');
const open = require('open');

const app = express();

const port = 9455;

function portString(port) {
    const text = `Server running on port ${ port }`;
    const wrap = '='.repeat(text.length + 2);
    return `\n${ wrap }\n ${ text }\n${ wrap }\n`;
}

app.use('/js', express.static(path.resolve(__dirname, 'src', 'js')));
app.use('/assets', express.static(path.resolve(__dirname, 'src', 'assets')));

app.get('/*', (_, res) => {
    res.sendFile(path.resolve(__dirname, 'src', 'index.html'));
});

app.listen(port, _ => {
    open(`http://localhost:${ port }`);
    console.log(portString(port));
});
