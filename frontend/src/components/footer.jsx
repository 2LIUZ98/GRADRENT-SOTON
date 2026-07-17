import { Link } from "react-router-dom";

import { useLanguage } from "../context/LanguageContext.jsx";

import en from "../translations/en.js";
import zhCN from "../translations/zh-CN.js";



export default function Footer() {


    const { language } = useLanguage();


    const text = language === "zh"
        ? zhCN
        : en;



    return (

        <footer className="bg-slate-900 text-white">



            <div className="
                max-w-7xl
                mx-auto
                px-6
                py-12
            ">



                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-4
                    gap-10
                ">





                    {/* COMPANY */}


                    <div>


                        <h2 className="
                            text-2xl
                            font-bold
                            mb-4
                        ">


                            {text.footerCompany} 🎓


                        </h2>




                        <p className="
                            text-gray-300
                        ">


                            {text.footerDescription}


                        </p>



                    </div>








                    {/* QUICK LINKS */}


                    <div>


                        <h3 className="
                            text-lg
                            font-semibold
                            mb-4
                        ">


                            {text.quickLinks}


                        </h3>




                        <ul className="space-y-2">



                            <li>

                                <Link
                                    to="/"
                                    className="hover:text-blue-400"
                                >

                                    {text.home}

                                </Link>


                            </li>





                            <li>

                                <Link
                                    to="/gowns"
                                    className="hover:text-blue-400"
                                >

                                    {text.gowns}

                                </Link>


                            </li>





                            <li>

                                <Link
                                    to="/about"
                                    className="hover:text-blue-400"
                                >

                                    {text.about}

                                </Link>


                            </li>





                            <li>

                                <Link
                                    to="/booking"
                                    className="hover:text-blue-400"
                                >

                                    {text.bookNow}

                                </Link>


                            </li>





                            <li>

                                <Link
                                    to="/contact"
                                    className="hover:text-blue-400"
                                >

                                    {text.contact}

                                </Link>


                            </li>



                        </ul>



                    </div>









                    {/* SERVICES */}


                    <div>


                        <h3 className="
                            text-lg
                            font-semibold
                            mb-4
                        ">


                            {text.services}


                        </h3>




                        <ul className="
                            space-y-2
                            text-gray-300
                        ">



                            <li>

                                {text.graduationGownRental}

                            </li>



                            <li>

                                {text.maMscHoods}

                            </li>



                            <li>

                                {text.graduationCaps}

                            </li>



                            <li>

                                {text.southamptonUniversity}

                            </li>



                        </ul>



                    </div>









                    {/* CONTACT */}


                    <div>


                        <h3 className="
                            text-lg
                            font-semibold
                            mb-4
                        ">


                            {text.contact}


                        </h3>





                        <p className="text-gray-300">


                            WeChat: Southampton Gown Rental


                        </p>




                        <p className="
                            text-gray-300
                            mt-2
                        ">


                            University of Southampton


                        </p>



                    </div>





                </div>










                {/* BOTTOM */}


                <div className="
                    border-t
                    border-slate-700
                    mt-10
                    pt-6
                    flex
                    flex-col
                    md:flex-row
                    justify-between
                    items-center
                    text-gray-400
                    text-sm
                ">



                    <p>


                        © 2026 Southampton Gown Rental.
                        {text.allRightsReserved}


                    </p>






                    <div className="
                        flex
                        gap-6
                        mt-4
                        md:mt-0
                    ">



                        <Link

                            to="/privacy"

                            className="hover:text-white"

                        >

                            {text.privacyPolicy}

                        </Link>





                        <Link

                            to="/terms"

                            className="hover:text-white"

                        >

                            {text.termsConditions}

                        </Link>





                        <Link

                            to="/contact"

                            className="hover:text-white"

                        >

                            {text.contact}

                        </Link>





                    </div>




                </div>





            </div>



        </footer>


    );

}