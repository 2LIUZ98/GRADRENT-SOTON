import { useState } from "react";

import Header from "../components/header";
import Footer from "../components/footer";

import { useLanguage } from "../context/LanguageContext.jsx";

import en from "../translations/en.js";
import zhCN from "../translations/zh-CN.js";



export default function Booking() {


    const { language } = useLanguage();


    const t = language === "zh"
        ? zhCN
        : en;



    const [loading, setLoading] = useState(false);



    const [form, setForm] = useState({

        University: "University of Southampton",

        Student_Name: "",

        WeChat_ID: "",


        Graduation_Date: "",


        Degree_Type: "",



        Items: [

            {
                Gown_Type: "High Replica",
                Gown_Size: "",
                Hood_Type: "",
                Hat_Size: ""
            }

        ],



        Collection_Date: "",

        Return_Date: "",


        Remark: ""

    });






    function handleChange(e) {


        const {
            name,
            value
        } = e.target;



        setForm(prev => ({

            ...prev,

            [name]: value

        }));

    }








    function addItem() {


        setForm(prev => ({


            ...prev,


            Items: [

                ...prev.Items,


                {

                    Gown_Type: "High Replica",

                    Gown_Size: "",

                    Hood_Type: "",

                    Hat_Size: ""

                }


            ]


        }));

    }









    function removeItem(index) {


        setForm(prev => ({


            ...prev,


            Items:

                prev.Items.filter(

                    (_, i) => i !== index

                )


        }));


    }









    function handleItemChange(index, e) {


        const {

            name,

            value

        } = e.target;



        setForm(prev => ({


            ...prev,


            Items:

                prev.Items.map(

                    (item, i) =>


                        i === index

                            ?

                            {

                                ...item,

                                [name]: value

                            }


                            :

                            item


                )


        }));


    }











    async function handleSubmit(e) {


        e.preventDefault();


        setLoading(true);




        try {


            const response = await fetch(

                "https://gradrent-soton.onrender.com/rentals",

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

                language === "zh"

                    ?

                    "学位服预订提交成功！"

                    :

                    "Gown booking submitted successfully!"

            );





            setForm({


                University: "University of Southampton",


                Student_Name: "",


                WeChat_ID: "",


                Graduation_Date: "",


                Degree_Type: "",



                Items: [

                    {

                        Gown_Type: "High Replica",

                        Gown_Size: "",

                        Hood_Type: "",

                        Hat_Size: ""

                    }

                ],




                Collection_Date: "",


                Return_Date: "",


                Remark: ""


            });




        }


        catch(err) {


            console.error(err);



            alert(

                language === "zh"

                    ?

                    "提交失败，请稍后重试"

                    :

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





            {/* HERO */}


            <section className="

                py-16

                text-center

            ">



                <h1 className="

                    text-5xl

                    font-bold

                ">


                    {t.bookingTitle}


                </h1>





                <p className="

                    mt-4

                    text-blue-100

                ">


                    {t.universityGraduation}


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




                    <h2 className="

                        text-2xl

                        font-bold

                    ">


                        {t.studentInformation}


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


                        placeholder={t.fullName}


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


                        placeholder={t.wechat}


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





                    <h2 className="

                        text-2xl

                        font-bold

                    ">


                        {t.graduationDetails}


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


                            {t.selectDegree}


                        </option>



                        <option value="BSc">

                            {t.bsc}

                        </option>




                        <option value="MSc">

                            {t.msc}

                        </option>




                        <option value="MA">

                            {t.ma}

                        </option>


                    </select>





                    <h2 className="

                        text-2xl

                        font-bold

                    ">


                        {t.gownSelection}


                    </h2>
                                        {
                        form.Items.map(

                            (item, index) => (

                                <div

                                    key={index}

                                    className="
                                        border
                                        rounded-lg
                                        p-5
                                        space-y-4
                                    "

                                >



                                    <div className="
                                        flex
                                        justify-between
                                        items-center
                                    ">


                                        <h3 className="
                                            font-bold
                                            text-xl
                                        ">

                                            {t.set} {index + 1}

                                        </h3>





                                        {

                                            form.Items.length > 1 &&


                                            <button

                                                type="button"

                                                onClick={() =>
                                                    removeItem(index)
                                                }

                                                className="
                                                    text-red-600
                                                    font-bold
                                                "

                                            >

                                                {t.remove}

                                            </button>


                                        }



                                    </div>








                                    {/* GOWN TYPE */}

                                    <select

                                        name="Gown_Type"

                                        value={item.Gown_Type}

                                        onChange={(e) =>
                                            handleItemChange(
                                                index,
                                                e
                                            )
                                        }


                                        className="
                                            w-full
                                            border
                                            p-3
                                            rounded-lg
                                        "

                                    >

                                        <option value="High Replica">

                                            {t.highReplica}

                                        </option>


                                        <option value="Original">

                                            {t.original}

                                        </option>


                                    </select>








                                    {/* GOWN SIZE */}

                                    <select

                                        name="Gown_Size"

                                        value={item.Gown_Size}

                                        onChange={(e) =>
                                            handleItemChange(
                                                index,
                                                e
                                            )
                                        }


                                        className="
                                            w-full
                                            border
                                            p-3
                                            rounded-lg
                                        "

                                    >

                                        <option value="">

                                            {t.selectGownSize}

                                        </option>


                                        <option value="45">
                                            45
                                        </option>


                                        <option value="48">
                                            48
                                        </option>


                                        <option value="51">
                                            51
                                        </option>


                                        <option value="54">
                                            54
                                        </option>


                                    </select>









                                    {/* HOOD TYPE */}

                                    <select

                                        name="Hood_Type"

                                        value={item.Hood_Type}

                                        onChange={(e) =>
                                            handleItemChange(
                                                index,
                                                e
                                            )
                                        }


                                        className="
                                            w-full
                                            border
                                            p-3
                                            rounded-lg
                                        "

                                    >

                                        <option value="">

                                            {t.selectHood}

                                        </option>



                                        <option value="MA Hood">

                                            {t.maHood}

                                        </option>




                                        <option value="MSc Hood">

                                            {t.mscHood}

                                        </option>



                                    </select>









                                    {/* HAT SIZE */}

                                    <select

                                        name="Hat_Size"

                                        value={item.Hat_Size}

                                        onChange={(e) =>
                                            handleItemChange(
                                                index,
                                                e
                                            )
                                        }


                                        className="
                                            w-full
                                            border
                                            p-3
                                            rounded-lg
                                        "

                                    >

                                        <option value="">

                                            {t.selectHatSize}

                                        </option>



                                        <option value="S">
                                            S
                                        </option>


                                        <option value="M">
                                            M
                                        </option>


                                        <option value="L">
                                            L
                                        </option>


                                        <option value="XL">
                                            XL
                                        </option>


                                    </select>





                                </div>


                            )


                        )
                    }








                    {/* ADD SET BUTTON */}


                    <button


                        type="button"


                        onClick={addItem}


                        className="

                            bg-slate-800

                            text-white

                            px-5

                            py-3

                            rounded-lg

                        "


                    >


                        {t.addAnotherSet}


                    </button>









                    {/* COLLECTION RETURN */}


                    <h2 className="

                        text-2xl

                        font-bold

                    ">


                        {t.collectionReturn}


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









                    {/* REMARK */}


                    <textarea


                        name="Remark"


                        placeholder={t.additionalNotes}


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









                    {/* SUBMIT */}


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

                                ?

                                t.submitting

                                :

                                t.submitBooking

                        }



                    </button>





                </form>




            </section>






            <Footer />





        </div>


    );

}