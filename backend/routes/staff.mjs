import express from "express";
import bcrypt from "bcrypt";
import db from "../db.mjs";

const staffRouter = express.Router();

const SALT_ROUNDS = 10;


// =====================================
// STAFF LOGIN
// =====================================
staffRouter.post("/login", async (req, res) => {

    try {

        const { Username, Password } = req.body;

        const stmt = db.prepare(`
            SELECT *
            FROM STAFF
            WHERE Username = ?
            AND Is_Active = 1
        `);

        const staff = stmt.get(Username);

        if (!staff) {

            return res.status(401).json({
                error: "Invalid username or password"
            });

        }

        const validPassword = await bcrypt.compare(
            Password,
            staff.Password_Hash
        );

        if (!validPassword) {

            return res.status(401).json({
                error: "Invalid username or password"
            });

        }

        db.prepare(`
            UPDATE STAFF
            SET Last_Login = CURRENT_TIMESTAMP
            WHERE Staff_ID = ?
        `).run(staff.Staff_ID);

        res.json({
            message: "Login successful",
            Staff_ID: staff.Staff_ID,
            Full_Name: staff.Full_Name,
            Username: staff.Username,
            Role: staff.Role
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Login failed"
        });

    }

});


// =====================================
// GET ALL STAFF
// =====================================
staffRouter.get("/", (req, res) => {

    try {

        const staff = db.prepare(`
            SELECT
                Staff_ID,
                Full_Name,
                Username,
                Role,
                WeChat_ID,
                Phone,
                Is_Active,
                Last_Login,
                Created_At
            FROM STAFF
            ORDER BY Full_Name
        `).all();

        res.json(staff);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Failed to fetch staff"
        });

    }

});


// =====================================
// GET STAFF BY ID
// =====================================
staffRouter.get("/:id", (req, res) => {

    try {

        const staff = db.prepare(`
            SELECT
                Staff_ID,
                Full_Name,
                Username,
                Role,
                WeChat_ID,
                Phone,
                Is_Active,
                Last_Login,
                Created_At
            FROM STAFF
            WHERE Staff_ID = ?
        `).get(req.params.id);

        if (!staff) {

            return res.status(404).json({
                error: "Staff not found"
            });

        }

        res.json(staff);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Failed to fetch staff"
        });

    }

});


// =====================================
// CREATE STAFF
// =====================================
staffRouter.post("/", async (req, res) => {

    try {

        const {
            Full_Name,
            Username,
            Password,
            Role,
            WeChat_ID,
            Phone
        } = req.body;

        const exists = db.prepare(`
            SELECT Staff_ID
            FROM STAFF
            WHERE Username = ?
        `).get(Username);

        if (exists) {

            return res.status(409).json({
                error: "Username already exists"
            });

        }

        const hash = await bcrypt.hash(
            Password,
            SALT_ROUNDS
        );

        const result = db.prepare(`
            INSERT INTO STAFF
            (
                Full_Name,
                Username,
                Password_Hash,
                Role,
                WeChat_ID,
                Phone
            )
            VALUES (?, ?, ?, ?, ?, ?)
        `).run(
            Full_Name,
            Username,
            hash,
            Role || "Staff",
            WeChat_ID,
            Phone
        );

        res.status(201).json({
            message: "Staff created successfully",
            Staff_ID: result.lastInsertRowid
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Failed to create staff"
        });

    }

});


// =====================================
// UPDATE STAFF
// =====================================
staffRouter.put("/:id", (req, res) => {

    try {

        const {
            Full_Name,
            Username,
            Role,
            WeChat_ID,
            Phone
        } = req.body;

        const result = db.prepare(`
            UPDATE STAFF

            SET

                Full_Name = ?,

                Username = ?,

                Role = ?,

                WeChat_ID = ?,

                Phone = ?

            WHERE Staff_ID = ?
        `).run(
            Full_Name,
            Username,
            Role,
            WeChat_ID,
            Phone,
            req.params.id
        );

        if (result.changes === 0) {

            return res.status(404).json({
                error: "Staff not found"
            });

        }

        res.json({
            message: "Staff updated successfully"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Failed to update staff"
        });

    }

});


// =====================================
// CHANGE PASSWORD
// =====================================
staffRouter.put("/:id/password", async (req, res) => {

    try {

        const { Password } = req.body;

        const hash = await bcrypt.hash(
            Password,
            SALT_ROUNDS
        );

        const result = db.prepare(`
            UPDATE STAFF

            SET Password_Hash = ?

            WHERE Staff_ID = ?
        `).run(
            hash,
            req.params.id
        );

        if (result.changes === 0) {

            return res.status(404).json({
                error: "Staff not found"
            });

        }

        res.json({
            message: "Password updated successfully"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Failed to change password"
        });

    }

});


// =====================================
// ACTIVATE / DEACTIVATE STAFF
// =====================================
staffRouter.put("/:id/active", (req, res) => {

    try {

        const { Is_Active } = req.body;

        const result = db.prepare(`
            UPDATE STAFF

            SET Is_Active = ?

            WHERE Staff_ID = ?
        `).run(
            Is_Active,
            req.params.id
        );

        if (result.changes === 0) {

            return res.status(404).json({
                error: "Staff not found"
            });

        }

        res.json({
            message: "Staff status updated"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Failed to update staff status"
        });

    }

});


// =====================================
// DELETE STAFF
// =====================================
staffRouter.delete("/:id", (req, res) => {

    try {

        const result = db.prepare(`
            DELETE FROM STAFF
            WHERE Staff_ID = ?
        `).run(req.params.id);

        if (result.changes === 0) {

            return res.status(404).json({
                error: "Staff not found"
            });

        }

        res.json({
            message: "Staff deleted successfully"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Failed to delete staff"
        });

    }

});


export default staffRouter;