const connectDB = require('./config/db');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

//Connect DataBase
connectDB();

//Init middleware
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.json({ msg: 'Hello World!' }));

//Define Routes
app.use(`/api/users`, require(`./routes/users`));
app.use(`/api/auth`, require(`./routes/auth`));
app.use(`/api/contacts`, require(`./routes/contacts`));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
