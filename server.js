const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000


app.use(express.static('./client/public'))


app.get('/api', (req, res) => {
    res.sendFile(path.resolve('./api/directory.json'))
  });


  app.get('/bars/:id', (req, res) => {
    res.sendFile(path.resolve('./api/' + req.params.id + ".json"))
  } )



// app.get('*', (req,res)) => 
// res.sendFile(path.resolve(.'/client/public/index.html'))



app.listen(PORT, () => {
    console.log(`on port: ${PORT}`)
})