import {
    useState
} from "react";

import {
    Link
} from "react-router-dom";

import {
    Sun,
    Moon,
    Menu as MenuIcon,
    LogIn,
    Globe2,
    ChevronDown
} from "lucide-react";

import {
    Drawer,
    Dropdown
} from "antd";

import {
    useLanguage
} from "../context/LanguageContext.jsx";



export default function Header({

    colorTheme,
    setTheme

}) {



    const [open, setOpen] = useState(false);



    const {
        language,
        changeLanguage

    } = useLanguage();



    // =====================
    // PRODUCT MENU
    // =====================

    const productMenu = {

        items: [

            {

                key: "gowns",

                label: (

                    <Link to="/gowns">

                        {
                            language === "zh"
                                ? "礼服"
                                : "Gowns"
                        }

                    </Link>

                )

            },

            {

                key: "props",

                label: (

                    <Link to="/props">

                        {
                            language === "zh"
                                ? "道具"
                                : "Props"
                        }

                    </Link>

                )

            }

        ]

    };





    return (

        <>


        {/* =====================
            DESKTOP
        ====================== */}


        <nav className="
            hidden md:flex
            bg-slate-900
            text-white
            px-10
            py-4
            items-center
            justify-between
            sticky
            top-0
            z-50
        ">



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




                <Link to="/">

                    {
                        language === "zh"
                            ? "首页"
                            : "Home"
                    }

                </Link>




                {/* PRODUCTS DROPDOWN */}

                <Dropdown

                    menu={productMenu}

                    trigger={["hover"]}

                >

                    <div className="
                        flex
                        items-center
                        gap-1
                        cursor-pointer
                        hover:text-blue-300
                    ">

                        <span>

                            {
                                language === "zh"
                                    ? "产品分类"
                                    : "Products"
                            }

                        </span>

                        <ChevronDown size={16} />

                    </div>

                </Dropdown>
                                <Link to="/about">

                    {
                        language === "zh"
                            ? "关于我们"
                            : "About Us"
                    }

                </Link>





                <Link to="/contact">

                    {
                        language === "zh"
                            ? "联系我们"
                            : "Contact Us"
                    }

                </Link>





                <Link

                    to="/booking"

                    className="
                        bg-blue-600
                        hover:bg-blue-700
                        px-5
                        py-2
                        rounded-full
                    "

                >

                    {
                        language === "zh"
                            ? "立即预订"
                            : "Book Now"
                    }

                </Link>


            </div>





            <div className="
                flex
                items-center
                gap-5
            ">



                {/* LANGUAGE */}

                <div className="
                    flex
                    items-center
                    gap-2
                ">


                    <Globe2 size={18} />


                    <select

                        value={language}

                        onChange={(e) =>
                            changeLanguage(
                                e.target.value
                            )
                        }

                        className="
                            bg-transparent
                            text-white
                            outline-none
                            cursor-pointer
                        "

                    >

                        <option
                            value="en"
                            className="text-black"
                        >

                            English

                        </option>



                        <option
                            value="zh"
                            className="text-black"
                        >

                            中文

                        </option>

                    </select>

                </div>





                {/* THEME */}

                <button

                    onClick={() =>
                        setTheme(colorTheme)
                    }

                    className="
                        p-2
                        rounded-full
                        hover:bg-slate-800
                    "

                >

                    {

                        colorTheme === "dark"

                            ?

                            <Sun size={18} />

                            :

                            <Moon size={18} />

                    }

                </button>





                <Link

                    to="/staff-login"

                    className="
                        flex
                        items-center
                        gap-2
                    "

                >

                    <LogIn size={18} />

                    Staff Login

                </Link>



            </div>



        </nav>
                {/* =====================
            MOBILE
        ====================== */}

        <header className="
            md:hidden
            bg-slate-900
            text-white
            px-4
            py-3
            flex
            justify-between
            items-center
        ">

            <Link
                to="/"
                className="
                    font-bold
                "
            >

                🎓 Southampton Gown Rental

            </Link>



            <button

                onClick={() =>
                    setOpen(true)
                }

            >

                <MenuIcon />

            </button>

        </header>






        <Drawer

            open={open}

            onClose={() =>
                setOpen(false)
            }

            placement="right"

            styles={{

                body: {

                    background: "#0f172a",
                    color: "white"

                },

                header: {

                    background: "#0f172a"

                }

            }}

        >



            <div className="
                flex
                flex-col
                gap-6
            ">



                <Link to="/">

                    {
                        language === "zh"
                            ? "首页"
                            : "Home"
                    }

                </Link>





                {/* PRODUCTS */}

                <div className="
                    flex
                    flex-col
                    gap-3
                ">

                    <span className="font-semibold">

                        {
                            language === "zh"
                                ? "产品分类"
                                : "Products"
                        }

                    </span>



                    <Link to="/gowns">

                        {
                            language === "zh"
                                ? "礼服"
                                : "Gowns"
                        }

                    </Link>



                    <Link to="/props">

                        {
                            language === "zh"
                                ? "道具"
                                : "Props"
                        }

                    </Link>

                </div>





                <Link to="/about">

                    {
                        language === "zh"
                            ? "关于我们"
                            : "About Us"
                    }

                </Link>





                <Link to="/contact">

                    {
                        language === "zh"
                            ? "联系我们"
                            : "Contact Us"
                    }

                </Link>





                <Link

                    to="/booking"

                    className="
                        bg-blue-600
                        p-3
                        rounded-lg
                        text-center
                    "

                >

                    {
                        language === "zh"
                            ? "立即预订"
                            : "Book Now"
                    }

                </Link>





                <hr />





                <div className="
                    flex
                    items-center
                    gap-2
                ">

                    <Globe2 size={18} />

                    <select

                        value={language}

                        onChange={(e) =>
                            changeLanguage(
                                e.target.value
                            )
                        }

                        className="
                            bg-transparent
                            text-white
                        "

                    >

                        <option
                            value="en"
                            className="text-black"
                        >

                            English

                        </option>

                        <option
                            value="zh"
                            className="text-black"
                        >

                            中文

                        </option>

                    </select>

                </div>





                <button

                    onClick={() =>
                        setTheme(colorTheme)
                    }

                    className="
                        flex
                        items-center
                        gap-2
                    "

                >

                    {

                        colorTheme === "dark"

                            ?

                            <Sun size={18} />

                            :

                            <Moon size={18} />

                    }

                    {

                        language === "zh"

                            ?

                            "切换主题"

                            :

                            "Toggle Theme"

                    }

                </button>





                <Link

                    to="/staff-login"

                    className="
                        flex
                        items-center
                        gap-2
                    "

                >

                    <LogIn size={18} />

                    Staff Login

                </Link>



            </div>


        </Drawer>


        </>

    );

}