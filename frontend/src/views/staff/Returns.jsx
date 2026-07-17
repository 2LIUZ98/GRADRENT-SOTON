import { useEffect, useState } from "react";

import Header from "../components/header";
import Footer from "../components/footer";


export default function Returns() {


    const [returnsList, setReturnsList] = useState([]);

    const [loading, setLoading] = useState(true);





    useEffect(() => {

        fetchReturns();

    }, []);






    async function fetchReturns() {


        try {


            const response = await fetch(
                "https://gradrent-soton.onrender.com/returns"
            );


            if (!response.ok) {

                throw new Error(
                    "Failed to fetch returns"
                );

            }



            const data = await response.json();


            setReturnsList(data);



        } catch(error) {


            console.error(
                "Returns loading error:",
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

                        Returns Management

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

                        + Record Return

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

                                Loading returns...

                            </p>



                        ) : returnsList.length === 0 ? (


                            <p className="p-8">

                                No return records found.

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
                                            Return ID
                                        </th>


                                        <th className="p-4">
                                            Rental ID
                                        </th>


                                        <th className="p-4">
                                            Returned Date
                                        </th>


                                        <th className="p-4">
                                            Condition
                                        </th>


                                        <th className="p-4">
                                            Late Fee
                                        </th>


                                        <th className="p-4">
                                            Status
                                        </th>


                                    </tr>


                                </thead>





                                <tbody>


                                    {
                                        returnsList.map(item => (


                                            <tr

                                                key={
                                                    item.Return_ID
                                                }

                                                className="
                                                    border-t
                                                    hover:bg-gray-50
                                                "

                                            >



                                                <td className="p-4">

                                                    {
                                                        item.Return_ID
                                                    }

                                                </td>





                                                <td className="p-4">

                                                    {
                                                        item.Rental_ID
                                                    }

                                                </td>





                                                <td className="p-4">

                                                    {
                                                        item.Return_Date
                                                    }

                                                </td>





                                                <td className="p-4">

                                                    {
                                                        item.Condition || "Good"
                                                    }

                                                </td>





                                                <td className="p-4">

                                                    £
                                                    {
                                                        item.Late_Fee || 0
                                                    }

                                                </td>





                                                <td className="p-4">


                                                    {
                                                        item.Status === "Returned"

                                                        ?

                                                        <span className="
                                                            bg-green-100
                                                            text-green-700
                                                            px-3
                                                            py-1
                                                            rounded-full
                                                            text-sm
                                                        ">

                                                            Returned

                                                        </span>


                                                        :

                                                        <span className="
                                                            bg-yellow-100
                                                            text-yellow-700
                                                            px-3
                                                            py-1
                                                            rounded-full
                                                            text-sm
                                                        ">

                                                            Pending

                                                        </span>

                                                    }


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