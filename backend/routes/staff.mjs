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

        const {
            Username,
            Password
        } = req.body;



        const staff = db.prepare(`

            SELECT *

            FROM STAFF

            WHERE Username = ?

            AND Is_Active = 1

        `).get(Username);



        if (!staff) {

            return res.status(401).json({

                error: "Staff not found"

            });

        }




        const validPassword = await bcrypt.compare(

            Password,

            staff.Password_Hash

        );



        if (!validPassword) {

            return res.status(401).json({

                error: "Invalid password"

            });

        }





        db.prepare(`

            UPDATE STAFF

            SET Last_Login = CURRENT_TIMESTAMP

            WHERE Staff_ID = ?

        `).run(

            staff.Staff_ID

        );





        res.json({

            message: "Login successful",

            Staff_ID: staff.Staff_ID,

            Full_Name: staff.Full_Name,

            Username: staff.Username,

            Role: staff.Role

        });



    } catch(error) {


        console.error(error);


        res.status(500).json({

            error:"Login failed"

        });


    }


});









// =====================================
// CREATE STAFF
// =====================================

staffRouter.post("/create", async (req,res)=>{


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




        if(exists){


            return res.status(409).json({

                error:"Username already exists"

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


            VALUES

            (?, ?, ?, ?, ?, ?)


        `).run(

            Full_Name,

            Username,

            hash,

            Role || "Staff",

            WeChat_ID,

            Phone

        );






        res.status(201).json({

            message:"Staff created successfully",

            Staff_ID:result.lastInsertRowid

        });




    } catch(error){


        console.error(error);


        res.status(500).json({

            error:"Failed to create staff"

        });


    }


});









// =====================================
// GET ALL STAFF
// =====================================

staffRouter.get("/", (req,res)=>{


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



    } catch(error){


        console.error(error);


        res.status(500).json({

            error:"Failed to fetch staff"

        });


    }


});









// =====================================
// GET STAFF BY ID
// =====================================

staffRouter.get("/:id", (req,res)=>{


    try {


        const id = Number(req.params.id);



        if(Number.isNaN(id)){


            return res.status(404).json({

                error:"Staff not found"

            });


        }





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


        `).get(id);





        if(!staff){


            return res.status(404).json({

                error:"Staff not found"

            });


        }





        res.json(staff);



    }catch(error){


        console.error(error);


        res.status(500).json({

            error:"Failed to fetch staff"

        });


    }


});









// =====================================
// UPDATE STAFF
// =====================================

staffRouter.put("/:id", (req,res)=>{


    try {


        const id = Number(req.params.id);


        if(Number.isNaN(id)){


            return res.status(404).json({

                error:"Staff not found"

            });


        }





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

            id

        );





        if(result.changes === 0){


            return res.status(404).json({

                error:"Staff not found"

            });


        }





        res.json({

            message:"Staff updated successfully"

        });



    }catch(error){


        console.error(error);


        res.status(500).json({

            error:"Update failed"

        });


    }


});









// =====================================
// CHANGE PASSWORD
// =====================================

staffRouter.put("/:id/password", async(req,res)=>{


    try {


        const id = Number(req.params.id);



        if(Number.isNaN(id)){


            return res.status(404).json({

                error:"Staff not found"

            });


        }




        const {

            Password

        } = req.body;





        const hash = await bcrypt.hash(

            Password,

            SALT_ROUNDS

        );





        db.prepare(`

            UPDATE STAFF

            SET Password_Hash = ?

            WHERE Staff_ID = ?

        `).run(

            hash,

            id

        );





        res.json({

            message:"Password updated successfully"

        });



    }catch(error){


        console.error(error);


        res.status(500).json({

            error:"Password update failed"

        });


    }


});









// =====================================
// ACTIVATE / DEACTIVATE STAFF
// =====================================

staffRouter.put("/:id/active",(req,res)=>{


    try {


        const id = Number(req.params.id);



        if(Number.isNaN(id)){


            return res.status(404).json({

                error:"Staff not found"

            });


        }




        const {

            Is_Active

        } = req.body;





        db.prepare(`

            UPDATE STAFF

            SET Is_Active = ?

            WHERE Staff_ID = ?

        `).run(

            Is_Active,

            id

        );





        res.json({

            message:"Staff status updated"

        });



    }catch(error){


        console.error(error);


        res.status(500).json({

            error:"Status update failed"

        });


    }


});









// =====================================
// DELETE STAFF
// =====================================

staffRouter.delete("/:id",(req,res)=>{


    try {


        const id = Number(req.params.id);



        if(Number.isNaN(id)){


            return res.status(404).json({

                error:"Staff not found"

            });


        }





        db.prepare(`

            DELETE FROM STAFF

            WHERE Staff_ID = ?

        `).run(id);





        res.json({

            message:"Staff deleted successfully"

        });



    }catch(error){


        console.error(error);


        res.status(500).json({

            error:"Delete failed"

        });


    }


});








export default staffRouter;