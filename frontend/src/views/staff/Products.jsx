import { useEffect, useState } from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";


export default function Products() {


    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);





    useEffect(() => {

        fetchProducts();

    }, []);






    async function fetchProducts() {


        try {


            const response = await fetch(
                "https://gradrent-soton.onrender.com/products"
            );


            if (!response.ok) {

                throw new Error(
                    "Failed to fetch products"
                );

            }


            const data = await response.json();


            setProducts(data);



        } catch(error) {


            console.error(
                "Product loading error:",
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

                        Products

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

                        + Add Product

                    </button>


                </div>







                <div className="
                    grid
                    md:grid-cols-3
                    gap-8
                ">



                    {
                        loading ? (


                            <p>
                                Loading products...
                            </p>



                        ) : products.length === 0 ? (


                            <p>
                                No products found.
                            </p>



                        ) : (


                            products.map(product => (


                                <div

                                    key={
                                        product.Product_ID
                                    }

                                    className="
                                        bg-white
                                        rounded-xl
                                        shadow
                                        p-6
                                    "

                                >



                                    <h2 className="
                                        text-2xl
                                        font-bold
                                        mb-4
                                    ">

                                        {
                                            product.Product_Name
                                        }

                                    </h2>





                                    <div className="
                                        space-y-2
                                        text-gray-700
                                    ">



                                        <p>

                                            <b>
                                                Type:
                                            </b>

                                            {" "}

                                            {
                                                product.Product_Type
                                            }

                                        </p>





                                        <p>

                                            <b>
                                                Degree:
                                            </b>

                                            {" "}

                                            {
                                                product.Degree_Type || "-"
                                            }

                                        </p>





                                        <p>

                                            <b>
                                                Size:
                                            </b>

                                            {" "}

                                            {
                                                product.Size || "-"
                                            }

                                        </p>





                                        <p>

                                            <b>
                                                Price:
                                            </b>

                                            {"£"}

                                            {
                                                product.Price
                                            }

                                        </p>





                                        <p>

                                            <b>
                                                Stock:
                                            </b>

                                            {" "}

                                            {
                                                product.Quantity
                                            }

                                        </p>



                                    </div>






                                    <div className="
                                        mt-5
                                        flex
                                        gap-3
                                    ">


                                        <button

                                            className="
                                                bg-blue-600
                                                text-white
                                                px-4
                                                py-2
                                                rounded-lg
                                            "

                                        >

                                            Edit

                                        </button>



                                        <button

                                            className="
                                                bg-red-600
                                                text-white
                                                px-4
                                                py-2
                                                rounded-lg
                                            "

                                        >

                                            Delete

                                        </button>



                                    </div>





                                </div>



                            ))


                        )
                    }



                </div>




            </main>




            <Footer />


        </div>

    );

}