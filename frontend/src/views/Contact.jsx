import Header from "../components/header";
import Footer from "../components/footer";

import { useLanguage } from "../context/LanguageContext.jsx";

import en from "../translations/en.js";
import zhCN from "../translations/zh-CN.js";

import {
    MessageCircle,
    Mail,
    Phone
} from "lucide-react";


export default function Contact() {


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

                    {t.contactTitle}

                </h1>



                <p className="
                    mt-4
                    text-blue-100
                    text-lg
                ">

                    {t.contactDescription}

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

                        title={t.wechatTitle}

                        text={t.wechatText}

                    />



                    <ContactCard

                        icon={<Mail size={40}/>}

                        title={t.emailTitle}

                        text={t.emailText}

                    />



                    <ContactCard

                        icon={<Phone size={40}/>}

                        title={t.phoneTitle}

                        text={t.phoneText}

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

                        {t.gownEnquiryTitle}

                    </h2>



                    <p className="
                        text-gray-600
                        leading-8
                        whitespace-pre-line
                    ">

                        {t.gownEnquiryText}

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