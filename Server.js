const http = require('http');

const server = http.createServer((request,response)=>{


    if(request.url==="/"){
        response.end("Hello I am Server Running at 4000 Port");
    }
    else if(request.url==="/About"){
        response.end("This is Our About Page");
    }
    else if(request.url==="/Service"){
        response.end("This is Our Service");
    }
    else if(request.url==="/Contact"){
        response.end("This is Our Contact Page");
    }
    else{
        response.end("OOPS\nPage Not Found !!!");
    }

});

server.listen(4000,()=>{
    console.log("http://127.0.0.1.5000");
});