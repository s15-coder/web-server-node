const http = require('http')
const server = http.createServer((req,res)=>{
    res.write('Fuck u bitch')
    res.end()
})

server.listen(8080)
console.log('Listening 8080 PORT');