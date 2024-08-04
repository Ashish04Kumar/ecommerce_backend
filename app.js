const express = require('express');
const cors = require('cors');
const app = express();
const { getAllProducts, getProductById } = require('./controllers/productController');

app.use(cors({
    methods: 'GET,POST,PUT,DELETE',
}));

app.get('/', (req, res) => {
    res.send("hi");
});

app.get('/api/products', getAllProducts);

// Modified route to handle query parameter
app.get('/api/products', (req, res) => {
    const { id } = req.query;
    if (id) {
        getProductById(req, res);
    } else {
        getAllProducts(req, res);
    }
});

app.listen(8465, () => {
    console.log("Server listening on port 8465...");
});
