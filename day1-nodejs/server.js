
let http = require("http");

let server = http.createServer((req,res) => {
  console.log("hello i am server")
  res.end("ok maine tumhari baat sun li")
});

server.listen(4000, () => {
  console.log("server start")
})