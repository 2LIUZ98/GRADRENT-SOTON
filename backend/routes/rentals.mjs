import express from "express";
import db from "./db.mjs";

const rentalsRouter = express.Router();


// =====================================
// GET ALL RENTALS
// =====================================
rentalsRouter.get("/", (req, res) => {

    try {

        const stmt = db.prepare(`
            SELECT

                RENTALS.Rental_ID,

                CUSTOMERS.Full_Name,

                CUSTOMERS.WeChat_ID,

                STATUS.Status_Name,

                RENTALS.Graduation_Date,

                RENTALS.Pickup_Date,

                RENTALS.Return_Date,

                RENTALS.Rental_Fee,

                RENTALS.Deposit,

                RENTALS.Created_At


            FROM RENTALS


            JOIN CUSTOMERS

            ON RENTALS.Customer_ID =
               CUSTOMERS.Customer_ID


            JOIN STATUS

            ON RENTALS.Status_ID =
               STATUS.Status_ID


            ORDER BY RENTALS.Created_At DESC
        `);


        const rentals = stmt.all();


        res.json(rentals);


    } catch(error){

        console.error(error);


        res.status(500).json({

            error:"Failed to fetch rentals"

        });

    }

});



// =====================================
// GET SINGLE RENTAL DETAILS
// =====================================
rentalsRouter.get("/:id", (req,res)=>{


    try {


        const rental = db.prepare(`

            SELECT

                RENTALS.*,

                CUSTOMERS.Full_Name,

                CUSTOMERS.WeChat_ID,

                CUSTOMERS.Phone,

                STATUS.Status_Name


            FROM RENTALS


            JOIN CUSTOMERS

            ON RENTALS.Customer_ID =
               CUSTOMERS.Customer_ID


            JOIN STATUS

            ON RENTALS.Status_ID =
               STATUS.Status_ID


            WHERE RENTALS.Rental_ID = ?

        `).get(req.params.id);



        if(!rental){

            return res.status(404).json({

                error:"Rental not found"

            });

        }



        const items = db.prepare(`

            SELECT

                INVENTORY.Item_ID,

                PRODUCT_TYPES.Product_Name,

                PRODUCT_TYPES.Category,

                INVENTORY.Brand_Type,

                INVENTORY.Size


            FROM RENTAL_ITEMS


            JOIN INVENTORY

            ON RENTAL_ITEMS.Item_ID =
               INVENTORY.Item_ID


            JOIN PRODUCT_TYPES

            ON INVENTORY.Product_Type_ID =
               PRODUCT_TYPES.Product_Type_ID


            WHERE RENTAL_ITEMS.Rental_ID = ?

        `).all(req.params.id);



        res.json({

            rental,

            items

        });



    }catch(error){


        console.error(error);


        res.status(500).json({

            error:"Failed to fetch rental"

        });


    }


});




// =====================================
// CREATE RENTAL
// =====================================
rentalsRouter.post("/", (req,res)=>{


    const {

        Customer_ID,

        Item_IDs,

        Graduation_Date,

        Pickup_Date,

        Return_Date,

        Rental_Fee,

        Deposit


    } = req.body;



    try {


        const createRental = db.transaction(()=>{


            // Default status = Pending
            const rentalResult = db.prepare(`

                INSERT INTO RENTALS

                (

                    Customer_ID,

                    Status_ID,

                    Graduation_Date,

                    Pickup_Date,

                    Return_Date,

                    Rental_Fee,

                    Deposit

                )

                VALUES

                (

                    ?,

                    (

                        SELECT Status_ID

                        FROM STATUS

                        WHERE Status_Name='Pending'

                    ),

                    ?,

                    ?,

                    ?,

                    ?,

                    ?

                )

            `).run(

                Customer_ID,

                Graduation_Date,

                Pickup_Date,

                Return_Date,

                Rental_Fee,

                Deposit

            );



            const rentalID = rentalResult.lastInsertRowid;



            const itemInsert = db.prepare(`

                INSERT INTO RENTAL_ITEMS

                (

                    Rental_ID,

                    Item_ID

                )

                VALUES (?,?)

            `);



            const updateInventory = db.prepare(`

                UPDATE INVENTORY

                SET Status_ID =

                (

                    SELECT Status_ID

                    FROM STATUS

                    WHERE Status_Name='Rented'

                )

                WHERE Item_ID = ?

            `);



            Item_IDs.forEach(itemID=>{


                itemInsert.run(

                    rentalID,

                    itemID

                );


                updateInventory.run(

                    itemID

                );


            });



            return rentalID;


        });



        const rentalID = createRental();



        res.status(201).json({

            message:"Rental created successfully",

            Rental_ID:rentalID

        });



    }catch(error){


        console.error(error);


        res.status(500).json({

            error:"Failed to create rental"

        });


    }


});




// =====================================
// UPDATE RENTAL STATUS
// =====================================
rentalsRouter.put("/:id/status",(req,res)=>{


    try {


        const {
            Status_ID
        } = req.body;



        const result = db.prepare(`

            UPDATE RENTALS

            SET Status_ID = ?

            WHERE Rental_ID = ?

        `).run(

            Status_ID,

            req.params.id

        );



        if(result.changes===0){


            return res.status(404).json({

                error:"Rental not found"

            });

        }



        res.json({

            message:"Rental status updated"

        });



    }catch(error){


        console.error(error);



        res.status(500).json({

            error:"Failed to update rental status"

        });


    }


});




// =====================================
// CANCEL RENTAL
// =====================================
rentalsRouter.put("/:id/cancel",(req,res)=>{


    try {


        const result = db.prepare(`

            UPDATE RENTALS

            SET Status_ID =

            (

                SELECT Status_ID

                FROM STATUS

                WHERE Status_Name='Cancelled'

            )


            WHERE Rental_ID = ?

        `).run(req.params.id);



        if(result.changes===0){


            return res.status(404).json({

                error:"Rental not found"

            });

        }



        res.json({

            message:"Rental cancelled"

        });



    }catch(error){


        console.error(error);


        res.status(500).json({

            error:"Failed to cancel rental"

        });


    }


});




// =====================================
// DELETE RENTAL
// =====================================
rentalsRouter.delete("/:id",(req,res)=>{


    try {


        const transaction = db.transaction(()=>{


            db.prepare(`

                DELETE FROM RENTAL_ITEMS

                WHERE Rental_ID = ?

            `).run(req.params.id);



            db.prepare(`

                DELETE FROM RENTALS

                WHERE Rental_ID = ?

            `).run(req.params.id);



        });



        transaction();



        res.json({

            message:"Rental deleted"

        });



    }catch(error){


        console.error(error);


        res.status(500).json({

            error:"Failed to delete rental"

        });


    }


});



export default rentalsRouter;