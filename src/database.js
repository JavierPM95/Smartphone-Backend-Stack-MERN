const mongoose = require('mongoose');
require('dotenv').config();

//MongoDB Atlas URI
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sy7xt.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;


//Mongoose Config
const dbConnection = async() => {
    try {
        const connectionOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }

        const db = await mongoose.connect(uri, connectionOptions);
        console.log('Database is conected to: ', db.connection.name)

    } catch (error) {
        console.error(error)
    }
}

dbConnection();

module.exports = dbConnection;