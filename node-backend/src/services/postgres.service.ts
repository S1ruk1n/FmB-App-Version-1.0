import { randomUUID } from 'crypto';
import { Client } from 'pg';

export const pgClient = new Client({
  host: 'postgres',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: 'postgres'
})

pgClient.on('error', err => console.log(err))

export const initPg = async () => {
  await pgClient.connect()
  await pgClient.query('CREATE TABLE IF NOT EXISTS users (id UUID PRIMARY KEY, name VARCHAR(255))')
}

export const resetPg = async () => {
  await pgClient.query('DROP TABLE IF EXISTS users')
  await pgClient.query('CREATE TABLE users (id UUID PRIMARY KEY, name VARCHAR(255))')
  await pgClient.query('INSERT INTO users (id, name) VALUES ($1, $2)', [randomUUID(), 'Lucas'])
  await pgClient.query('INSERT INTO users (id, name) VALUES ($1, $2)', [randomUUID(), 'Ivan'])
  await pgClient.query('INSERT INTO users (id, name) VALUES ($1, $2)', [randomUUID(), 'Manuel'])
  await pgClient.query('INSERT INTO users (id, name) VALUES ($1, $2)', [randomUUID(), 'Benjamin'])

  console.log('Postgres DB flushed')
}