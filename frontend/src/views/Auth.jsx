import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { useLanguage } from "../context/LanguageContext.jsx";


export default function Auth() {


    const [mode, setMode] = useState("login");

    const [loading, setLoading] = useState(false);



    const [form, setForm] = useState({

        Full_Name: "",

        Username: "",

        Password: "",

        Role: "Staff",

        WeChat_ID: "",

        Phone: ""

    });





    function handleChange(e) {

        const { name, value } = e.target;


        setForm(prev => ({

            ...prev,

            [name]: value

        }));

    }






    async function handleSubmit(e) {

        e.preventDefault();


        setLoading(true);



        try {


            const endpoint = mode === "login"

                ? "/staff/login"

                : "/staff/create";



            const response = await fetch(

                `https://gradrent-soton.onrender.com${endpoint}`,

                {

                    method: "POST",

                    headers: {

                        "Content-Type": "application/json"

                    },


                    body: JSON.stringify(form)

                }

            );



          const contentType = response.headers.get("content-type");

let data;

if (contentType && contentType.includes("application/json")) {
    data = await response.json();
} else {
    const text = await response.text();
    console.error(text);
    throw new Error("Server returned HTML instead of JSON.");
}


            if (!response.ok) {

                throw new Error(

                    data.error || "Authentication failed"

                );

            }





            alert(

                mode === "login"

                    ? "Login successful"

                    : "Staff account created successfully"

            );





            if (mode === "login") {


                localStorage.setItem(

                    "staff",

                    JSON.stringify(data)

                );


                window.location.href = "/staff/dashboard";


            } 
            else {


                setMode("login");


                setForm({

                    Full_Name: "",

                    Username: "",

                    Password: "",

                    Role: "Staff",

                    WeChat_ID: "",

                    Phone: ""

                });


            }




        } catch (error) {


            console.error(error);


            alert(error.message);


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
                px-6
                flex
                justify-center
            ">



                <form

                    onSubmit={handleSubmit}

                    className="
                        bg-white
                        text-gray-900
                        w-full
                        max-w-md
                        rounded-xl
                        shadow-xl
                        p-8
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

                            mode === "login"

                            ?

                            " Login"

                            :

                            " Sign Up"

                        }


                    </h1>







                    {

                    mode === "signup" &&


                    <input


                        name="Full_Name"


                        placeholder="Full Name"


                        value={form.Full_Name}


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


                        name="Username"


                        placeholder="Username"


                        value={form.Username}


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







                    {


                    mode === "signup" &&


                    <>


                    <input


                        name="WeChat_ID"


                        placeholder="WeChat ID"


                        value={form.WeChat_ID}


                        onChange={handleChange}


                        className="
                            w-full
                            border
                            p-3
                            rounded-lg
                        "


                    />





                    <input


                        name="Phone"


                        placeholder="Phone Number"


                        value={form.Phone}


                        onChange={handleChange}


                        className="
                            w-full
                            border
                            p-3
                            rounded-lg
                        "


                    />





                    <select


                        name="Role"


                        value={form.Role}


                        onChange={handleChange}


                        className="
                            w-full
                            border
                            p-3
                            rounded-lg
                        "


                    >


                        <option value="Staff">

                            Staff

                        </option>


                        <option value="Admin">

                            Admin

                        </option>



                    </select>



                    </>


                    }







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

                        mode === "login"

                        ?

                        "Login"

                        :

                        "Create Staff Account"


                        }



                    </button>







                    <button


                        type="button"


                        onClick={() => setMode(

                            mode === "login"

                            ?

                            "signup"

                            :

                            "login"

                        )}


                        className="
                            w-full
                            text-blue-600
                            font-semibold
                        "


                    >


                        {

                        mode === "login"

                        ?

                        "Create Staff Account"

                        :

                        "Back to Login"


                        }


                    </button>





                </form>



            </section>







            <Footer />



        </div>


    );

}