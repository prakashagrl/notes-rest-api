const mongoose = require('mongoose')

const newSchema = new mongoose.Schema({

       title:{
              type: String,
              required: true
       },

       description:{
              type: String,
              required: true
       },
       
       author:{
              type: String,
              required: true
       }
})

const noteModel = mongoose.model("note", newSchema)  //It accepts two arguments: 1.First argument: Name of the model. 2.Second argument: Schema associated with that model.

module.exports = noteModel