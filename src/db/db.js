const mongoose = require('mongoose')

async function connectDB() {

       await mongoose.connect("mongodb+srv://prakashagrl:R3o5rEC2EucJImyn@cluster0.ujymh8i.mongodb.net/halley") //ye cluster ko connect krega database se

       console.log('Database is connected');

}

module.exports = connectDB