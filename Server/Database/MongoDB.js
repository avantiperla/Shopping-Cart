const mongoose = require("mongoose");
require('dotenv').config()

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
        .then(() => {
            console.log("Database connected successfully")
        })
        .catch(() => {
            console.log("Database connection failed")
        })
}


module.exports = dbConnect;



