//Http Server
//"http is the predefined module in node js used to create the HTTP server"
//no need to download http module 
//http module already available along with the node sofetware


//import module (http module)
//require() function used to import the module
let http = require("http");


//create server() is the function in http module, helps to create the http server
let server = http.createServer((req, res)=>{
  res.write("welcome to http server");
  res.end();
});


server.listen(8080);
console.log("server listening the no.8080");


//http://localhost:8080/?uname=ahokit&upwd=ahokit