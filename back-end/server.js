import mysql from "mysql";
import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.port;
const app = express();
app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

app.post('/register', function(request, response) {
    const nameFromFrontend = request.body.name;
    const usernameFromFrontend = request.body.username;
    const emailFromFrontend = request.body.email;
    const passwordFromFrontend = request.body.password;
    


})

connection.connect(function(err) {
    if (err) throw err;
    console.log('MySQL Database Connection Established!');
    app.listen(port);
    console.log(`App is now running on port: ${port}...`)
})
