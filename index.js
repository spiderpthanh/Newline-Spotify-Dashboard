const express = require('express');
const app = express();
const port = 8888;

app.get('/', (req, res) => {
    //res.send('Hear Deez Nuts!');

    const data = {
        name: 'Thanh',
        isAwesome: true
    };

    res.json(data);
});

app.get('/awesome-generator', (req, res) => {
    const { name, isAwesome } = req.query;
    res.send(`${name} is ${JSON.parse(isAwesome) ? 'really' : 'not'} awesome`);
});

app.listen(port, () => {
    console.log('Express app listening at http://localhost:${port}');
});