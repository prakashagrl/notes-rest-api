//creating the server       

const express = require('express')
const noteModel = require('./models/note.model.js')

const app = express()
app.use(express.json())

// POST operation
app.post('/notes', async (req, res) => {
       const data = req.body
       await noteModel.create({
              title: data.title,
              description: data.description,
              author: data.author
       })

       res.status(201).json({
              message: "the note has been created"
       })
})

// GET operation
app.get('/notes', async (req, res) => {

       
       const notes = await noteModel.find()

       res.status(200).json({
              message: "notes have been fetched",
              notes: notes
       })
})

// DELETE operation
app.delete('/notes/:id', async (req, res) => {
       const id = req.params.id

       await noteModel.findOneAndDelete({
              _id: id
       })

       res.status(200).json({
              message: "the note has been deleted"
       }) 

})

//PATCH operation
app.patch('/notes/:id', async (req, res) => {
       const id = req.params.id


       const description = req.body.description


       await noteModel.findOneAndUpdate({_id: id},{description: description})

       res.status(200).json({
              message: "note has been updated"
       })
})

module.exports = app