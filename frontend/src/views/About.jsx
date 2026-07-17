import Header from "../components/header";
import Footer from "../components/footer";

import { useLanguage } from "../context/LanguageContext.jsx";

import en from "../translations/en.js";
import zhCN from "../translations/zh-CN.js";


import {
    GraduationCap,
    CheckCircle,
    Users,
    PackageCheck
} from "lucide-react";



export default function About() {


    const { language } = useLanguage();


    const t = language === "zh"
        ? zhCN
        : en;




    return (


        <div className="
            min-h-screen
            bg-slate-100
            text-gray-900
        ">



            {/* HEADER */}

            <Header />






            {/* =========================
                HERO
            ========================= */}


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
                    mb-5
                ">


                    {t.aboutTitle}


                </h1>





                <p className="
                    text-blue-100
                    max-w-3xl
                    mx-auto
                    text-xl
                ">


                    {t.aboutDescription}


                </p>



            </section>









            {/* =========================
                ABOUT CONTENT
            ========================= */}


            <section className="
                max-w-6xl
                mx-auto
                px-6
                py-16
            ">



                <div className="
                    grid
                    md:grid-cols-2
                    gap-10
                    items-center
                ">






                    {/* TEXT */}


                    <div>



                        <h2 className="
                            text-3xl
                            font-bold
                            mb-5
                        ">


                            {t.whoWeAre}


                        </h2>





                        <p className="
                            text-gray-700
                            leading-relaxed
                            mb-5
                        ">


                            {t.aboutText1}


                        </p>






                        <p className="
                            text-gray-700
                            leading-relaxed
                        ">


                            {t.aboutText2}


                        </p>




                    </div>









                    {/* WHY CHOOSE CARD */}


                    <div className="
                        bg-white
                        rounded-xl
                        shadow
                        p-8
                        border
                    ">




                        <h3 className="
                            text-2xl
                            font-bold
                            mb-5
                        ">


                            {t.whyChoose}


                        </h3>






                        <ul className="
                            space-y-4
                            text-gray-700
                        ">




                            <li className="
                                flex
                                gap-3
                                items-center
                            ">



                                <CheckCircle

                                    className="
                                        text-blue-600
                                    "

                                />



                                {t.affordablePackages}



                            </li>





                            <li className="
                                flex
                                gap-3
                                items-center
                            ">


                                <CheckCircle

                                    className="
                                        text-blue-600
                                    "

                                />



                                {t.multipleSizes}



                            </li>

                            



                            <li className="
                                flex
                                gap-3
                                items-center
                            ">


                                <CheckCircle

                                    className="
                                        text-blue-600
                                    "

                                />



                                {t.universityFocused}



                            </li>






                            <li className="
                                flex
                                gap-3
                                items-center
                            ">


                                <CheckCircle

                                    className="
                                        text-blue-600
                                    "

                                />



                                {t.easyBookingProcess}



                            </li>





                        </ul>





                    </div>





                </div>





            </section>









            {/* =========================
                FEATURES
            ========================= */}



            <section className="
                bg-white
                py-16
                border-t
            ">



                <div className="
                    max-w-6xl
                    mx-auto
                    px-6
                    grid
                    md:grid-cols-3
                    gap-8
                    text-center
                ">




                    <Feature

                        icon={
                            <GraduationCap size={45}/>
                        }

                        title={t.studentFocused}

                        text={t.studentFocusedText}

                    />






                    <Feature

                        icon={
                            <PackageCheck size={45}/>
                        }

                        title={t.completePackages}

                        text={t.completePackagesText}

                    />







                    <Feature

                        icon={
                            <Users size={45}/>
                        }

                        title={t.personalSupport}

                        text={t.personalSupportText}

                    />





                </div>





            </section>









            {/* FOOTER */}


            <Footer />





        </div>



    );


}









function Feature({

    icon,

    title,

    text


}) {



    return (



        <div className="
            p-8
            rounded-xl
            bg-slate-100
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