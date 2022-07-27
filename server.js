const express = require ("express");
const cors = require ("cors");
const app = express();
const mysql = require("mysql");
const port = process.env.PORT || 8080; 

app.use(cors());
app.listen(port, () => 
console.log(`listening on ${port}`)
) 
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port:  process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE 
});
app.get("/",(req, res) => {
 connection.query('SELECT * FROM products', (err, rows, fields) => {
    if (err) throw err;
    res.send(rows);
});
})

app.post("/contact", (req, res) => {
    connection.query("INSERT INTO contacts (name, email, summary, number) VALUES (?, ?, ?, ?);", [req.body.name,req.body.email,req.body.message, req.body.phone], (err, rows, fields) => {
        console.log(req.body);
        if (err) throw err;
        res.redirect('back');
    })
})
app.get("/contact", (req, res) => {
    connection.query('SELECT * FROM contacts', (err, rows, fields) => {
        if (err) throw err;
        res.send(rows);
    });
})