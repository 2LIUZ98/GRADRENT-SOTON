import Header from "../components/header";
import Footer from "../components/footer";

import { useLanguage } from "../context/LanguageContext.jsx";

import en from "../translations/en.js";
import zhCN from "../translations/zh-CN.js";



export default function Privacy() {


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

                    {text.privacyTitle}

                </h1>



                <p className="
                    mt-4
                    text-blue-100
                    text-lg
                ">

                    {text.privacyDescription}

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

                    <PrivacySection

                        title={text.privacySection1Title}

                        text={text.privacySection1Text}

                    />





                    {/* 2 */}

                    <PrivacySection

                        title={text.privacySection2Title}

                        text={text.privacySection2Text}

                    />





                    {/* 3 */}

                    <PrivacySection

                        title={text.privacySection3Title}

                        text={text.privacySection3Text}

                    />





                    {/* 4 */}

                    <PrivacySection

                        title={text.privacySection4Title}

                        text={text.privacySection4Text}

                    />





                    {/* 5 */}

                    <PrivacySection

                        title={text.privacySection5Title}

                        text={text.privacySection5Text}

                    />



                    {/* 6 */}

                    <PrivacySection

                        title={text.privacySection6Title}

                        text={text.privacySection6Text}

                    />





                    {/* 7 */}

                    <PrivacySection

                        title={text.privacySection7Title}

                        text={text.privacySection7Text}

                    />



                </div>


            </section>





            <Footer />



        </div>

    );

}







// =====================================
// PRIVACY SECTION COMPONENT
// =====================================


function PrivacySection({

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