import Database from "better-sqlite3";
import path from "path";
import fs from "fs";



// =====================================
// DATABASE LOCATION
// =====================================

const dbFolder = path.join(
    process.cwd()
);


const dbPath = path.join(
    dbFolder,
    "GRADRENT.db"
);



console.log(
    "===================================="
);

console.log(
    "DATABASE PATH:",
    dbPath
);

console.log(
    "===================================="
);





// =====================================
// CREATE DATABASE IF NOT EXISTS
// =====================================

if (!fs.existsSync(dbPath)) {

    console.log(
        "Creating new GRADRENT database..."
    );

}






// =====================================
// OPEN DATABASE
// =====================================

const db = new Database(
    dbPath
);




db.pragma(
    "journal_mode = WAL"
);





// =====================================
// CREATE TABLES
// =====================================


// STAFF

db.exec(`

CREATE TABLE IF NOT EXISTS STAFF (

    Staff_ID INTEGER PRIMARY KEY AUTOINCREMENT,

    Full_Name TEXT NOT NULL,

    Username TEXT UNIQUE NOT NULL,

    Password_Hash TEXT NOT NULL,

    Role TEXT DEFAULT 'Staff',

    WeChat_ID TEXT,

    Phone TEXT,

    Is_Active INTEGER DEFAULT 1,

    Last_Login DATETIME,

    Created_At DATETIME DEFAULT CURRENT_TIMESTAMP

);

`);





// CUSTOMERS

db.exec(`

CREATE TABLE IF NOT EXISTS CUSTOMERS (

    Customer_ID INTEGER PRIMARY KEY AUTOINCREMENT,

    Full_Name TEXT NOT NULL,

    Phone TEXT,

    Email TEXT,

    WeChat_ID TEXT,

    Created_At DATETIME DEFAULT CURRENT_TIMESTAMP

);

`);







// PRODUCT TYPES

db.exec(`

CREATE TABLE IF NOT EXISTS PRODUCT_TYPES (

    Product_Type_ID INTEGER PRIMARY KEY AUTOINCREMENT,

    Name TEXT NOT NULL

);

`);








// INVENTORY

db.exec(`

CREATE TABLE IF NOT EXISTS INVENTORY (

    Inventory_ID INTEGER PRIMARY KEY AUTOINCREMENT,

    Product_Type_ID INTEGER,

    Size TEXT,

    Quantity INTEGER DEFAULT 0,

    Available INTEGER DEFAULT 0

);

`);







// RENTALS

db.exec(`

CREATE TABLE IF NOT EXISTS RENTALS (

    Rental_ID INTEGER PRIMARY KEY AUTOINCREMENT,

    Customer_ID INTEGER,

    Rental_Date TEXT,

    Return_Date TEXT,

    Status_ID INTEGER,

    Created_At DATETIME DEFAULT CURRENT_TIMESTAMP

);

`);






// RENTAL ITEMS

db.exec(`

CREATE TABLE IF NOT EXISTS RENTAL_ITEMS (

    Rental_Item_ID INTEGER PRIMARY KEY AUTOINCREMENT,

    Rental_ID INTEGER,

    Inventory_ID INTEGER,

    Quantity INTEGER

);

`);








// PAYMENTS

db.exec(`

CREATE TABLE IF NOT EXISTS PAYMENTS (

    Payment_ID INTEGER PRIMARY KEY AUTOINCREMENT,

    Rental_ID INTEGER,

    Amount REAL,

    Payment_Status TEXT,

    Paid_Date DATETIME

);

`);








// RETURNS

db.exec(`

CREATE TABLE IF NOT EXISTS RETURNS (

    Return_ID INTEGER PRIMARY KEY AUTOINCREMENT,

    Rental_ID INTEGER,

    Return_Date DATETIME DEFAULT CURRENT_TIMESTAMP,

    Condition TEXT

);

`);








// STATUS

db.exec(`

CREATE TABLE IF NOT EXISTS STATUS (

    Status_ID INTEGER PRIMARY KEY AUTOINCREMENT,

    Name TEXT NOT NULL

);

`);








// =====================================
// DEBUG TABLE LIST
// =====================================


console.log(

    "DATABASE TABLES:",

    db.prepare(`

        SELECT name

        FROM sqlite_master

        WHERE type='table'

        ORDER BY name

    `).all()

);






export default db;