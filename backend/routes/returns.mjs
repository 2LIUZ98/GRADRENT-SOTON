import express from "express";
import db from "../db.mjs";

const returnsRouter = express.Router();


// =====================================
// GET ALL RETURNS
// =====================================
returnsRouter.get("/", (req, res) => {

    try {

        const stmt = db.prepare(`

            SELECT

                RETURNS.Return_ID,
                RETURNS.Rental_ID,
                CUSTOMERS.Full_Name,
                RETURNS.Returned_Date,
                RETURNS.Condition,
                RETURNS.Notes,
                RETURNS.Extra_Charge

            FROM RETURNS

            JOIN RENTALS
            ON RETURNS.Rental_ID = RENTALS.Rental_ID

            JOIN CUSTOMERS
            ON RENTALS.Customer_ID = CUSTOMERS.Customer_ID

            ORDER BY RETURNS.Returned_Date DESC

        `);

        const returns = stmt.all();

        res.json(returns);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Failed to fetch returns"
        });

    }

});


// =====================================
// GET RETURN BY ID
// =====================================
returnsRouter.get("/:id", (req, res) => {

    try {

        const stmt = db.prepare(`
            SELECT *
            FROM RETURNS
            WHERE Return_ID = ?
        `);

        const returnRecord = stmt.get(req.params.id);

        if (!returnRecord) {

            return res.status(404).json({
                error: "Return not found"
            });

        }

        res.json(returnRecord);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Failed to fetch return"
        });

    }

});


// =====================================
// CREATE RETURN
// =====================================
returnsRouter.post("/", (req, res) => {

    const {

        Rental_ID,
        Condition,
        Notes,
        Extra_Charge

    } = req.body;

    try {

        const transaction = db.transaction(() => {

            // Create return record
            const result = db.prepare(`

                INSERT INTO RETURNS
                (
                    Rental_ID,
                    Returned_Date,
                    Condition,
                    Notes,
                    Extra_Charge
                )

                VALUES (?, DATE('now'), ?, ?, ?)

            `).run(

                Rental_ID,
                Condition,
                Notes,
                Extra_Charge || 0

            );


            // Update rental status -> Returned
            db.prepare(`

                UPDATE RENTALS

                SET Status_ID = (

                    SELECT Status_ID
                    FROM STATUS
                    WHERE Status_Name = 'Returned'

                )

                WHERE Rental_ID = ?

            `).run(Rental_ID);


            // Update all inventory items -> Available
            db.prepare(`

                UPDATE INVENTORY

                SET Status_ID = (

                    SELECT Status_ID
                    FROM STATUS
                    WHERE Status_Name = 'Available'

                )

                WHERE Item_ID IN (

                    SELECT Item_ID
                    FROM RENTAL_ITEMS
                    WHERE Rental_ID = ?

                )

            `).run(Rental_ID);


            return result.lastInsertRowid;

        });


        const returnID = transaction();


        res.status(201).json({

            message: "Return processed successfully",

            Return_ID: returnID

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Failed to process return"
        });

    }

});


// =====================================
// DELETE RETURN
// =====================================
returnsRouter.delete("/:id", (req, res) => {

    try {

        const result = db.prepare(`

            DELETE FROM RETURNS

            WHERE Return_ID = ?

        `).run(req.params.id);


        if (result.changes === 0) {

            return res.status(404).json({

                error: "Return not found"

            });

        }


        res.json({

            message: "Return deleted successfully"

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            error: "Failed to delete return"

        });

    }

});


export default returnsRouter;