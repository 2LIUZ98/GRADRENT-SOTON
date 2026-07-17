import { useState } from "react";
import { Link } from "react-router-dom";

import {
    Sun,
    Moon,
    Menu as MenuIcon,
    LogIn,
    ChevronDown
} from "lucide-react";

import { Drawer } from "antd";


export default function Header({

    colorTheme,
    setTheme

}) {


    const [open, setOpen] = useState(false);



    const handleLogout = () => {

        localStorage.clear();

        window.location.href = "/";

    };



    return (

        <>


            {/* ================================
                DESKTOP HEADER
            ================================= */}

            <nav className="
                hidden md:flex
                bg-slate-900
                text-white
                px-10
                py-4
                items-center
                justify-between
                border-b
                border-slate-800
                sticky
                top-0
                z-50
            ">



                {/* LEFT */}

                <div className="
                    flex
                    items-center
                    gap-8
                ">



                    <Link
                        to="/"
                        className="
                            text-xl
                            font-bold
                        "
                    >

                        🎓 Southampton Gown Rental

                    </Link>



                    <Link
                        to="/"
                        className="
                            hover:text-blue-400
                            transition
                        "
                    >

                        Home

                    </Link>



                    <Link
                        to="/gowns"
                        className="
                            hover:text-blue-400
                            transition
                        "
                    >

                        Gowns

                    </Link>



                    <Link
                        to="/how-it-works"
                        className="
                            hover:text-blue-400
                            transition
                        "
                    >

                        How It Works

                    </Link>




                    <Link

                        to="/booking"

                        className="
                            bg-blue-600
                            hover:bg-blue-700
                            px-5
                            py-2
                            rounded-full
                            transition
                        "

                    >

                        Book Now

                    </Link>


                </div>





                {/* RIGHT */}

                <div className="
                    flex
                    items-center
                    gap-4
                ">



                    <button

                        onClick={() => setTheme(colorTheme)}

                        className="
                            p-2
                            rounded-full
                            hover:bg-slate-800
                        "

                    >

                        {
                            colorTheme === "dark"
                            ?
                            <Sun size={18}/>
                            :
                            <Moon size={18}/>
                        }


                    </button>





                    <Link

                        to="/staff-login"

                        className="
                            flex
                            items-center
                            gap-2
                            hover:text-blue-400
                        "

                    >

                        <LogIn size={18}/>

                        Staff Login

                    </Link>



                </div>



            </nav>





            {/* ================================
                MOBILE HEADER
            ================================= */}

            <header className="
                md:hidden
                bg-slate-900
                text-white
                px-4
                py-3
                flex
                items-center
                justify-between
                sticky
                top-0
                z-50
            ">



                <Link
                    to="/"
                    className="
                        font-bold
                        text-lg
                    "
                >

                    🎓 Southampton Gown Rental

                </Link>



                <button

                    onClick={() => setOpen(true)}

                    className="
                        p-2
                        rounded-full
                        hover:bg-slate-800
                    "

                >

                    <MenuIcon size={22}/>


                </button>



            </header>






            {/* ================================
                MOBILE DRAWER
            ================================= */}

            <Drawer

                open={open}

                onClose={() => setOpen(false)}

                placement="right"

                styles={{

                    body:{
                        backgroundColor:"#0f172a",
                        color:"white"
                    },

                    header:{
                        backgroundColor:"#0f172a",
                        borderBottom:"1px solid #1e293b"
                    }

                }}

            >



                <div className="
                    flex
                    flex-col
                    gap-6
                ">



                    <Link

                        to="/"

                        onClick={()=>setOpen(false)}

                    >

                        Home

                    </Link>





                    <Link

                        to="/gowns"

                        onClick={()=>setOpen(false)}

                    >

                        Gowns

                    </Link>





                    <Link

                        to="/how-it-works"

                        onClick={()=>setOpen(false)}

                    >

                        How It Works

                    </Link>





                    <Link

                        to="/booking"

                        onClick={()=>setOpen(false)}

                        className="
                            bg-blue-600
                            px-4
                            py-3
                            rounded-lg
                            text-center
                        "

                    >

                        Book Now

                    </Link>




                    <hr className="
                        border-slate-700
                    "/>





                    <Link

                        to="/staff-login"

                        onClick={()=>setOpen(false)}

                        className="
                            flex
                            items-center
                            gap-2
                        "

                    >

                        <LogIn size={18}/>

                        Staff Login

                    </Link>



                </div>


            </Drawer>



        </>

    );

}