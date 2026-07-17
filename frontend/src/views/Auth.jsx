import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";


export default function Auth() {


    const [mode, setMode] = useState("login");

    const [loading, setLoading] = useState(false);


    const [form,setForm] = useState({

        Staff_Name:"",
        Email:"",
        Password:""

    });



    function handleChange(e){

        const {name,value}=e.target;


        setForm(prev=>({

            ...prev,

            [name]:value

        }));

    }





    async function handleSubmit(e){

        e.preventDefault();

        setLoading(true);



        try{


            const endpoint = mode==="login"

                ? "/staff/login"

                : "/staff/signup";



            const response = await fetch(

                `https://uk-yuwin.onrender.com${endpoint}`,

                {

                    method:"POST",

                    headers:{

                        "Content-Type":"application/json"

                    },


                    body:JSON.stringify(form)

                }

            );



            const data = await response.json();



            if(!response.ok){

                throw new Error(
                    data.message || "Authentication failed"
                );

            }



            alert(

                mode==="login"

                ? "Login successful"

                : "Account created successfully"

            );



            if(mode==="login"){


                localStorage.setItem(

                    "staff",

                    JSON.stringify(data.staff)

                );


                window.location.href="/dashboard";


            }



        }

        catch(err){


            console.error(err);


            alert(err.message);


        }



        setLoading(false);

    }





    return (

        <div className="
            min-h-screen
            bg-[#00539F]
            text-white
        ">


            <Header />



            <section className="
                py-16
                flex
                justify-center
                px-6
            ">


                <form

                    onSubmit={handleSubmit}

                    className="
                        bg-white
                        text-gray-900
                        rounded-xl
                        shadow-xl
                        p-8
                        w-full
                        max-w-md
                        space-y-5
                    "

                >



                    <h1 className="
                        text-3xl
                        font-bold
                        text-center
                    ">

                        Staff 
                        {
                            mode==="login"
                            ? " Login"
                            : " Sign Up"
                        }

                    </h1>




                    {
                    mode==="signup" &&

                    <input

                        name="Staff_Name"

                        placeholder="Staff Name"

                        value={form.Staff_Name}

                        onChange={handleChange}

                        required

                        className="
                            w-full
                            border
                            p-3
                            rounded-lg
                        "

                    />

                    }




                    <input

                        type="email"

                        name="Email"

                        placeholder="Email"

                        value={form.Email}

                        onChange={handleChange}

                        required

                        className="
                            w-full
                            border
                            p-3
                            rounded-lg
                        "

                    />





                    <input

                        type="password"

                        name="Password"

                        placeholder="Password"

                        value={form.Password}

                        onChange={handleChange}

                        required

                        className="
                            w-full
                            border
                            p-3
                            rounded-lg
                        "

                    />





                    <button

                        disabled={loading}

                        className="
                            w-full
                            bg-blue-600
                            hover:bg-blue-700
                            text-white
                            py-3
                            rounded-lg
                            font-bold
                        "

                    >

                        {
                            loading

                            ?

                            "Processing..."

                            :

                            mode==="login"

                            ?

                            "Login"

                            :

                            "Create Account"

                        }


                    </button>





                    <button

                        type="button"

                        onClick={()=>setMode(

                            mode==="login"

                            ?

                            "signup"

                            :

                            "login"

                        )}

                        className="
                            w-full
                            text-blue-600
                        "

                    >

                        {
                            mode==="login"

                            ?

                            "Create staff account"

                            :

                            "Already have account? Login"

                        }

                    </button>



                </form>


            </section>




            <Footer />


        </div>

    );

}