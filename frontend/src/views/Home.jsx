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

        <div className="min-h-screen bg-[#00539F] text-white">


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
                                bg-blue-600
                                text-white
                                px-8
                                py-3
                                rounded-lg
                                font-bold
                                hover:bg-blue-700
                                transition
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

                        icon={<PackageCheck size={40} className="text-primary"/>}

                        title="Complete Set"

                        text="
                        Graduation gown, hood and hat included.
                        "

                    />


                    <ServiceCard

                        icon={<Ruler size={40} className="text-primary"/>}

                        title="Multiple Sizes"

                        text="
                        Gowns available in sizes 45, 48, 51 and 54.
                        "

                    />


                    <ServiceCard

                        icon={<MessageCircle size={40} className="text-primary"/>}

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
                text-gray-800
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

                            price="£13 per day"

                        />



                        <OptionCard

                            title="Original 原版"

                            items={[
                                "Gown sizes: 45 / 48 / 51 / 54",
                                "MA Hood",
                                "MSc Hood",
                                "Hat sizes: S / M / L / XL"
                            ]}

                            price="£43 per day"

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
                text-gray-900
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
                        bg-blue-600
                        text-primary
                        px-8
                        py-3
                        rounded-lg
                        font-bold
                        hover:bg-blue-700
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

// =====================================
// SERVICE CARD COMPONENT
// =====================================

function ServiceCard({
    icon,
    title,
    text
}) {

    return (

        <div className="
            bg-white
            text-gray-900
            p-8
            rounded-xl
            shadow
            text-center
        ">


            <div className="
                flex
                justify-center
                mb-5
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


            <p className="text-gray-600">

                {text}

            </p>


        </div>

    );

}



// =====================================
// OPTION CARD COMPONENT
// =====================================

function OptionCard({
    title,
    items,
    price
}) {


    return (

        <div className="
            border
            rounded-xl
            p-8
            shadow-sm
            bg-white
            text-gray-900
        ">


            <h3 className="
                text-2xl
                font-bold
                mb-5
            ">

                {title}

            </h3>



            <ul className="
                space-y-3
                mb-6
            ">


                {items.map((item, index) => (

                    <li
                        key={index}
                        className="
                            flex
                            items-center
                            gap-2
                        "
                    >

                        <CheckCircle size={18}/>

                        {item}

                    </li>

                ))}


            </ul>



            <p className="
                text-xl
                font-bold
            ">

                {price}

            </p>


        </div>

    );

}




// =====================================
// STEP COMPONENT
// =====================================

function Step({
    number,
    title,
    text
}) {


    return (

        <div className="text-center">


            <div className="
                w-12
                h-12
                rounded-full
                bg-blue-600
                text-white
                flex
                items-center
                justify-center
                mx-auto
                mb-4
                font-bold
            ">

                {number}

            </div>



            <h3 className="
                text-xl
                font-bold
                mb-2
            ">

                {title}

            </h3>



            <p className="text-gray-600">

                {text}

            </p>


        </div>

    );

}