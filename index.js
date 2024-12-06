const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello from the home page!");
});

app.get("/express", (req, res) => {
    res.send("Creating routes with Express is simple!");
});

app.route('/user')
    .get((req, res) => {
        res.send(`Received a GET request for user!
    Try navigating to /user/somevalue/profile/somevalue.`);
    });
  
app.get("/user/:userID", (req, res) => {
    res.send(`Navigated to the user page for: ${req.params.userID}.`);
});
  
app.get("/user/:userID/profile", (req, res) => {
    res.send(`Navigated to the user profile page for: ${req.params.userID}.`);
});
  
app.get("/user/:userID/profile/:data", (req, res) => {
    res.send(`Navigated to the user profile page for: ${req.params.userID}, with the data: ${req.params.data}.`);
});
  

/*
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World!\n");
})

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`)
});
*/