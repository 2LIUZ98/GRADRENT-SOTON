import Database from "better-sqlite3";
import path from "path";

const dbPath = path.join(
    process.cwd(),
    "GRADRENT.db"
);

console.log("DB PATH:", dbPath);

const db = new Database(dbPath);


console.log(
    "TABLES:",
    db.prepare(`
        SELECT name 
        FROM sqlite_master 
        WHERE type='table'
    `).all()
);


export default db;