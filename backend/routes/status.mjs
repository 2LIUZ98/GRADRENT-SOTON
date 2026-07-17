import express from "express";
import db from "./db.mjs";

const statusRouter = express.Router();


// =====================================
// GET ALL STATUSES
// =====================================
statusRouter.get("/", (req, res) => {

    try {

        const stmt = db.prepare(`
            SELECT *
            FROM STATUS
            ORDER BY Status_ID
        `);


        const statuses = stmt.all();


        res.json(statuses);


    } catch (error) {

        console.error(error);


        res.status(500).json({
            error: "Failed to fetch statuses"
        });

    }

});



// =====================================
// GET RENTAL STATUSES
// =====================================
statusRouter.get("/rental", (req, res) => {

    try {

        const stmt = db.prepare(`
            SELECT *
            FROM STATUS
            WHERE Status_Type = 'Rental'
            ORDER BY Status_ID
        `);


        const statuses = stmt.all();


        res.json(statuses);


    } catch (error) {

        console.error(error);


        res.status(500).json({
            error: "Failed to fetch rental statuses"
        });

    }

});



// =====================================
// GET INVENTORY STATUSES
// =====================================
statusRouter.get("/inventory", (req, res) => {

    try {

        const stmt = db.prepare(`
            SELECT *
            FROM STATUS
            WHERE Status_Type = 'Inventory'
            ORDER BY Status_ID
        `);


        const statuses = stmt.all();


        res.json(statuses);


    } catch (error) {

        console.error(error);


        res.status(500).json({
            error: "Failed to fetch inventory statuses"
        });

    }

});



// =====================================
// GET STATUS BY ID
// =====================================
statusRouter.get("/:id", (req, res) => {

    try {

        const stmt = db.prepare(`
            SELECT *
            FROM STATUS
            WHERE Status_ID = ?
        `);


        const status = stmt.get(
            req.params.id
        );


        if (!status) {

            return res.status(404).json({
                error: "Status not found"
            });

        }


        res.json(status);


    } catch (error) {

        console.error(error);


        res.status(500).json({
            error: "Failed to fetch status"
        });

    }

});



// =====================================
// CREATE STATUS
// =====================================
statusRouter.post("/", (req, res) => {

    try {

        const {

            Status_Name,
            Description,
            Status_Type

        } = req.body;



        const stmt = db.prepare(`
            INSERT INTO STATUS
            (
                Status_Name,
                Description,
                Status_Type
            )

            VALUES (?, ?, ?)
        `);



        const result = stmt.run(

            Status_Name,
            Description,
            Status_Type

        );



        res.status(201).json({

            message: "Status created successfully",

            Status_ID: result.lastInsertRowid

        });



    } catch (error) {


        console.error(error);


        res.status(500).json({

            error: "Failed to create status"

        });


    }

});



// =====================================
// UPDATE STATUS
// =====================================
statusRouter.put("/:id", (req, res) => {

    try {

        const {

            Status_Name,
            Description,
            Status_Type

        } = req.body;



        const stmt = db.prepare(`
            UPDATE STATUS

            SET

                Status_Name = ?,

                Description = ?,

                Status_Type = ?

            WHERE Status_ID = ?
        `);



        const result = stmt.run(

            Status_Name,
            Description,
            Status_Type,
            req.params.id

        );



        if (result.changes === 0) {

            return res.status(404).json({

                error: "Status not found"

            });

        }



        res.json({

            message: "Status updated successfully"

        });



    } catch(error) {


        console.error(error);


        res.status(500).json({

            error: "Failed to update status"

        });


    }

});



// =====================================
// DELETE STATUS
// =====================================
statusRouter.delete("/:id", (req, res) => {

    try {


        const result = db.prepare(`
            DELETE FROM STATUS
            WHERE Status_ID = ?
        `).run(req.params.id);



        if(result.changes === 0){

            return res.status(404).json({

                error:"Status not found"

            });

        }



        res.json({

            message:"Status deleted successfully"

        });



    } catch(error) {


        console.error(error);


        res.status(500).json({

            error:"Failed to delete status"

        });


    }

});


export default statusRouter;