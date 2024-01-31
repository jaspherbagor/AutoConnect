//login api, this is to use the request payload/body
//check if the payload username nad password match a data from the database
app.post('/login', function (request, response) {
    //request is the data from the frontend
    //response is the function or data from the server or backend
    const usernameFromFrontEnd = request.body.username;
    const passwordFromFrontEnd = request.body.password;

    console.log('usernameFromFrontEnd: ', usernameFromFrontEnd);
    console.log('passwordFromFrontEnd: ', passwordFromFrontEnd);


    //mysql query to fetch the username and password from the database using the payload from
    //the front end.
    const myQuery = `SELECT * FROM first_database.users
    where username = "${usernameFromFrontEnd}" and password = "${passwordFromFrontEnd}"`;
    //in short select user from database where username = payload.username and password = payload.password
  

    //mysql package function that we will call to establish or create connection to our database
    //create connection to our mysql database
    const connection = mysql.createConnection({
        host: "localhost", // ip or hostname
        port: 3306,        // port if not using default port which is 3306
        user: "patrick",      //database username 
        password: "password123",      //database password
        database: "first_database" // our database name
      });
      
      //once a connection is created, connect.
      connection.connect(function(err) {
        if (err) throw err; // nagka error, mag crash yung server
        //once successfully connected to the database, run our query
        connection.query(myQuery, function (err, result) {
          if (err) throw err; //pagnagka error, mag crash
          //check result from our query to the database
          console.log("id result from database: ", result[0].id);
        });
      });
    
    response.send({"success": true})
})
app.listen(3000)
