import mysql from "mysql";
import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
dotenv.config();

const port = parseInt(process.env.port);
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

    const checkUsername = `SELECT * FROM autoconnect.users_registration where username = "${usernameFromFrontend}"`;

    connection.query(checkUsername, function(err, result) {
        if(err) throw err;

        if(result.length > 0) {
            response.send({"success": false, "error": "Username is already taken!"});
        } else {
            bcrypt.hash(passwordFromFrontend, 10, function(err, result) {
                if (err) throw err;

                const saltRounds = 10;
                const salt = bcrypt.genSaltSync(saltRounds);
                const hash = bcrypt.hashSync(passwordFromFrontend, salt);

                const myQuery = `INSERT INTO autoconnect.users_registration (name, username, email, password) VALUES ("${nameFromFrontend}", "${usernameFromFrontend}", "${emailFromFrontend}", "${hash}")`;

                console.log('hash:', hash);

                const passwordCheck = bcrypt.compareSync(passwordFromFrontend, hash);
                console.log('passwordCheck: ', passwordCheck);

                connection.query(myQuery, function(err, result) {
                    if(err) throw err;
                    console.log('ID result from database: ', result);
                    response.send({success: true})
                })

            })
        }
    })

})

connection.connect(function (err) {
    if (err) {
        console.log('Error connecting MYSQL')
    };
    console.log('MySQL Database Connection Established!');
    app.listen(port);
    console.log(`App is now running on port: ${port}...`)
})
