//writing a server for web pages in node js 
//this is basically a request, or requisicao
//more info are in the theory.md file
const http = require('http');
const fs = require('fs'); //has the file handling to call the file index.html

const port = 3000; //the port we are gonna be listening to 

//everytime someone requests a page on the server, its gonna call the function inside the createServer parameters
const server = http.createServer(function(request, response) {
    //returning some response to the user 
    //response.write('Hello World'); //shows hello world on the webpage of port 3000 when server is running on terminal
    //response.end();

    //actually rendering some html and telling the browser that we are wrting it
    response.writeHead(200, { 'Content-Type': 'text/html' }); //shows status code, and 200 means that it ran fine
    fs.readFile('index.html', function(error, data) {
        if (error) {
            response.writeHead(404); //404 is page not found 
            response.write('Error: Page not found');
        }
        else {
            response.write(data); //in case there was no error, jst writing the data from the file
        }
        response.end();
    }); //name of the file we wanna read, and a function with an error property
})


//set up the server for it to listen on the port that we want
//as soon as the server starts listenin it will callthe function and pass an error or nothing if it was successfull
server.listen(port, function(error) {//will call this function if there's an wrror
    if (error) {
        console.error("An error occurred", error);
    }
    else {
        console.log('Server listening on port ' + port);
    }
})
