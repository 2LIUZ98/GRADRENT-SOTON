import Header from "../components/header";
import Footer from "../components/footer";


export default function Terms() {

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

                    Terms & Conditions

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

                            1. Booking & Reservation

                        </h2>


                        <p className="text-gray-700 leading-relaxed">

                            A booking is only confirmed once the required information
                            has been provided and confirmation has been received.
                            Availability is subject to gown stock at the time of booking.

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

                            2. Rental Period

                        </h2>


                        <p className="text-gray-700 leading-relaxed">

                            Graduation gowns are rented for the agreed rental period.
                            Customers must collect and return the gown within the
                            arranged dates and times.

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

                            3. Customer Responsibility

                        </h2>


                        <p className="text-gray-700 leading-relaxed">

                            Customers are responsible for taking care of the gown,
                            hood, and hat during the rental period.
                            Any damage, loss, or missing items may result in additional
                            charges.

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

                            4. Cancellation Policy

                        </h2>


                        <p className="text-gray-700 leading-relaxed">

                            Cancellation requests should be made as early as possible.
                            Refund eligibility depends on the timing of the cancellation
                            and whether the gown has already been reserved.

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

                            5. Payment

                        </h2>


                        <p className="text-gray-700 leading-relaxed">

                            Payment details will be confirmed during the booking process.
                            Prices may vary depending on gown type, package selection,
                            and rental duration.

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

                            6. Privacy

                        </h2>


                        <p className="text-gray-700 leading-relaxed">

                            Personal information collected during booking will only be
                            used for processing your gown rental and contacting you
                            regarding your order.

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


                        <p className="text-gray-700 leading-relaxed">

                            If you have any questions regarding these terms and
                            conditions, please contact us before making a booking.

                        </p>

                    </div>



                </div>


            </section>




            <Footer />


        </div>

    );

}