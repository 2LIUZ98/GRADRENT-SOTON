import bcrypt from "bcrypt";
import db from "./db.mjs";


const password = "YourPasswordHere";


const hash = await bcrypt.hash(
    password,
    10
);


db.prepare(`
    INSERT INTO STAFF
    (
        Full_Name,
        Username,
        Password_Hash,
        Role,
        Is_Active
    )

    VALUES (?, ?, ?, ?, 1)

`).run(
    "Main Admin",
    "admin",
    hash,
    "Admin"
);


console.log(
    "Admin created"
);