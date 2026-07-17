import { useEffect, useState } from "react";

import Header from "../views/components/header";
import Footer from "../views/components/footer";


export default function Inventory() {


    const [inventory, setInventory] = useState([]);

    const [loading, setLoading] = useState(true);




    useEffect(() => {

        fetchInventory();

    }, []);





    async function fetchInventory() {

        try {

            const response = await fetch(
                "https://gradrent-soton.onrender.com/inventory"
            );


            if (!response.ok) {

                throw new Error(
                    "Failed to fetch inventory"
                );

            }


            const data = await response.json();


            setInventory(data);


        } catch(error) {

            console.error(
                "Inventory loading error:",
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

                        Inventory Management

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

                        + Add Item

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
                                Loading inventory...
                            </p>


                        ) : inventory.length === 0 ? (


                            <p className="p-8">
                                No inventory items found.
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
                                            Product
                                        </th>


                                        <th className="p-4">
                                            Category
                                        </th>


                                        <th className="p-4">
                                            Size
                                        </th>


                                        <th className="p-4">
                                            Total
                                        </th>


                                        <th className="p-4">
                                            Available
                                        </th>


                                        <th className="p-4">
                                            Status
                                        </th>


                                    </tr>


                                </thead>





                                <tbody>


                                    {
                                        inventory.map(item => (


                                            <tr

                                                key={
                                                    item.Inventory_ID
                                                }

                                                className="
                                                    border-t
                                                    hover:bg-gray-50
                                                "

                                            >



                                                <td className="p-4">

                                                    {item.Inventory_ID}

                                                </td>




                                                <td className="p-4">

                                                    {item.Item_Name}

                                                </td>




                                                <td className="p-4">

                                                    {item.Item_Type}

                                                </td>




                                                <td className="p-4">

                                                    {item.Size}

                                                </td>




                                                <td className="p-4">

                                                    {item.Quantity}

                                                </td>




                                                <td className="p-4">

                                                    {item.Available_Quantity}

                                                </td>




                                                <td className="p-4">


                                                    {
                                                        item.Available_Quantity > 0

                                                        ?

                                                        <span className="
                                                            bg-green-100
                                                            text-green-700
                                                            px-3
                                                            py-1
                                                            rounded-full
                                                            text-sm
                                                        ">
                                                            Available
                                                        </span>


                                                        :

                                                        <span className="
                                                            bg-red-100
                                                            text-red-700
                                                            px-3
                                                            py-1
                                                            rounded-full
                                                            text-sm
                                                        ">
                                                            Out of Stock
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