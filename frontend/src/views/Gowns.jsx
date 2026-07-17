import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";

import { useLanguage } from "../context/LanguageContext.jsx";

import en from "../translations/en.js";
import zhCN from "../translations/zh-CN.js";

import {
    GraduationCap,
    CheckCircle,
    Ruler,
    PackageCheck
} from "lucide-react";



export default function Gowns() {


    const { language } = useLanguage();


    const text = language === "zh"
        ? zhCN
        : en;




    const gownOptions = [

        {
            title: text.highReplica,

            price: "£13 per day",

            items: [

                text.southamptonGown,

                text.maHood,

                text.mscHood,

                text.hatIncluded,

                `${text.sizes}: 45 / 48 / 51 / 54`

            ]

        },


        {

            title: text.original,

            price: "£43 per day",

            items: [

                text.officialGown,

                text.maHood,

                text.mscHood,

                text.hatIncluded,

                `${text.sizes}: 45 / 48 / 51 / 54`

            ]

        }

    ];





    return (

        <div className="
            min-h-screen
            bg-slate-100
            text-gray-900
        ">



            <Header />





            {/* HERO */}

            <section className="
                bg-[#00539F]
                text-white
                py-20
                px-6
                text-center
            ">


                <GraduationCap

                    size={70}

                    className="
                        mx-auto
                        mb-6
                    "

                />



                <h1 className="
                    text-5xl
                    font-bold
                ">

                    {text.gownsTitle}

                </h1>



                <p className="
                    mt-5
                    text-blue-100
                    text-xl
                ">

                    {text.gownsDescription}

                </p>


            </section>







            {/* FEATURES */}


            <section className="
                max-w-6xl
                mx-auto
                px-6
                py-16
            ">



                <div className="
                    grid
                    md:grid-cols-3
                    gap-8
                ">



                    <Feature

                        icon={<PackageCheck size={40}/>}

                        title={text.completeSet}

                        text={text.completeSetText}

                    />




                    <Feature

                        icon={<Ruler size={40}/>}

                        title={text.multipleSizes}

                        text={text.multipleSizesText}

                    />




                    <Feature

                        icon={<GraduationCap size={40}/>}

                        title={text.universitySpecific}

                        text={text.universitySpecificText}

                    />



                </div>


            </section>







            {/* GOWN OPTIONS */}


            <section className="
                bg-white
                py-16
                px-6
            ">



                <div className="
                    max-w-6xl
                    mx-auto
                ">



                    <h2 className="
                        text-3xl
                        font-bold
                        text-center
                        mb-10
                    ">

                        {text.availablePackages}

                    </h2>




                    <div className="
                        grid
                        md:grid-cols-2
                        gap-8
                    ">



                        {
                            gownOptions.map(
                                (gown,index)=>(


                                <div

                                    key={index}

                                    className="
                                        border
                                        rounded-xl
                                        p-8
                                        shadow
                                        bg-white
                                    "

                                >



                                    <h3 className="
                                        text-2xl
                                        font-bold
                                        mb-4
                                    ">

                                        {gown.title}

                                    </h3>



                                    <ul className="
                                        space-y-3
                                        mb-6
                                    ">


                                        {
                                            gown.items.map(
                                                (item,i)=>(

                                                <li

                                                    key={i}

                                                    className="
                                                        flex
                                                        items-center
                                                        gap-2
                                                    "

                                                >

                                                    <CheckCircle size={18}/>

                                                    {item}

                                                </li>


                                            ))
                                        }


                                    </ul>
                                                                        <p className="
                                        text-xl
                                        font-bold
                                        mb-6
                                    ">

                                        {gown.price}

                                    </p>





                                    <Link

                                        to="/booking"

                                        className="
                                            block
                                            text-center
                                            bg-blue-600
                                            hover:bg-blue-700
                                            text-white
                                            py-3
                                            rounded-lg
                                            font-bold
                                        "

                                    >

                                        {text.bookPackage}


                                    </Link>



                                </div>


                            ))
                        }



                    </div>



                </div>



            </section>









            {/* SIZE GUIDE */}


            <section className="
                py-16
                px-6
                bg-gray-100
            ">



                <div className="
                    max-w-4xl
                    mx-auto
                    text-center
                ">




                    <h2 className="
                        text-3xl
                        font-bold
                        mb-6
                    ">


                        {text.sizeGuide}


                    </h2>





                    <p className="
                        text-gray-700
                    ">

                        {text.availableSizes}


                    </p>







                    <div className="
                        flex
                        justify-center
                        gap-4
                        mt-6
                        flex-wrap
                    ">



                        {

                            ["45","48","51","54"].map(

                                size => (

                                    <div

                                        key={size}

                                        className="
                                            bg-white
                                            px-8
                                            py-4
                                            rounded-lg
                                            shadow
                                            font-bold
                                        "

                                    >

                                        {text.size} {size}


                                    </div>


                                )

                            )

                        }



                    </div>



                </div>



            </section>







            <Footer />


        </div>


    );

}







// =====================================
// FEATURE COMPONENT
// =====================================


function Feature({

    icon,
    title,
    text

}) {


    return (


        <div className="
            bg-white
            rounded-xl
            p-8
            shadow
            text-center
        ">



            <div className="
                flex
                justify-center
                mb-5
                text-blue-600
            ">


                {icon}


            </div>





            <h3 className="
                text-xl
                font-bold
                mb-3
            ">


                {title}


            </h3>





            <p className="
                text-gray-600
            ">


                {text}


            </p>



        </div>


    );


}