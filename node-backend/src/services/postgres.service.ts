import { Client } from "pg"

export const pgClient = new Client({
  // create a new connection to the database
 host: "localhost",
 user: "postgres",
 database: "postgres",
 password: "sarukan",
 port: 5432
})

pgClient.on('error', err => console.log(err))

export const initPg = async () => {
  await pgClient.connect()
  await pgClient.query('CREATE TABLE IF NOT EXISTS Bank_db (Id integer Primary Key, Bank varchar(100), Name varchar(100), Sitz varchar(50), Land varchar(50), Verband varchar(50))')
}

export const resetPg = async () => {
  await pgClient.query('DROP TABLE IF EXISTS Bank_db')
  await pgClient.query('CREATE TABLE IF NOT EXISTS Bank_db (Id integer Primary Key, Bank varchar(100), Name varchar(100), Sitz varchar(50), Land varchar(50), Verband varchar(50))')
 

  console.log('Postgres DB flushed')
}
