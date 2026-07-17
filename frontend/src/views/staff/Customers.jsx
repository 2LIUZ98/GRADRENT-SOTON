import { useEffect, useState } from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";

import {
    useLanguage
} from "../../context/LanguageContext.jsx";



export default function Customers() {


    const {
        t
    } = useLanguage();



    const [customers, setCustomers] = useState([]);

    const [loading, setLoading] = useState(true);




    useEffect(() => {

        fetchCustomers();

    }, []);





    async function fetchCustomers() {

        try {

            const response = await fetch(
                "https://gradrent-soton.onrender.com/customers"
            );


            const data = await response.json();


            setCustomers(data);


        } catch(error) {

            console.error(
                "Failed to load customers:",
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



                <h1 className="
                    text-4xl
                    font-bold
                    mb-8
                ">

                    {t("customers.title")}

                </h1>





                <div className="
                    bg-white
                    rounded-xl
                    shadow
                    overflow-hidden
                ">



                    {
                        loading ? (

                            <p className="p-8">

                                {t("common.loading")}

                            </p>


                        ) : customers.length === 0 ? (


                            <p className="p-8">

                                {t("customers.empty")}

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
                                            {t("customers.id")}
                                        </th>


                                        <th className="p-4">
                                            {t("customers.name")}
                                        </th>


                                        <th className="p-4">
                                            {t("customers.phone")}
                                        </th>


                                        <th className="p-4">
                                            {t("customers.email")}
                                        </th>


                                        <th className="p-4">
                                            {t("customers.wechat")}
                                        </th>


                                        <th className="p-4">
                                            {t("customers.created")}
                                        </th>


                                    </tr>


                                </thead>





                                <tbody>


                                    {
                                        customers.map(customer => (


                                            <tr

                                                key={
                                                    customer.Customer_ID
                                                }

                                                className="
                                                    border-t
                                                    hover:bg-gray-50
                                                "

                                            >


                                                <td className="p-4">
                                                    {
                                                        customer.Customer_ID
                                                    }
                                                </td>



                                                <td className="p-4">
                                                    {
                                                        customer.Full_Name
                                                    }
                                                </td>




                                                <td className="p-4">
                                                    {
                                                        customer.Phone
                                                    }
                                                </td>




                                                <td className="p-4">
                                                    {
                                                        customer.Email
                                                    }
                                                </td>




                                                <td className="p-4">
                                                    {
                                                        customer.WeChat_ID
                                                    }
                                                </td>




                                                <td className="p-4">
                                                    {
                                                        customer.Created_At
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