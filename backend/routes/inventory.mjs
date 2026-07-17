import express from "express";
import db from "../db.mjs";

const inventoryRouter = express.Router();


// =====================================
// GET ALL INVENTORY
// =====================================
inventoryRouter.get("/", (req, res) => {

    try {

        const stmt = db.prepare(`
            SELECT 
                INVENTORY.Item_ID,
                PRODUCT_TYPES.Product_Name,
                PRODUCT_TYPES.Category,
                INVENTORY.Brand_Type,
                INVENTORY.Size,
                STATUS.Status_Name

            FROM INVENTORY

            JOIN PRODUCT_TYPES
            ON INVENTORY.Product_Type_ID = PRODUCT_TYPES.Product_Type_ID

            JOIN STATUS
            ON INVENTORY.Status_ID = STATUS.Status_ID

            ORDER BY INVENTORY.Item_ID
        `);


        const inventory = stmt.all();


        res.json(inventory);


    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Failed to fetch inventory"
        });

    }

});



// =====================================
// GET AVAILABLE INVENTORY
// =====================================
inventoryRouter.get("/available", (req, res) => {

    try {


        const stmt = db.prepare(`
            SELECT 
                INVENTORY.Item_ID,
                PRODUCT_TYPES.Product_Name,
                PRODUCT_TYPES.Category,
                INVENTORY.Brand_Type,
                INVENTORY.Size

            FROM INVENTORY

            JOIN PRODUCT_TYPES
            ON INVENTORY.Product_Type_ID = PRODUCT_TYPES.Product_Type_ID

            JOIN STATUS
            ON INVENTORY.Status_ID = STATUS.Status_ID

            WHERE STATUS.Status_Name = 'Available'

        `);


        const items = stmt.all();


        res.json(items);



    } catch(error) {

        console.error(error);

        res.status(500).json({
            error:"Failed to fetch available inventory"
        });

    }

});



// =====================================
// GET INVENTORY BY CATEGORY
// Example:
// /api/inventory/category/Gown
// /api/inventory/category/Hood
// /api/inventory/category/Hat
// =====================================
inventoryRouter.get("/category/:category", (req,res)=>{


    try {


        const stmt = db.prepare(`

            SELECT

                INVENTORY.Item_ID,
                PRODUCT_TYPES.Product_Name,
                PRODUCT_TYPES.Category,
                INVENTORY.Brand_Type,
                INVENTORY.Size,
                STATUS.Status_Name


            FROM INVENTORY


            JOIN PRODUCT_TYPES

            ON INVENTORY.Product_Type_ID =
               PRODUCT_TYPES.Product_Type_ID


            JOIN STATUS

            ON INVENTORY.Status_ID =
               STATUS.Status_ID


            WHERE PRODUCT_TYPES.Category = ?

        `);



        const result = stmt.all(
            req.params.category
        );


        res.json(result);



    } catch(error) {


        console.error(error);


        res.status(500).json({

            error:"Failed to filter inventory"

        });


    }


});




// =====================================
// GET SINGLE ITEM
// =====================================
inventoryRouter.get("/:id",(req,res)=>{


    try {


        const stmt = db.prepare(`

            SELECT

                INVENTORY.Item_ID,
                PRODUCT_TYPES.Product_Name,
                PRODUCT_TYPES.Category,
                INVENTORY.Brand_Type,
                INVENTORY.Size,
                STATUS.Status_Name


            FROM INVENTORY


            JOIN PRODUCT_TYPES

            ON INVENTORY.Product_Type_ID =
               PRODUCT_TYPES.Product_Type_ID


            JOIN STATUS

            ON INVENTORY.Status_ID =
               STATUS.Status_ID


            WHERE INVENTORY.Item_ID = ?

        `);



        const item = stmt.get(
            req.params.id
        );



        if(!item){

            return res.status(404).json({
                error:"Item not found"
            });

        }



        res.json(item);



    }catch(error){


        console.error(error);


        res.status(500).json({
            error:"Failed to fetch item"
        });


    }


});




// =====================================
// CREATE INVENTORY ITEM
// =====================================
inventoryRouter.post("/",(req,res)=>{


    try {


        const {

            Product_Type_ID,
            Brand_Type,
            Size,
            Status_ID

        } = req.body;



        const stmt = db.prepare(`

            INSERT INTO INVENTORY

            (
                Product_Type_ID,
                Brand_Type,
                Size,
                Status_ID
            )

            VALUES (?,?,?,?)

        `);



        const result = stmt.run(

            Product_Type_ID,
            Brand_Type,
            Size,
            Status_ID

        );



        res.status(201).json({

            message:"Inventory item created",

            Item_ID:result.lastInsertRowid

        });



    }catch(error){


        console.error(error);


        res.status(500).json({

            error:"Failed to create inventory item"

        });


    }


});




// =====================================
// UPDATE INVENTORY STATUS
// Available -> Rented
// Rented -> Available
// =====================================
inventoryRouter.put("/:id/status",(req,res)=>{


    try {


        const {
            Status_ID
        } = req.body;



        const stmt = db.prepare(`

            UPDATE INVENTORY

            SET Status_ID = ?

            WHERE Item_ID = ?

        `);



        const result = stmt.run(

            Status_ID,

            req.params.id

        );



        if(result.changes===0){


            return res.status(404).json({

                error:"Inventory item not found"

            });


        }



        res.json({

            message:"Inventory status updated"

        });



    }catch(error){


        console.error(error);


        res.status(500).json({

            error:"Failed to update status"

        });


    }


});




// =====================================
// DELETE INVENTORY ITEM
// =====================================
inventoryRouter.delete("/:id",(req,res)=>{


    try {


        const stmt = db.prepare(`

            DELETE FROM INVENTORY

            WHERE Item_ID = ?

        `);



        const result = stmt.run(
            req.params.id
        );



        if(result.changes===0){


            return res.status(404).json({

                error:"Item not found"

            });


        }



        res.json({

            message:"Inventory item deleted"

        });



    }catch(error){


        console.error(error);


        res.status(500).json({

            error:"Failed to delete item"

        });


    }


});



export default inventoryRouter;