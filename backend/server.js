const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routesHandler = require('./routes/handler.js');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', routesHandler);
console.log(process.env.MONGODB_URI);

mongoose.connect("mongodb+srv://root:V3FnS8S9u3AXErWe@NeonTheOne.dlwsxnj.mongodb.net/mystoredb?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});

const PORT = 4000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});