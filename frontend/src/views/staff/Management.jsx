import { useEffect, useState } from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";
import { useLanguage } from "../../context/LanguageContext.jsx";


const API =
"https://gradrent-soton.onrender.com/staff";



export default function Management() {


    const [staff,setStaff] = useState([]);

    const [loading,setLoading] = useState(true);


    const [showForm,setShowForm] = useState(false);


    const [editing,setEditing] = useState(null);



    const emptyStaff = {

        Full_Name:"",
        Username:"",
        Password:"",
        Role:"Staff",
        WeChat_ID:"",
        Phone:""

    };



    const [form,setForm] = useState(emptyStaff);







    useEffect(()=>{

        fetchStaff();

    },[]);






    async function fetchStaff(){


        try{


            const response =
            await fetch(API);


            const data =
            await response.json();



            setStaff(data);



        }catch(error){


            console.error(
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

        setForm(emptyStaff);

        setShowForm(true);


    }








    function openEdit(user){


        setEditing(
            user.Staff_ID
        );


        setForm({


            Full_Name:
            user.Full_Name,


            Username:
            user.Username,


            Password:"",


            Role:
            user.Role,


            WeChat_ID:
            user.WeChat_ID || "",


            Phone:
            user.Phone || ""


        });


        setShowForm(true);


    }









    async function saveStaff(){



        try{


            const response =
            await fetch(

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





            if(!response.ok)
                throw new Error();





            alert(

                editing
                ?
                "Staff updated"
                :
                "Staff created"

            );



            setShowForm(false);


            setEditing(null);


            setForm(emptyStaff);


            fetchStaff();




        }catch(error){


            console.error(error);


            alert(
                "Failed to save staff"
            );


        }



    }









    async function deleteStaff(id){


        if(
            !confirm(
                "Delete this staff member?"
            )
        )
        return;





        await fetch(

            `${API}/${id}`,

            {

                method:"DELETE"

            }

        );



        fetchStaff();


    }









    async function toggleActive(user){


        await fetch(

            `${API}/${user.Staff_ID}/active`,

            {

                method:"PUT",

                headers:{
                    "Content-Type":
                    "application/json"
                },


                body:JSON.stringify({

                    Is_Active:
                    user.Is_Active
                    ?0
                    :1

                })

            }

        );


        fetchStaff();


    }









    async function changePassword(id){



        const password =
        prompt(
            "Enter new password:"
        );



        if(!password)
            return;





        await fetch(

            `${API}/${id}/password`,

            {

                method:"PUT",

                headers:{
                    "Content-Type":
                    "application/json"
                },


                body:
                JSON.stringify({

                    Password:password

                })

            }

        );



        alert(
            "Password updated"
        );


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

Staff Management

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

+ Add Staff

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
"Edit Staff"
:
"Create Staff"
}

</h2>






{

[

"Full_Name",
"Username",
"Password",
"WeChat_ID",
"Phone"

].map(field=>(


<input

key={field}

name={field}

type={
field==="Password"
?
"password"
:
"text"
}

placeholder={field}

value={form[field]}

onChange={handleChange}

className="
w-full
border
p-3
rounded-lg
mb-4
"

/>


))

}






<select

name="Role"

value={form.Role}

onChange={handleChange}

className="
w-full
border
p-3
rounded-lg
mb-4
"

>

<option>
Staff
</option>

<option>
Manager
</option>

<option>
Admin
</option>


</select>






<button

onClick={saveStaff}

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
bg-white
rounded-xl
shadow
overflow-hidden
">



<table className="
w-full
">


<thead className="
bg-slate-900
text-white
">


<tr>


<th className="p-4 text-left">
Name
</th>


<th className="p-4">
Username
</th>


<th className="p-4">
Role
</th>


<th className="p-4">
Status
</th>


<th className="p-4">
Actions
</th>


</tr>


</thead>





<tbody>


{

loading

?

<tr>
<td className="p-5">
Loading...
</td>
</tr>


:


staff.map(user=>(


<tr
key={user.Staff_ID}
className="border-b"
>


<td className="p-4">
{user.Full_Name}
</td>



<td className="p-4">
{user.Username}
</td>



<td className="p-4">
{user.Role}
</td>



<td className="p-4">

{

user.Is_Active

?

<span className="text-green-600">
Active
</span>

:

<span className="text-red-600">
Inactive
</span>

}


</td>





<td className="
p-4
flex
gap-2
">


<button

onClick={()=>
openEdit(user)
}

className="
bg-blue-600
text-white
px-3
py-2
rounded
"

>

Edit

</button>




<button

onClick={()=>
toggleActive(user)
}

className="
bg-yellow-500
text-white
px-3
py-2
rounded
"

>

Toggle

</button>





<button

onClick={()=>
changePassword(user.Staff_ID)
}

className="
bg-purple-600
text-white
px-3
py-2
rounded
"

>

Password

</button>





<button

onClick={()=>
deleteStaff(user.Staff_ID)
}

className="
bg-red-600
text-white
px-3
py-2
rounded
"

>

Delete

</button>



</td>


</tr>


))


}



</tbody>



</table>



</div>




</main>



<Footer />


</div>

);


}