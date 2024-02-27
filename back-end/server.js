import mysql from 'mysql';
import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
dotenv.config();

const port = 4000;
const app = express();
app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
    host: process.env.host,
    port: parseInt(process.env.port, 10) || 3306,
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

app.post('/contact', function (request, response) {
    const name = request.body.name;
    const email = request.body.email;
    const contactNumber = request.body.contactNumber;
    const zipCode = request.body.zipCode;
    const address = request.body.address;
    const typeOfService = request.body.typeOfService;
    const message = request.body.message;

    const myQuery = `INSERT INTO autoconnect.contact (name, email, contact_number, zip_code, address, type_of_service, message) VALUES ("${name}", "${email}", "${contactNumber}", "${zipCode}", "${address}", "${typeOfService}", "${message}")`;

    connection.query(myQuery, function(err, result) {
        if(err) throw err;

        console.log('Result from db: ', result);
        response.send({success: true})
    })

})


app.post('/login', function(request, response) {
    
})


connection.connect(function(err) {

    if (err) throw err;
    console.log("MySQL DB Connection Established...");
    app.listen(port);
    console.log("App is now running on port:", port)
})
