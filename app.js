require('dotenv').config()
const express = require('express')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static('public'))

app.get('/',  (req, res) =>{
    res.render( 'home', {
        title: 'Learning Node',
        name: 'Esteban',
    })
  })

  app.get('/generic',  (req, res) =>{
    res.render( 'generic', {
        title: 'Learning Node',
        name: 'Esteban',
    })
  })
  app.get('/elements',  (req, res) =>{
    res.render( 'elements', {
        title: 'Learning Node',
        name: 'Esteban',
    })
  })

app.get('*',(req,res)=>{
    res.sendFile(__dirname +'/public/404-not-found.html')
})
  
app.listen(8080, ()=>{
    console.log(`Running at port: ${port}`);
})