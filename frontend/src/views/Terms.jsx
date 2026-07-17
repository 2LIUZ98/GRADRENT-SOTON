import Header from "../components/header";
import Footer from "../components/footer";

import { useLanguage } from "../context/LanguageContext.jsx";

import en from "../translations/en.js";
import zhCN from "../translations/zh-CN.js";


export default function Terms() {


    const { language } = useLanguage();


    const text = language === "zh"
        ? zhCN
        : en;



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

                    {text.termsTitle}

                </h1>



                <p className="
                    mt-4
                    text-blue-100
                    text-lg
                ">

                    {text.termsSubtitle}

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


                    <TermsSection
                        title={text.termsBookingTitle}
                        text={text.termsBookingText}
                    />

                    <TermsSection
                        title={text.termsRentalTitle}
                        text={text.termsRentalText}
                    />

                    <TermsSection
                        title={text.termsResponsibilityTitle}
                        text={text.termsResponsibilityText}
                    />

                    <TermsSection
                        title={text.termsCancellationTitle}
                        text={text.termsCancellationText}
                    />

                    <TermsSection
                        title={text.termsPaymentTitle}
                        text={text.termsPaymentText}
                    />

                    <TermsSection
                        title={text.termsPrivacyTitle}
                        text={text.termsPrivacyText}
                    />

                    <TermsSection
                        title={text.termsContactTitle}
                        text={text.termsContactText}
                    />


                </div>


            </section>




            <Footer />


        </div>

    );

}





// =====================================
// TERMS SECTION COMPONENT
// =====================================

function TermsSection({

    title,
    text

}) {

    return (

        <div>

            <h2 className="
                text-2xl
                font-bold
                mb-3
                text-[#00539F]
            ">

                {title}

            </h2>


            <p className="
                text-gray-700
                leading-relaxed
            ">

                {text}

            </p>

        </div>

    );

}