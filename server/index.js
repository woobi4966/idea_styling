const express = require('express');
const app = express();

const mysql = require('mysql');

const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    passord : '1234',
    database: '????'  // db 이름 넣으세요
});

app.listen(3001, () => {
    console.log('sever is running on port 3001');
});


// Create -> post, Read -> get, Update -> put, Delete -> delete
app.post('/create', (req, res) => {
    const id = req.body.id;
    const pw = req.body.pw;
    const name = req.body.name;

    db.query('insert into user_info' + ' values (?, ?, ?)',
    [id, pw, name],
    (err, result) => {
        if(err)
            console.log(err);
        else
            res.send("A new User Created")
    })
})