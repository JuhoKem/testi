// luo package.json --> npm init, luo "index".js, npm install --save mysql express, asenna nodemon: npm nodemon (monitoring), kirjoita nodemon ja alla oleva koodi
// tietokanta luotu MySql WorkBenchissa

const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require('body-parser');

// create connection
const db = mysql.createConnection({
   host    :"localhost",
   user    :"root",
   password:"qwerty1234",
   database:"db" // try to remove below GET createdb, and GET and POST with out it

   // throw an authentication protocol error - just run in MySql to fix it: ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
   // where password is your password 
});


app.use(bodyParser.json());   
app.use(bodyParser.urlencoded({ 
     extended: true
 }));

// connect
db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log("MySql connected");
});

const index = express();

// Create database
index.get("/createdb", (req, res) => {
    let sql = "CREATE DATABASE db";
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });

});

// Create table
index.get("/registration", (req, res) => {
   let sql = "CREATE TABLE registration(id int not null PRIMARY KEY, first varchar(50) , last varchar(50), age int)";
   db.query(sql, (err, result) => {
       if(err) throw err;
       console.log(result);
       res.send('Registration table created...');
   });

});


// Get all data
index.get("/users", (req, res) => {
   let sql = "SELECT * FROM registration";

   db.query(sql, (err, result) => {
       if(err) throw err;
       console.log(result);    // [ RowDataPacket { id: 1, first: 'Aku', last: 'Ankka', age: 45 } ]
       res.send({ message: 'All data is below.', data: result });
   });

});

// Get data by id:
index.get("/user/:id?", (req, res) => {
    let sql = `SELECT  * FROM registration WHERE id = ${req.params.id}`; // kun käytät ${req.params.id} - muista käyttää erikoishipsuja
 
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);    
        res.send(result);
    });
 
 });

// Add user
index.post("/add", (req, res) => {
    let sql = "INSERT INTO registration(id,first, last, age) VALUES(2,'Disnet','Ankka',22)";
    db.query(sql, (err, result) => {
        if (err) throw err;
        return res.send("New user has been created successfully!");
    });
});

 
// Update id=1 to id=2 of Aku Ankka
index.put("/update/:id", (req, res) => {
   let newId = "6";
   let id = `${req.params.id}`;
   let sql = `UPDATE registration SET id = ${newId} WHERE id = ${req.params.id} `;
   db.query(sql, (err, result) => {
       if(err) throw err;
       console.log(result);    // 
       res.send('id:' + id + ' record has been updated');
   });

});

// Delete by id:
index.delete("/delete/:id", (req, res) => {
    let id = `${req.params.id}`;
   let sql = `DELETE FROM registration WHERE id = ${req.params.id} `;
   db.query(sql, (err, result) => {
       if(err) throw err;
       console.log(result);    // 
       res.send('id:' + id + ' record has been removed');
   });

});


// default route
index.get('/', function (req, res) {
    return res.send({ error: true, message: 'Hello' })
});


// listener port
index.listen("3000", () => {
    console.log("Server started on port 3000");
});

module.exports = app;