import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";

import {
    Users,
    Package,
    ShoppingBag,
    ClipboardList,
    CreditCard,
    RotateCcw,
    UserCog,
    LogOut
} from "lucide-react";


export default function Staff() {


    const [staff,setStaff] = useState(null);



    useEffect(()=>{


        const data = localStorage.getItem("staff");


        if(!data){

            window.location.href="/staff";

            return;

        }


        setStaff(JSON.parse(data));


    },[]);






    function logout(){


        localStorage.removeItem("staff");


        window.location.href="/staff";


    }







    if(!staff){

        return null;

    }







    const cards = [


        {
            title:"Customers",
            icon:<Users size={40}/>,
            link:"/staff/customers"
        },


        {
            title:"Inventory",
            icon:<Package size={40}/>,
            link:"/staff/inventory"
        },


        {
            title:"Products",
            icon:<ShoppingBag size={40}/>,
            link:"/staff/products"
        },


        {
            title:"Rentals",
            icon:<ClipboardList size={40}/>,
            link:"/staff/rentals"
        },


        {
            title:"Payments",
            icon:<CreditCard size={40}/>,
            link:"/staff/payments"
        },


        {
            title:"Returns",
            icon:<RotateCcw size={40}/>,
            link:"/staff/returns"
        },


        {
            title:"Staff Management",
            icon:<UserCog size={40}/>,
            link:"/staff/manage"
        }


    ];







    return (

        <div className="
            min-h-screen
            bg-slate-100
            text-gray-900
        ">



            <Header />





            <section className="
                bg-[#00539F]
                text-white
                py-16
                px-6
            ">


                <div className="
                    max-w-6xl
                    mx-auto
                    flex
                    justify-between
                    items-center
                ">



                    <div>


                        <h1 className="
                            text-4xl
                            font-bold
                        ">

                            Staff Dashboard

                        </h1>



                        <p className="
                            mt-3
                            text-blue-100
                        ">


                            Welcome back, {staff.Full_Name}


                        </p>



                    </div>





                    <button

                        onClick={logout}

                        className="
                            flex
                            items-center
                            gap-2
                            bg-white
                            text-red-600
                            px-5
                            py-3
                            rounded-lg
                            font-bold
                        "

                    >

                        <LogOut size={20}/>

                        Logout

                    </button>



                </div>



            </section>









            <main className="
                max-w-6xl
                mx-auto
                px-6
                py-12
            ">




                <div className="
                    grid
                    md:grid-cols-3
                    gap-8
                ">



                    {

                    cards.map((card,index)=>(


                        <Link

                            key={index}

                            to={card.link}

                            className="
                                bg-white
                                rounded-xl
                                shadow
                                p-8
                                hover:shadow-xl
                                transition
                                border
                            "

                        >



                            <div className="
                                text-blue-600
                                mb-5
                            ">


                                {card.icon}


                            </div>




                            <h2 className="
                                text-2xl
                                font-bold
                            ">


                                {card.title}


                            </h2>




                            <p className="
                                text-gray-500
                                mt-2
                            ">

                                Manage {card.title.toLowerCase()}

                            </p>



                        </Link>


                    ))

                    }



                </div>







                <section className="
                    mt-12
                    bg-white
                    rounded-xl
                    shadow
                    p-8
                ">


                    <h2 className="
                        text-2xl
                        font-bold
                        mb-5
                    ">

                        Staff Information

                    </h2>




                    <div className="
                        grid
                        md:grid-cols-2
                        gap-4
                    ">



                        <p>

                            <b>Name:</b> {staff.Full_Name}

                        </p>


                        <p>

                            <b>Username:</b> {staff.Username}

                        </p>



                        <p>

                            <b>Role:</b> {staff.Role}

                        </p>


                        <p>

                            <b>Staff ID:</b> {staff.Staff_ID}

                        </p>



                    </div>



                </section>






            </main>







            <Footer />



        </div>

    );

}