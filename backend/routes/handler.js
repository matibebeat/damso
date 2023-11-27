const express = require('express');
const router = express.Router();
//const Schemas = require('../models/Schemas.js'); 
//const { SchemaTypeOptions } = require('mongoose'); 
const path = require("path");
const axios = require('axios');
const { request } = require('express');
const bodyParser = require('body-parser');
const Schemas = require('../models/schemas.js');
const jwt = require('jsonwebtoken');

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
    try {
        console.log(req.body);
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

router.put('/prods/:id', async (req, res) => {
    try {
        console.log(req.body);
        const product = Schemas.products;
        const ProdData = await product.updateOne({ _id: req.params.id }, req.body).exec();
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



router.delete('/prods/:id', async (req, res) => {
    try {
        const product = Schemas.products;
        const ProdData = await product.deleteOne({ _id: req.params.id }).exec();
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


router.post('/login', async (req, res) => {
    const { name, password } = req.body;
    const customers = Schemas.customers;
    console.log(req.body);

    try{
        const user = await customers.findOne({ name : name, password : password });
        if(user){
            const token = jwt.sign({ name: user.name , userId: user._id}, 'secret', { expiresIn: '1h' });
            res.status(200).json({message: "succesfully logged in", token : token});
        }else{
            res.status(404).json({message: "user not found"});
        }
    }catch(err){
        console.log(err)
        res.status(500).json({ message: err.message });
    }
}
);





router.post('/register', async (req, res) => {

    const email= req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const customers = Schemas.customers;
    console.log(req.body);
    try {
        const user = await customers.create({ name : name, password : password , email: email});

        const panier = Schemas.panier;
        const PanierData = await panier.create({ user: user._id, product: {} });

        res.status(201).json({message: "succesfully created user"});
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message });
    }
});



router.get('/panier/:id', async (req, res) => {
    console.log("in panier");
    try {
        const panier = Schemas.panier;
        const PanierData = await panier.findOne({ user: req.params.id }).exec();
        if (PanierData) {
            console.log(JSON.stringify(JSON.stringify(PanierData.product)));
            res.status(200).json(JSON.stringify(PanierData.product));
        } else {
            res.status(404).json({ message: "No data found" });
        }
    }catch (err) {
        res.status(500).json({ message: err.message });
    }

}

);

router.post('/panier', async (req, res) => {
    try {
        console.log(req.body);
        const panier = Schemas.panier;
        const PanierData = await panier.create(req.body);

        if (PanierData) {
            res.status(200).json(PanierData);
        } else {
            res.status(404).json({ message: "No data found" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

}

);

router.put('/panier/:id', async (req, res) => {
    try {
        console.log(req.body);
        var { product } = req.body;

        var data = JSON.parse(product);
        console.log(data);
        const panier = Schemas.panier;
        const PanierData = await panier.findOne({ user: req.params.id }).exec();

        if (PanierData) {
            PanierData.product = data;
            console.log(req.body.product);
            PanierData.save();
            res.status(200).json(PanierData);
        }
        else {
            res.status(404).json({ message: "No data found" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });

    }
}

);

router.post('/panier/:id', async (req, res) => {
    try {
        const panier = Schemas.panier;

        const data = { user: req.params.id, product: req.body.product };
        const PanierData = await panier.create(data);
        if (PanierData) {
            res.status(200).json(PanierData);
        } else {
            res.status(404).json({ message: "No data found" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });

    }

        }


        );


router.post('/orders', async (req, res) => {
    try {
        console.log(req.body);
        const orders = Schemas.orders;
        const OrdersData = await orders.create(req.body);

        if (OrdersData) {
            res.status(200).json(OrdersData);
        } else {
            res.status(404).json({ message: "No data found" });
        }
    } catch (err) {
        console.log(err)

        res.status(500).json({ message: err.message });
    }

}

);



router.get('/emptyPanier/:id', async (req, res) => {
    try {

        const panier = Schemas.panier;
        const PanierData = await panier.updateOne({ user: req.params.id }, {product: {}}).exec();
        if (PanierData) {
            res.status(200).json(PanierData);
        } else {
            res.status(404).json({ message: "No data found" });
        }
    }catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message });
    }
}

);







router.get('/orders/:id', async (req, res) => {
    try {
        const orders = Schemas.orders;
        const OrdersData = await orders.find({ user: req.params.id }).exec();
        if (OrdersData) {
            var data = [];
            for (var i = 0; i < OrdersData.length; i++) {
                data.push(OrdersData[i].product);
            }
            console.log(data);
            res.status(200).json(JSON.stringify(data));
        } else {
            res.status(404).json({ message: "No data found" });
        }
    }catch (err) {
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