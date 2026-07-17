import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Booking() {

    const [loading, setLoading] = useState(false);


    const [form, setForm] = useState({

        University: "University of Southampton",

        Student_Name: "",
        WeChat_ID: "",

        Graduation_Date: "",

        Degree_Type: "",

        Gown_Type: "High Replica",

        Gown_Size: "",

        Hood_Type: "",

        Hat_Size: "",

        Collection_Date: "",

        Return_Date: "",

        Remark: ""

    });



    function handleChange(e) {

        const { name, value } = e.target;


        setForm(prev => ({
            ...prev,
            [name]: value
        }));

    }





    async function handleSubmit(e) {

        e.preventDefault();

        setLoading(true);


        try {


            const response = await fetch(

                "https://YOUR-BACKEND-URL/rentals",

                {

                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },


                    body: JSON.stringify(form)

                }

            );



            if (!response.ok) {

                throw new Error(
                    "Booking failed"
                );

            }



            alert(
                "Gown booking submitted successfully!"
            );



            setForm({

                University: "University of Southampton",

                Student_Name: "",
                WeChat_ID: "",

                Graduation_Date: "",

                Degree_Type: "",

                Gown_Type: "High Replica",

                Gown_Size: "",

                Hood_Type: "",

                Hat_Size: "",

                Collection_Date: "",

                Return_Date: "",

                Remark: ""

            });



        } catch(err) {

            console.error(err);

            alert(
                "Unable to submit booking"
            );

        }


        setLoading(false);

    }





    return (

        <div className="
            min-h-screen
            bg-[#00539F]
            text-white
        ">


            <Header />



            <section className="
                py-16
                text-center
            ">

                <h1 className="
                    text-5xl
                    font-bold
                ">

                    Graduation Gown Booking 🎓

                </h1>


                <p className="
                    mt-4
                    text-blue-100
                ">

                    University of Southampton Graduation

                </p>


            </section>





            <section className="
                max-w-4xl
                mx-auto
                px-6
                pb-16
            ">


                <form

                    onSubmit={handleSubmit}

                    className="
                        bg-white
                        text-gray-900
                        rounded-xl
                        p-8
                        shadow-xl
                        space-y-6
                    "

                >



                    <h2 className="text-2xl font-bold">

                        Student Information

                    </h2>



                    <input

                        value={form.University}

                        disabled

                        className="
                            w-full
                            bg-gray-100
                            p-3
                            rounded-lg
                        "

                    />



                    <input

                        name="Student_Name"

                        placeholder="Full Name"

                        value={form.Student_Name}

                        onChange={handleChange}

                        required

                        className="
                            w-full
                            border
                            p-3
                            rounded-lg
                        "

                    />



                    <input

                        name="WeChat_ID"

                        placeholder="WeChat ID"

                        value={form.WeChat_ID}

                        onChange={handleChange}

                        required

                        className="
                            w-full
                            border
                            p-3
                            rounded-lg
                        "

                    />





                    <h2 className="text-2xl font-bold">

                        Graduation Details

                    </h2>




                    <input

                        type="date"

                        name="Graduation_Date"

                        value={form.Graduation_Date}

                        onChange={handleChange}

                        required

                        className="
                            w-full
                            border
                            p-3
                            rounded-lg
                        "

                    />





                    <select

                        name="Degree_Type"

                        value={form.Degree_Type}

                        onChange={handleChange}

                        className="
                            w-full
                            border
                            p-3
                            rounded-lg
                        "

                    >

                        <option value="">
                            Select Degree
                        </option>

                        <option>
                            BSc
                        </option>

                        <option>
                            MSc
                        </option>

                        <option>
                            MA
                        </option>


                    </select>





                    <h2 className="text-2xl font-bold">

                        Gown Selection

                    </h2>




                    <select

                        name="Gown_Type"

                        value={form.Gown_Type}

                        onChange={handleChange}

                        className="
                            w-full
                            border
                            p-3
                            rounded-lg
                        "

                    >

                        <option>
                            High Replica
                        </option>

                        <option>
                            Original
                        </option>

                    </select>





                    <select

                        name="Gown_Size"

                        value={form.Gown_Size}

                        onChange={handleChange}

                        className="
                            w-full
                            border
                            p-3
                            rounded-lg
                        "

                    >

                        <option>
                            Select Gown Size
                        </option>

                        <option>45</option>
                        <option>48</option>
                        <option>51</option>
                        <option>54</option>

                    </select>





                    <select

                        name="Hood_Type"

                        value={form.Hood_Type}

                        onChange={handleChange}

                        className="
                            w-full
                            border
                            p-3
                            rounded-lg
                        "

                    >

                        <option>
                            Select Hood
                        </option>

                        <option>
                            MA Hood
                        </option>

                        <option>
                            MSc Hood
                        </option>


                    </select>





                    <select

                        name="Hat_Size"

                        value={form.Hat_Size}

                        onChange={handleChange}

                        className="
                            w-full
                            border
                            p-3
                            rounded-lg
                        "

                    >

                        <option>
                            Select Hat Size
                        </option>

                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>

                    </select>






                    <h2 className="text-2xl font-bold">

                        Collection & Return

                    </h2>



                    <input

                        type="date"

                        name="Collection_Date"

                        value={form.Collection_Date}

                        onChange={handleChange}

                        className="
                            w-full
                            border
                            p-3
                            rounded-lg
                        "

                    />



                    <input

                        type="date"

                        name="Return_Date"

                        value={form.Return_Date}

                        onChange={handleChange}

                        className="
                            w-full
                            border
                            p-3
                            rounded-lg
                        "

                    />





                    <textarea

                        name="Remark"

                        placeholder="Additional notes"

                        value={form.Remark}

                        onChange={handleChange}

                        rows="4"

                        className="
                            w-full
                            border
                            p-3
                            rounded-lg
                        "

                    />





                    <button

                        disabled={loading}

                        className="
                            w-full
                            bg-blue-600
                            hover:bg-blue-700
                            text-white
                            py-4
                            rounded-lg
                            font-bold
                        "

                    >

                        {
                            loading
                            ? "Submitting..."
                            : "Book Graduation Gown"
                        }


                    </button>



                </form>


            </section>



            <Footer />


        </div>

    );

}