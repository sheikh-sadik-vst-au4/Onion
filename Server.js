const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const router = require('./Router');


app.use('/', router);

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => {
    console.log(`app listen at port ${PORT}`)
})