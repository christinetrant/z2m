// to start our server we need http library
const http = require('http');
// To read the index.html file we need another library:
const fs = require('fs');
// specify what port we will listen to
const port = 3000;

// now we can create a server:
const server = http.createServer((req, res) => {
    // inside is where we handle all different activity on our server

    // we want to send a response to user - this will show on webpage
    // res.write('Hello Node');
    // once we've written everything we want to write, we end the response
    // res.end()
    // We tell the browser we will be writing HTML - a status code of 200 OK and that it will be a html file
    res.writeHead(200, { 'Content-Type': 'text/html'})
    fs.readFile('index.html', (error, data) => {
        if(error) {
            res.writeHead(404)
            res.write('Error: File not found')
        } else {
            res.write(data)
        }
        // once we've written everything we want to write, we end the response
        res.end()
    })   
})

// setup server so that it will listen on the port we want it to, it will do nothing if successful but if there is an error we want to know:
server.listen(port, error => {
    if(error) {
        console.log('Something went wrong', error)
    } else { 
        console.log('Server is listening on port ' +port)
    }
})