import express from "express";
import db from "../db.mjs";

const paymentsRouter = express.Router();


// =====================================
// GET ALL PAYMENTS
// =====================================
paymentsRouter.get("/", (req, res) => {

    try {

        const stmt = db.prepare(`

            SELECT

                PAYMENTS.Payment_ID,

                PAYMENTS.Rental_ID,

                CUSTOMERS.Full_Name,

                PAYMENT_STATUS.Status_Name,

                PAYMENTS.Amount,

                PAYMENTS.Payment_Method,

                PAYMENTS.Paid_Date


            FROM PAYMENTS


            JOIN RENTALS

            ON PAYMENTS.Rental_ID =
               RENTALS.Rental_ID


            JOIN CUSTOMERS

            ON RENTALS.Customer_ID =
               CUSTOMERS.Customer_ID


            JOIN PAYMENT_STATUS

            ON PAYMENTS.Payment_Status_ID =
               PAYMENT_STATUS.Payment_Status_ID


            ORDER BY PAYMENTS.Payment_ID DESC

        `);


        const payments = stmt.all();


        res.json(payments);


    } catch(error) {


        console.error(error);


        res.status(500).json({

            error:"Failed to fetch payments"

        });


    }

});



// =====================================
// GET PAYMENT BY RENTAL ID
// =====================================
paymentsRouter.get("/rental/:id", (req,res)=>{


    try {


        const stmt = db.prepare(`

            SELECT

                PAYMENTS.Payment_ID,

                PAYMENTS.Rental_ID,

                PAYMENT_STATUS.Status_Name,

                PAYMENTS.Amount,

                PAYMENTS.Payment_Method,

                PAYMENTS.Paid_Date


            FROM PAYMENTS


            JOIN PAYMENT_STATUS

            ON PAYMENTS.Payment_Status_ID =
               PAYMENT_STATUS.Payment_Status_ID


            WHERE PAYMENTS.Rental_ID = ?

        `);



        const payment = stmt.all(
            req.params.id
        );



        res.json(payment);



    }catch(error){


        console.error(error);


        res.status(500).json({

            error:"Failed to fetch rental payment"

        });


    }


});




// =====================================
// GET SINGLE PAYMENT
// =====================================
paymentsRouter.get("/:id",(req,res)=>{


    try {


        const payment = db.prepare(`

            SELECT

                PAYMENTS.*,

                PAYMENT_STATUS.Status_Name


            FROM PAYMENTS


            JOIN PAYMENT_STATUS

            ON PAYMENTS.Payment_Status_ID =
               PAYMENT_STATUS.Payment_Status_ID


            WHERE Payment_ID = ?

        `).get(req.params.id);



        if(!payment){


            return res.status(404).json({

                error:"Payment not found"

            });


        }



        res.json(payment);



    }catch(error){


        console.error(error);


        res.status(500).json({

            error:"Failed to fetch payment"

        });


    }


});




// =====================================
// CREATE PAYMENT
// =====================================
paymentsRouter.post("/",(req,res)=>{


    try {


        const {

            Rental_ID,

            Payment_Status_ID,

            Amount,

            Payment_Method


        } = req.body;



        const stmt = db.prepare(`

            INSERT INTO PAYMENTS

            (

                Rental_ID,

                Payment_Status_ID,

                Amount,

                Payment_Method,

                Paid_Date

            )


            VALUES (?,?,?,?,?)

        `);



        let Paid_Date = null;


        if(Payment_Status_ID == 2){

            Paid_Date = new Date()
                .toISOString();

        }



        const result = stmt.run(

            Rental_ID,

            Payment_Status_ID,

            Amount,

            Payment_Method,

            Paid_Date

        );



        res.status(201).json({

            message:"Payment created successfully",

            Payment_ID:
                result.lastInsertRowid

        });



    }catch(error){


        console.error(error);


        res.status(500).json({

            error:"Failed to create payment"

        });


    }


});




// =====================================
// UPDATE PAYMENT STATUS
// =====================================
// Example:
// Unpaid -> Paid
// Paid -> Refunded
// =====================================
paymentsRouter.put("/:id/status",(req,res)=>{


    try {


        const {

            Payment_Status_ID

        } = req.body;



        let Paid_Date = null;



        if(Payment_Status_ID == 2){

            Paid_Date = new Date()
                .toISOString();

        }



        const result = db.prepare(`

            UPDATE PAYMENTS

            SET

                Payment_Status_ID = ?,

                Paid_Date = ?

            WHERE Payment_ID = ?

        `).run(

            Payment_Status_ID,

            Paid_Date,

            req.params.id

        );



        if(result.changes === 0){


            return res.status(404).json({

                error:"Payment not found"

            });


        }



        res.json({

            message:"Payment status updated"

        });



    }catch(error){


        console.error(error);



        res.status(500).json({

            error:"Failed to update payment status"

        });


    }


});




// =====================================
// DELETE PAYMENT
// =====================================
paymentsRouter.delete("/:id",(req,res)=>{


    try {


        const result = db.prepare(`

            DELETE FROM PAYMENTS

            WHERE Payment_ID = ?

        `).run(req.params.id);



        if(result.changes === 0){


            return res.status(404).json({

                error:"Payment not found"

            });


        }



        res.json({

            message:"Payment deleted"

        });



    }catch(error){


        console.error(error);



        res.status(500).json({

            error:"Failed to delete payment"

        });


    }


});



export default paymentsRouter;