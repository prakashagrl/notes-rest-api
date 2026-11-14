//starting the server (main)

const app = require("./src/app")
const connectDB = require('./src/db/db')

app.listen(5000,()=>{
       console.log('Server is running on port 5000');
})

connectDB()