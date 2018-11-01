import pool from './db';

const createTables = () => {
  pool.query('CREATE TABLE IF NOT EXISTS products(id serial PRIMARY KEY, productname VARCHAR(100), description TEXT, price VARCHAR(30), quantity INTEGER, min INTEGER)');
  pool.query('CREATE TABLE IF NOT EXISTS sales(id serial PRIMARY KEY, productname VARCHAR(100), productId INTEGER, price VARCHAR(30), quantity INTEGER, attendant_id INTEGER, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)');
  pool.query('CREATE TABLE IF NOT EXISTS users(id serial PRIMARY KEY, fullname VARCHAR(100), emailaddress TEXT, password TEXT, type TEXT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)');
};

const dropTables = () => {
  pool.query('DROP TABLE IF EXISTS products, sales, users');
};

export { createTables, dropTables };
require('make-runnable');
