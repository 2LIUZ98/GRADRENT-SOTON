import Database from "better-sqlite3";
import path from "path";

// Initialises SQLite database connection using better-sqlite3
// and loads the local database file from the project directory

const db = new Database(path.join(process.cwd(), "GRADRENT.db"));
console.log("DB PATH WORKING");

export default db;