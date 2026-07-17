import Header from "../components/header";
import Footer from "../components/footer";
import { useLanguage } from "../context/LanguageContext.jsx";


export default function Terms() {


    const { t } = useLanguage();



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

                    {t.termsTitle}

                </h1>



                <p className="
                    mt-4
                    text-blue-100
                    text-lg
                ">

                    {t.termsSubtitle}

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

                            {t.termsBookingTitle}

                        </h2>



                        <p className="
                            text-gray-700
                            leading-relaxed
                        ">

                            {t.termsBookingText}

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

                            {t.termsRentalTitle}

                        </h2>



                        <p className="
                            text-gray-700
                            leading-relaxed
                        ">

                            {t.termsRentalText}

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

                            {t.termsResponsibilityTitle}

                        </h2>



                        <p className="
                            text-gray-700
                            leading-relaxed
                        ">

                            {t.termsResponsibilityText}

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

                            {t.termsCancellationTitle}

                        </h2>



                        <p className="
                            text-gray-700
                            leading-relaxed
                        ">

                            {t.termsCancellationText}

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

                            {t.termsPaymentTitle}

                        </h2>



                        <p className="
                            text-gray-700
                            leading-relaxed
                        ">

                            {t.termsPaymentText}

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

                            {t.termsPrivacyTitle}

                        </h2>



                        <p className="
                            text-gray-700
                            leading-relaxed
                        ">

                            {t.termsPrivacyText}

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

                            {t.termsContactTitle}

                        </h2>



                        <p className="
                            text-gray-700
                            leading-relaxed
                        ">

                            {t.termsContactText}

                        </p>


                    </div>





                </div>



            </section>






            <Footer />



        </div>

    );

}