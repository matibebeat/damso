const express = require('express');
const router = express.Router();
//const Schemas = require('../models/Schemas.js'); 
//const { SchemaTypeOptions } = require('mongoose'); 
const path = require("path");
const axios = require('axios');
const { request } = require('express');
const bodyParser = require('body-parser');
const Schemas = require('../models/schemas.js');

const { SchemaTypeOptions } = require('mongoose');

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content - Type, Accept");
    next();
});



router.get('/',  (req, res) => {
    res.end('This is my root API http response');
});
router.get('/prods/:id', async (req, res) => {
        console.log("in prods");
        try {
            const product = Schemas.products;
            const ProdData = await product.find({ _id: req.params.id }).exec();
            if (ProdData) {
                res.status(200).send(ProdData);
            } else {
                res.status(404).json({ message: "No data found" });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }


    }

);

router.get('/prods', async (req, res) => {
    console.log("in prods");
    try {
        const product = Schemas.products;
        const ProdData = await product.find({}).exec();
        if (ProdData) {
            res.status(200).json(ProdData);
        } else {
            res.status(404).json({ message: "No data found" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

}

);

router.post('/prods', async (req, res) => {
    console.log("in prods");
    try {
        const product = Schemas.products;
        const ProdData = await product.create(req.body);
        if (ProdData) {
            res.status(200).json(ProdData);
        } else {
            res.status(404).json({ message: "No data found" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

}

);


router.get('/cust', (req, res) => {
    const responseObject = {
        message: 'This is a JSON response',
        data: {
            items: [
                { id: 1, name: 'Customer 1' },
                { id: 2, name: 'Customer 2' },
                { id: 3, name: 'Customer 3' },
            ],
        },
    };

    res.json(responseObject);
});

module.exports = router; 