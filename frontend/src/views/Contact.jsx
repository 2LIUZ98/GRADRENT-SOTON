import Header from "../components/header";
import Footer from "../components/footer";

import {
    MessageCircle,
    Mail,
    Phone
} from "lucide-react";


export default function Contact() {


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


                <h1 className="
                    text-5xl
                    font-bold
                ">

                    Contact Us

                </h1>



                <p className="
                    mt-4
                    text-blue-100
                    text-lg
                ">

                    Get in touch for graduation gown enquiries.

                </p>


            </section>







            {/* CONTACT DETAILS */}

            <section className="
                max-w-5xl
                mx-auto
                px-6
                py-16
            ">


                <div className="
                    grid
                    md:grid-cols-3
                    gap-8
                ">



                    <ContactCard

                        icon={<MessageCircle size={40}/>}

                        title="WeChat"

                        text="UKYUWIN"

                    />



                    <ContactCard

                        icon={<Mail size={40}/>}

                        title="Email"

                        text="Contact us via email for enquiries."

                    />



                    <ContactCard

                        icon={<Phone size={40}/>}

                        title="Phone"

                        text="Available for graduation booking enquiries."

                    />


                </div>


            </section>







            {/* ABOUT CONTACT */}

            <section className="
                max-w-4xl
                mx-auto
                px-6
                pb-20
                text-center
            ">


                <div className="
                    bg-white
                    rounded-xl
                    shadow
                    p-10
                ">


                    <h2 className="
                        text-3xl
                        font-bold
                        text-[#00539F]
                        mb-5
                    ">

                        Graduation Gown Rental Enquiries

                    </h2>



                    <p className="
                        text-gray-600
                        leading-8
                    ">

                        If you have any questions about gown sizes,
                        packages, availability or booking arrangements,
                        please contact us.

                        <br />
                        <br />

                        We will help you prepare for your
                        University of Southampton graduation day.

                    </p>



                </div>


            </section>







            <Footer />


        </div>

    );

}





function ContactCard({

    icon,
    title,
    text

}) {


    return (

        <div className="
            bg-white
            rounded-xl
            shadow
            p-8
            text-center
        ">


            <div className="
                flex
                justify-center
                text-blue-600
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



            <p className="
                text-gray-600
            ">

                {text}

            </p>


        </div>

    );

}