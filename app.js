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
app.get('/singleproduct/:id', getProductById);

app.listen(8465, () => {
    console.log("Server listening on port 8465...");
});
