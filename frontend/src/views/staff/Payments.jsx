import { useEffect, useState } from "react";

import Header from "../components/header";
import Footer from "../components/footer";


export default function Payments() {


    const [payments, setPayments] = useState([]);

    const [loading, setLoading] = useState(true);





    useEffect(() => {

        fetchPayments();

    }, []);






    async function fetchPayments() {


        try {


            const response = await fetch(
                "https://gradrent-soton.onrender.com/payments"
            );


            if (!response.ok) {

                throw new Error(
                    "Failed to fetch payments"
                );

            }



            const data = await response.json();


            setPayments(data);



        } catch(error) {


            console.error(
                "Payment loading error:",
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

                        Payments

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

                        + Record Payment

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

                                Loading payments...

                            </p>



                        ) : payments.length === 0 ? (


                            <p className="p-8">

                                No payment records found.

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
                                            Rental ID
                                        </th>


                                        <th className="p-4">
                                            Amount
                                        </th>


                                        <th className="p-4">
                                            Method
                                        </th>


                                        <th className="p-4">
                                            Status
                                        </th>


                                        <th className="p-4">
                                            Date
                                        </th>


                                    </tr>


                                </thead>





                                <tbody>


                                    {
                                        payments.map(payment => (



                                            <tr

                                                key={
                                                    payment.Payment_ID
                                                }

                                                className="
                                                    border-t
                                                    hover:bg-gray-50
                                                "

                                            >



                                                <td className="p-4">

                                                    {
                                                        payment.Payment_ID
                                                    }

                                                </td>





                                                <td className="p-4">

                                                    {
                                                        payment.Rental_ID
                                                    }

                                                </td>





                                                <td className="p-4">

                                                    £
                                                    {
                                                        payment.Amount
                                                    }

                                                </td>





                                                <td className="p-4">

                                                    {
                                                        payment.Payment_Method
                                                    }

                                                </td>





                                                <td className="p-4">


                                                    {
                                                        payment.Status === "Paid"

                                                        ?

                                                        <span className="
                                                            bg-green-100
                                                            text-green-700
                                                            px-3
                                                            py-1
                                                            rounded-full
                                                            text-sm
                                                        ">
                                                            Paid
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





                                                <td className="p-4">

                                                    {
                                                        payment.Payment_Date
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