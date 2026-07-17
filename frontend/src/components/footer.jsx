import { Link } from "react-router-dom";


export default function Footer() {

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



                    {/* Company */}

                    <div>


                        <h2 className="
                            text-2xl
                            font-bold
                            mb-4
                        ">

                            Southampton Gown Rental 🎓

                        </h2>



                        <p className="
                            text-gray-300
                        ">

                            Graduation gown rental service
                            for University of Southampton
                            students, providing gowns,
                            hoods and graduation caps.

                        </p>


                    </div>






                    {/* Quick Links */}

                    <div>


                        <h3 className="
                            text-lg
                            font-semibold
                            mb-4
                        ">

                            Quick Links

                        </h3>



                        <ul className="space-y-2">


                            <li>

                                <Link
                                    to="/"
                                    className="hover:text-blue-400"
                                >

                                    Home

                                </Link>

                            </li>



                            <li>

                                <Link
                                    to="/gowns"
                                    className="hover:text-blue-400"
                                >

                                    Gowns

                                </Link>

                            </li>



                            <li>

                                <Link
                                    to="/about"
                                    className="hover:text-blue-400"
                                >

                                    About Us

                                </Link>

                            </li>



                            <li>

                                <Link
                                    to="/booking"
                                    className="hover:text-blue-400"
                                >

                                    Book Now

                                </Link>

                            </li>



                            <li>

                                <Link
                                    to="/contact"
                                    className="hover:text-blue-400"
                                >

                                    Contact

                                </Link>

                            </li>


                        </ul>


                    </div>








                    {/* Services */}

                    <div>


                        <h3 className="
                            text-lg
                            font-semibold
                            mb-4
                        ">

                            Our Services

                        </h3>



                        <ul className="
                            space-y-2
                            text-gray-300
                        ">


                            <li>

                                Graduation Gown Rental

                            </li>



                            <li>

                                MA & MSc Hoods

                            </li>



                            <li>

                                Graduation Caps

                            </li>



                            <li>

                                University of Southampton

                            </li>


                        </ul>


                    </div>








                    {/* Contact */}

                    <div>


                        <h3 className="
                            text-lg
                            font-semibold
                            mb-4
                        ">

                            Contact

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







                {/* Bottom */}

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
                        All rights reserved.

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

                            Privacy Policy

                        </Link>



                        <Link
                            to="/terms"
                            className="hover:text-white"
                        >

                            Terms & Conditions

                        </Link>



                        <Link
                            to="/contact"
                            className="hover:text-white"
                        >

                            Contact

                        </Link>



                    </div>


                </div>


            </div>


        </footer>

    );

}