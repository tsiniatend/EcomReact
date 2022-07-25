const express = require ("express");
const cors = require ("cors");
const app = express();
const port = process.env.PORT || 8080; 

app.use(cors());
app.listen(port, () => 
console.log(`listening on ${port}`)
) 
// const connection = mysql.createConnection({
//     host: process.env.DB_host,
//     user: process.env.DB_user,
//     port:  process.env.DB_port,
//     password: process.env.DB_password,
//     database: process.env.DB_database 
// });
app.get("/",(req, res) => {
 res.send("Hey Genius")
})
