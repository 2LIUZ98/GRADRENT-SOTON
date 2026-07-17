import express from "express";
import db from "./db.mjs";

const productsRouter = express.Router();


// =====================================
// GET ALL PRODUCT TYPES
// =====================================
productsRouter.get("/", (req, res) => {

    try {

        const stmt = db.prepare(`
            SELECT *
            FROM PRODUCT_TYPES
            ORDER BY Product_Type_ID
        `);


        const products = stmt.all();


        res.json(products);


    } catch (error) {

        console.error(error);


        res.status(500).json({
            error: "Failed to fetch products"
        });

    }

});



// =====================================
// GET PRODUCT BY ID
// =====================================
productsRouter.get("/:id", (req, res) => {

    try {

        const stmt = db.prepare(`
            SELECT *
            FROM PRODUCT_TYPES
            WHERE Product_Type_ID = ?
        `);


        const product = stmt.get(
            req.params.id
        );


        if (!product) {

            return res.status(404).json({
                error: "Product not found"
            });

        }


        res.json(product);


    } catch (error) {

        console.error(error);


        res.status(500).json({
            error: "Failed to fetch product"
        });

    }

});



// =====================================
// GET PRODUCTS BY CATEGORY
// Example:
// /api/products/category/Gown
// /api/products/category/Hood
// /api/products/category/Hat
// =====================================
productsRouter.get("/category/:category", (req, res) => {

    try {


        const stmt = db.prepare(`
            SELECT *
            FROM PRODUCT_TYPES
            WHERE Category = ?
        `);



        const products = stmt.all(
            req.params.category
        );


        res.json(products);



    } catch (error) {


        console.error(error);


        res.status(500).json({
            error: "Failed to filter products"
        });


    }

});



// =====================================
// CREATE PRODUCT TYPE
// =====================================
productsRouter.post("/", (req, res) => {

    try {


        const {
            Product_Name,
            Category
        } = req.body;



        const stmt = db.prepare(`
            INSERT INTO PRODUCT_TYPES
            (
                Product_Name,
                Category
            )

            VALUES (?, ?)
        `);



        const result = stmt.run(
            Product_Name,
            Category
        );



        res.status(201).json({

            message: "Product created successfully",

            Product_Type_ID: result.lastInsertRowid

        });



    } catch (error) {


        console.error(error);


        res.status(500).json({
            error: "Failed to create product"
        });


    }

});



// =====================================
// UPDATE PRODUCT TYPE
// =====================================
productsRouter.put("/:id", (req, res) => {

    try {


        const {
            Product_Name,
            Category
        } = req.body;



        const stmt = db.prepare(`
            UPDATE PRODUCT_TYPES

            SET
                Product_Name = ?,
                Category = ?

            WHERE Product_Type_ID = ?
        `);



        const result = stmt.run(

            Product_Name,

            Category,

            req.params.id

        );



        if (result.changes === 0) {


            return res.status(404).json({

                error:"Product not found"

            });


        }



        res.json({

            message:"Product updated successfully"

        });



    } catch(error) {


        console.error(error);



        res.status(500).json({

            error:"Failed to update product"

        });


    }

});



// =====================================
// DELETE PRODUCT TYPE
// =====================================
productsRouter.delete("/:id", (req, res) => {

    try {


        const stmt = db.prepare(`
            DELETE FROM PRODUCT_TYPES

            WHERE Product_Type_ID = ?
        `);



        const result = stmt.run(
            req.params.id
        );



        if(result.changes === 0){


            return res.status(404).json({

                error:"Product not found"

            });


        }



        res.json({

            message:"Product deleted successfully"

        });



    } catch(error){


        console.error(error);


        res.status(500).json({

            error:"Failed to delete product"

        });


    }

});



export default productsRouter;