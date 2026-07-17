import Header from "../components/header";
import Footer from "../components/footer";

import {
    GraduationCap,
    CheckCircle,
    Users,
    PackageCheck
} from "lucide-react";


export default function About() {

    return (

        <div className="
            min-h-screen
            bg-slate-100
            text-gray-900
        ">


            {/* HEADER */}

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
                    mb-5
                ">

                    About Graduation Gown Rental

                </h1>


                <p className="
                    text-blue-100
                    max-w-3xl
                    mx-auto
                    text-xl
                ">

                    Providing affordable and reliable University of Southampton
                    graduation gown rental services for students.

                </p>


            </section>





            {/* ABOUT CONTENT */}

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

                            Who We Are

                        </h2>



                        <p className="
                            text-gray-700
                            leading-relaxed
                            mb-5
                        ">

                            We provide graduation gown rental services
                            specifically designed for University of Southampton
                            students.

                            Our aim is to make graduation preparation easier
                            by offering affordable, convenient and reliable
                            gown packages.

                        </p>



                        <p className="
                            text-gray-700
                            leading-relaxed
                        ">

                            From gown selection and sizing advice to collection
                            and return arrangements, we support students
                            throughout their graduation journey.

                        </p>


                    </div>






                    {/* CARD */}

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

                            Why Choose Us

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

                                <CheckCircle className="text-blue-600"/>

                                Affordable graduation gown packages

                            </li>



                            <li className="
                                flex
                                gap-3
                                items-center
                            ">

                                <CheckCircle className="text-blue-600"/>

                                Multiple gown sizes available

                            </li>



                            <li className="
                                flex
                                gap-3
                                items-center
                            ">

                                <CheckCircle className="text-blue-600"/>

                                University of Southampton focused service

                            </li>



                            <li className="
                                flex
                                gap-3
                                items-center
                            ">

                                <CheckCircle className="text-blue-600"/>

                                Easy booking process

                            </li>



                        </ul>


                    </div>


                </div>


            </section>







            {/* FEATURES */}

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

                        icon={<GraduationCap size={45}/>}

                        title="Student Focused"

                        text="Designed around University of Southampton graduation needs."

                    />



                    <Feature

                        icon={<PackageCheck size={45}/>}

                        title="Complete Packages"

                        text="Gowns, hoods and hats available together."

                    />



                    <Feature

                        icon={<Users size={45}/>}

                        title="Personal Support"

                        text="Guidance from booking to collection and return."

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