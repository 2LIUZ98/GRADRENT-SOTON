import express from "express";
import db from "../db.mjs";

const customersRouter = express.Router();


// =====================================
// GET ALL CUSTOMERS
// =====================================
customersRouter.get("/", (req, res) => {

    try {

        const stmt = db.prepare(`
            SELECT *
            FROM CUSTOMERS
            ORDER BY Created_At DESC
        `);

        const customers = stmt.all();

        res.json(customers);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Failed to fetch customers"
        });

    }

});


// =====================================
// GET CUSTOMER BY ID
// =====================================
customersRouter.get("/:id", (req, res) => {

    try {

        const stmt = db.prepare(`
            SELECT *
            FROM CUSTOMERS
            WHERE Customer_ID = ?
        `);

        const customer = stmt.get(req.params.id);


        if (!customer) {

            return res.status(404).json({
                error: "Customer not found"
            });

        }


        res.json(customer);


    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Failed to fetch customer"
        });

    }

});


// =====================================
// CREATE CUSTOMER
// =====================================
customersRouter.post("/", (req, res) => {

    try {

        const {
            Full_Name,
            WeChat_ID,
            Phone,
            Course,
            Graduation_Year
        } = req.body;


        const stmt = db.prepare(`
            INSERT INTO CUSTOMERS
            (
                Full_Name,
                WeChat_ID,
                Phone,
                Course,
                Graduation_Year
            )
            VALUES (?, ?, ?, ?, ?)
        `);


        const result = stmt.run(
            Full_Name,
            WeChat_ID,
            Phone,
            Course,
            Graduation_Year
        );


        res.status(201).json({

            message: "Customer created successfully",

            Customer_ID: result.lastInsertRowid

        });


    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Failed to create customer"
        });

    }

});


// =====================================
// UPDATE CUSTOMER
// =====================================
customersRouter.put("/:id", (req, res) => {

    try {

        const {
            Full_Name,
            WeChat_ID,
            Phone,
            Course,
            Graduation_Year
        } = req.body;


        const stmt = db.prepare(`
            UPDATE CUSTOMERS
            SET
                Full_Name = ?,
                WeChat_ID = ?,
                Phone = ?,
                Course = ?,
                Graduation_Year = ?
            WHERE Customer_ID = ?
        `);


        const result = stmt.run(
            Full_Name,
            WeChat_ID,
            Phone,
            Course,
            Graduation_Year,
            req.params.id
        );


        if (result.changes === 0) {

            return res.status(404).json({
                error: "Customer not found"
            });

        }


        res.json({
            message: "Customer updated successfully"
        });


    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Failed to update customer"
        });

    }

});


// =====================================
// DELETE CUSTOMER
// =====================================
customersRouter.delete("/:id", (req, res) => {

    try {

        const stmt = db.prepare(`
            DELETE FROM CUSTOMERS
            WHERE Customer_ID = ?
        `);


        const result = stmt.run(req.params.id);


        if (result.changes === 0) {

            return res.status(404).json({
                error: "Customer not found"
            });

        }


        res.json({
            message: "Customer deleted successfully"
        });


    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Failed to delete customer"
        });

    }

});


export default customersRouter;