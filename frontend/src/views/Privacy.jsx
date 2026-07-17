import Header from "../components/header";
import Footer from "../components/footer";
import { useLanguage } from "../context/LanguageContext.jsx";


export default function Privacy() {

    return (

        <div className="
            min-h-screen
            bg-slate-50
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

                    Privacy Policy

                </h1>


                <p className="
                    mt-4
                    text-blue-100
                    text-lg
                ">

                    Southampton Graduation Gown Rental

                </p>


            </section>





            {/* CONTENT */}

            <section className="
                max-w-5xl
                mx-auto
                px-6
                py-16
            ">


                <div className="
                    bg-white
                    rounded-2xl
                    shadow-lg
                    p-8
                    space-y-10
                ">



                    {/* 1 */}

                    <div>

                        <h2 className="
                            text-2xl
                            font-bold
                            mb-3
                            text-[#00539F]
                        ">

                            1. Information We Collect

                        </h2>


                        <p className="
                            text-gray-700
                            leading-relaxed
                        ">

                            When you make a booking or contact us, we may collect
                            personal information including your name, WeChat ID,
                            contact details, graduation information, gown requirements,
                            and booking details.

                        </p>

                    </div>





                    {/* 2 */}

                    <div>

                        <h2 className="
                            text-2xl
                            font-bold
                            mb-3
                            text-[#00539F]
                        ">

                            2. How We Use Your Information

                        </h2>


                        <p className="
                            text-gray-700
                            leading-relaxed
                        ">

                            Your information is used to process gown rental bookings,
                            confirm reservations, communicate with you regarding your
                            order, and provide customer support.

                        </p>

                    </div>





                    {/* 3 */}

                    <div>

                        <h2 className="
                            text-2xl
                            font-bold
                            mb-3
                            text-[#00539F]
                        ">

                            3. Data Protection

                        </h2>


                        <p className="
                            text-gray-700
                            leading-relaxed
                        ">

                            We take reasonable steps to protect your personal
                            information and prevent unauthorised access, loss, or
                            misuse of your data.

                        </p>

                    </div>





                    {/* 4 */}

                    <div>

                        <h2 className="
                            text-2xl
                            font-bold
                            mb-3
                            text-[#00539F]
                        ">

                            4. Sharing Your Information

                        </h2>


                        <p className="
                            text-gray-700
                            leading-relaxed
                        ">

                            We do not sell, rent, or share your personal information
                            with third parties unless required for providing our
                            services or where required by law.

                        </p>

                    </div>





                    {/* 5 */}

                    <div>

                        <h2 className="
                            text-2xl
                            font-bold
                            mb-3
                            text-[#00539F]
                        ">

                            5. Data Retention

                        </h2>


                        <p className="
                            text-gray-700
                            leading-relaxed
                        ">

                            We retain booking information only for as long as necessary
                            to provide our services, maintain records, and comply with
                            legal obligations.

                        </p>

                    </div>





                    {/* 6 */}

                    <div>

                        <h2 className="
                            text-2xl
                            font-bold
                            mb-3
                            text-[#00539F]
                        ">

                            6. Your Rights

                        </h2>


                        <p className="
                            text-gray-700
                            leading-relaxed
                        ">

                            You have the right to request access to your personal
                            information, request corrections, or ask for deletion of
                            your data where applicable.

                        </p>

                    </div>





                    {/* 7 */}

                    <div>

                        <h2 className="
                            text-2xl
                            font-bold
                            mb-3
                            text-[#00539F]
                        ">

                            7. Contact Us

                        </h2>


                        <p className="
                            text-gray-700
                            leading-relaxed
                        ">

                            If you have any questions about this Privacy Policy or
                            how your information is handled, please contact us.

                        </p>

                    </div>



                </div>


            </section>




            <Footer />


        </div>

    );

}