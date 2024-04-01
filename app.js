const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

app.post('/registro', (req, res) => {
    console.log(req.body);
        res.status(200).json({message: 'Usuario creado', data: req.body})
});
