const { Client } = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "sarukan",
    database: "postgres"
})

client.connect();

client.query('Select * from banken_db',(err,  res)=>{
    if(!err){
        console.log(res.rows);
    }else {
        console.log(err.message);
    }
    client.end;

    console.log('Postgress DB flushed')
})
