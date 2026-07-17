import { useEffect, useState } from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";
import { useLanguage } from "../../context/LanguageContext.jsx";


export default function Rentals() {


    const [rentals, setRentals] = useState([]);

    const [loading, setLoading] = useState(true);





    useEffect(() => {

        fetchRentals();

    }, []);






    async function fetchRentals() {


        try {


            const response = await fetch(
                "https://gradrent-soton.onrender.com/rentals"
            );


            if (!response.ok) {

                throw new Error(
                    "Failed to fetch rentals"
                );

            }



            const data = await response.json();


            setRentals(data);



        } catch(error) {


            console.error(
                "Rental loading error:",
                error
            );


        }


        setLoading(false);


    }







    return (

        <div className="
            min-h-screen
            bg-slate-100
            text-gray-900
        ">


            <Header />





            <main className="
                max-w-7xl
                mx-auto
                px-6
                py-12
            ">



                <div className="
                    flex
                    justify-between
                    items-center
                    mb-8
                ">


                    <h1 className="
                        text-4xl
                        font-bold
                    ">

                        Rental Orders

                    </h1>



                    <button

                        className="
                            bg-blue-600
                            hover:bg-blue-700
                            text-white
                            px-5
                            py-3
                            rounded-lg
                        "

                    >

                        + New Rental

                    </button>


                </div>







                <div className="
                    bg-white
                    rounded-xl
                    shadow
                    overflow-hidden
                ">



                    {
                        loading ? (


                            <p className="p-8">
                                Loading rentals...
                            </p>



                        ) : rentals.length === 0 ? (


                            <p className="p-8">
                                No rental orders found.
                            </p>



                        ) : (



                            <table className="
                                w-full
                                text-left
                            ">


                                <thead className="
                                    bg-slate-200
                                ">


                                    <tr>


                                        <th className="p-4">
                                            ID
                                        </th>


                                        <th className="p-4">
                                            Student
                                        </th>


                                        <th className="p-4">
                                            Degree
                                        </th>


                                        <th className="p-4">
                                            Gown
                                        </th>


                                        <th className="p-4">
                                            Size
                                        </th>


                                        <th className="p-4">
                                            Graduation
                                        </th>


                                        <th className="p-4">
                                            Status
                                        </th>


                                    </tr>


                                </thead>





                                <tbody>


                                    {
                                        rentals.map(rental => (


                                            <tr

                                                key={
                                                    rental.Rental_ID
                                                }

                                                className="
                                                    border-t
                                                    hover:bg-gray-50
                                                "

                                            >




                                                <td className="p-4">

                                                    {
                                                        rental.Rental_ID
                                                    }

                                                </td>





                                                <td className="p-4">

                                                    {
                                                        rental.Student_Name
                                                    }

                                                </td>





                                                <td className="p-4">

                                                    {
                                                        rental.Degree_Type
                                                    }

                                                </td>





                                                <td className="p-4">

                                                    {
                                                        rental.Gown_Type
                                                    }

                                                </td>





                                                <td className="p-4">

                                                    {
                                                        rental.Gown_Size
                                                    }

                                                </td>





                                                <td className="p-4">

                                                    {
                                                        rental.Graduation_Date
                                                    }

                                                </td>





                                                <td className="p-4">


                                                    <span className="
                                                        bg-blue-100
                                                        text-blue-700
                                                        px-3
                                                        py-1
                                                        rounded-full
                                                        text-sm
                                                    ">

                                                        {
                                                            rental.Status || "Pending"
                                                        }

                                                    </span>


                                                </td>




                                            </tr>


                                        ))
                                    }



                                </tbody>



                            </table>



                        )
                    }



                </div>




            </main>




            <Footer />


        </div>

    );

}