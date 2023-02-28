const http = require('http')
const PORT = (5000)
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    else if(req.url === '/about'){
        res.end('about us')
    }
    else {
        res.end(`
    <h1>Ohps!!!</h1>
    <p> we can not find the page you are looking for </p>
    <a href="/"</a>
    `)
    }
})

server.listen(PORT,()=> {
    console.log(`server is listening on ${PORT}`)
})