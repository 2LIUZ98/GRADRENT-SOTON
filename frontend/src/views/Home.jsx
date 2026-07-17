import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";

import {
    GraduationCap,
    CheckCircle,
    Ruler,
    MessageCircle,
    CalendarDays,
    PackageCheck
} from "lucide-react";


export default function Home({

    colorTheme,
    setTheme

}) {


    return (

        <div className="min-h-screen bg-gray-50">


            {/* ================================
                HEADER
            ================================= */}

            <Header

                colorTheme={colorTheme}

                setTheme={setTheme}

            />



            {/* ================================
                MAIN CONTENT
            ================================= */}

            <main>


                {/* ================================
                    HERO SECTION
                ================================= */}

                <section className="
                    bg-primary
                    text-white
                    py-20
                    px-6
                    text-center
                ">

                    <div className="
                        max-w-5xl
                        mx-auto
                    ">


                        <GraduationCap
                            size={70}
                            className="mx-auto mb-6"
                        />


                        <h1 className="
                            text-5xl
                            font-bold
                            mb-6
                        ">

                            University of Southampton
                            <br />

                            Graduation Gown Rental 🎓

                        </h1>


                        <p className="
                            text-xl
                            mb-8
                            opacity-90
                        ">

                            Affordable graduation gowns,
                            hoods and caps for your special day.

                        </p>


                        <Link

                            to="/booking"

                            className="
                                bg-white
                                text-primary
                                px-8
                                py-3
                                rounded-lg
                                font-bold
                                hover:bg-gray-100
                            "

                        >

                            Book Your Gown

                        </Link>


                    </div>


                </section>



                {/* ================================
                SERVICES
            ================================= */}

            <section className="
                py-16
                px-6
            ">


                <div className="
                    max-w-6xl
                    mx-auto
                    grid
                    md:grid-cols-3
                    gap-8
                ">


                    <ServiceCard

                        icon={<PackageCheck size={40}/>}

                        title="Complete Set"

                        text="
                        Graduation gown, hood and hat included.
                        "

                    />


                    <ServiceCard

                        icon={<Ruler size={40}/>}

                        title="Multiple Sizes"

                        text="
                        Gowns available in sizes 45, 48, 51 and 54.
                        "

                    />


                    <ServiceCard

                        icon={<MessageCircle size={40}/>}

                        title="Easy Booking"

                        text="
                        Contact us directly through WeChat.
                        "

                    />


                </div>


            </section>




            {/* ================================
                GOWN OPTIONS
            ================================= */}

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

                        Our Graduation Gown Options

                    </h2>



                    <div className="
                        grid
                        md:grid-cols-2
                        gap-8
                    ">



                        <OptionCard

                            title="High Replica 高仿"

                            items={[
                                "Gown sizes: 45 / 48 / 51 / 54",
                                "MA Hood",
                                "MSc Hood",
                                "Hat sizes: L / XL"
                            ]}

                            price="From £12"

                        />



                        <OptionCard

                            title="Original 原版"

                            items={[
                                "Gown sizes: 45 / 48 / 51 / 54",
                                "MA Hood",
                                "MSc Hood",
                                "Hat sizes: S / M / L / XL"
                            ]}

                            price="Premium Option"

                        />


                    </div>


                </div>


            </section>





            {/* ================================
                HOW IT WORKS
            ================================= */}

            <section className="
                py-16
                px-6
                bg-gray-100
            ">


                <div className="
                    max-w-5xl
                    mx-auto
                ">


                    <h2 className="
                        text-3xl
                        font-bold
                        text-center
                        mb-12
                    ">

                        How It Works

                    </h2>



                    <div className="
                        grid
                        md:grid-cols-3
                        gap-8
                    ">


                        <Step

                            number="1"

                            title="Contact Us"

                            text="
                            Send your graduation details through WeChat.
                            "

                        />


                        <Step

                            number="2"

                            title="Reserve"

                            text="
                            Choose your gown size and rental package.
                            "

                        />


                        <Step

                            number="3"

                            title="Collect & Return"

                            text="
                            Collect before graduation and return after use.
                            "

                        />


                    </div>


                </div>


            </section>






            {/* ================================
                CTA
            ================================= */}

            <section className="
                py-16
                bg-primary
                text-white
                text-center
                px-6
            ">


                <CalendarDays
                    size={50}
                    className="mx-auto mb-5"
                />


                <h2 className="
                    text-3xl
                    font-bold
                    mb-4
                ">

                    Ready for Graduation Day?

                </h2>


                <p className="mb-8">

                    Reserve your graduation gown today.

                </p>



                <Link

                    to="/booking"

                    className="
                        bg-white
                        text-primary
                        px-8
                        py-3
                        rounded-lg
                        font-bold
                    "

                >

                    Start Booking

                </Link>


            </section>


                </main>



            {/* ================================
                FOOTER
            ================================= */}

            <Footer />


        </div>

    );

}