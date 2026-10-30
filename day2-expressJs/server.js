// const http = require("http");

// let server = http.createServer((req, res) => {
//   if (req.url === "/users") {
//     res.end("mai users me hu");
//   }

//   if (req.url === "/home") {
//     res.end("mai home me hu");
//   }

//   if (req.url === "/about") {
//     res.end("mai about me hu");
//   }
// });

// server.listen(3000, () => {
//   console.log("port start");
// });

const express = require("express");
const app = express();

// middleware for accepting data from frontend
app.use(express.json());

app.get("/",(req,res) => {
  
  res.end("ok got it")
})

app.post("/create",(req,res)=> {
  console.log(req.body)
  res.end("ok get data from frontend")
})
app.listen(3000, () => {
  console.log("server is at port 3000")
})