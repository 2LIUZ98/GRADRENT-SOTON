import { useEffect, useState } from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";
import { useLanguage } from "../../context/LanguageContext.jsx";


const API =
"https://gradrent-soton.onrender.com/products";



export default function Products() {


    const [products,setProducts] = useState([]);

    const [loading,setLoading] = useState(true);


    const [showForm,setShowForm] = useState(false);


    const [editing,setEditing] = useState(null);



    const emptyProduct = {

        Product_Name:"",
        Product_Type:"",
        Degree_Type:"",
        Size:"",
        Price:"",
        Quantity:""

    };



    const [form,setForm] = useState(emptyProduct);






    useEffect(()=>{

        fetchProducts();

    },[]);






    async function fetchProducts(){


        try{


            const response = await fetch(API);


            const data = await response.json();


            setProducts(data);



        }catch(error){


            console.error(
                "Loading products failed:",
                error
            );


        }



        setLoading(false);


    }









    function handleChange(e){


        const {
            name,
            value
        } = e.target;



        setForm(prev=>({

            ...prev,

            [name]:value

        }));


    }









    function openAdd(){


        setEditing(null);

        setForm(emptyProduct);

        setShowForm(true);


    }









    function openEdit(product){


        setEditing(
            product.Product_ID
        );


        setForm({


            Product_Name:
            product.Product_Name,


            Product_Type:
            product.Product_Type,


            Degree_Type:
            product.Degree_Type || "",


            Size:
            product.Size || "",


            Price:
            product.Price,


            Quantity:
            product.Quantity


        });



        setShowForm(true);



    }









    async function saveProduct(){



        try{


            const response = await fetch(

                editing

                ? `${API}/${editing}`

                : API,


                {


                    method:
                    editing
                    ? "PUT"
                    : "POST",


                    headers:{

                        "Content-Type":
                        "application/json"

                    },


                    body:
                    JSON.stringify(form)


                }

            );





            if(!response.ok){

                throw new Error(
                    "Failed saving product"
                );

            }






            alert(

                editing

                ? "Product updated"

                : "Product added"

            );



            setShowForm(false);


            setEditing(null);


            setForm(emptyProduct);



            fetchProducts();





        }catch(error){


            console.error(error);


            alert(
                "Unable to save product"
            );


        }



    }









    async function deleteProduct(id){



        const confirmDelete =
        window.confirm(
            "Delete this product?"
        );



        if(!confirmDelete)
            return;





        try{


            const response =
            await fetch(

                `${API}/${id}`,

                {

                    method:"DELETE"

                }

            );





            if(!response.ok){

                throw new Error();

            }





            alert(
                "Product deleted"
            );



            fetchProducts();





        }catch(error){


            console.error(error);


            alert(
                "Unable to delete product"
            );


        }


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

onClick={openAdd}

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







{
showForm && (

<div className="
bg-white
rounded-xl
shadow
p-8
mb-10
">


<h2 className="
text-2xl
font-bold
mb-6
">

{
editing
?
"Edit Product"
:
"Add Product"
}

</h2>





{

Object.keys(emptyProduct).map(field=>(


<input

key={field}

name={field}

placeholder={field}

value={form[field]}

onChange={handleChange}

className="
w-full
border
rounded-lg
p-3
mb-4
"

/>


))

}





<button

onClick={saveProduct}

className="
bg-green-600
text-white
px-5
py-3
rounded-lg
mr-3
"

>

Save

</button>




<button

onClick={()=>setShowForm(false)}

className="
bg-gray-500
text-white
px-5
py-3
rounded-lg
"

>

Cancel

</button>



</div>

)

}









<div className="
grid
md:grid-cols-3
gap-8
">





{

loading ?


<p>
Loading products...
</p>



:

products.length===0 ?


<p>
No products found.
</p>



:


products.map(product=>(



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

{product.Product_Name}

</h2>





<p>
<b>Type:</b>{" "}
{product.Product_Type}
</p>


<p>
<b>Degree:</b>{" "}
{product.Degree_Type || "-"}
</p>


<p>
<b>Size:</b>{" "}
{product.Size || "-"}
</p>


<p>
<b>Price:</b>{" "}
£{product.Price}
</p>


<p>
<b>Stock:</b>{" "}
{product.Quantity}
</p>







<div className="
mt-5
flex
gap-3
">


<button

onClick={()=>
openEdit(product)
}

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

onClick={()=>
deleteProduct(product.Product_ID)
}

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


}



</div>





</main>



<Footer />


</div>


    );

}