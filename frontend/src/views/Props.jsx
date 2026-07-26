import Header from "../components/header";
import Footer from "../components/footer";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Props() {

    const { language } = useLanguage();

const officialProps = [

    {
        nameEn: "Official Graduation Clip",
        nameZh: "官方毕业夹子",
        quantity: 1,
        image: "/images/props/official/clip.HEIC"
    },

    {
        nameEn: "Official Graduation Tube",
        nameZh: "官方毕业桶",
        quantity: 2,
        image: "/images/props/official/tube.HEIC"
    },

    {
        nameEn: "Official Teddy Bear (2024)",
        nameZh: "官方毕业熊（2024）",
        quantity: 1,
        image: "/images/props/official/teddy-2024.HEIC"
    },

    {
        nameEn: "Official Teddy Bear (2023)",
        nameZh: "官方毕业熊（2023）",
        quantity: 1,
        image: "/images/props/official/teddy-2023.HEIC"
    }

];



const unofficialProps = [

    {
        nameEn: "Red Graduation Tube",
        nameZh: "红色毕业桶",
        quantity: 1,
        image: "/images/props/unofficial/red-tube.HEIC"
    },

    {
        nameEn: "Dark Blue Graduation Tube",
        nameZh: "深蓝色毕业桶",
        quantity: 1,
        image: "/images/props/unofficial/blue-tube.HEIC"
    },

    {
        nameEn: "Unofficial Teddy Bear A",
        nameZh: "非官方毕业熊 A",
        quantity: 1,
        image: "/images/props/unofficial/teddy-a.HEIC"
    },

    {
        nameEn: "Unofficial Teddy Bear B",
        nameZh: "非官方毕业熊 B",
        quantity: 1,
        image: "/images/props/unofficial/teddy-b.HEIC"
    }

];



const extras = [

    {
        nameEn: "Reflector",
        nameZh: "反光板",
        quantity: 1,
        image: "/images/props/extras/reflector.HEIC"
    },

    {
        nameEn: "Artificial Graduation Bouquet A",
        nameZh: "仿真毕业花束 A",
        quantity: 1,
        image: "/images/props/extras/fake-flower-a.HEIC"
    },

    {
        nameEn: "Artificial Graduation Bouquet B",
        nameZh: "仿真毕业花束 B",
        quantity: 1,
        image: "/images/props/extras/fake-flower-b.HEIC"
    },

    {
        nameEn: "Harry Potter's First Wand",
        nameZh: "哈利波特第一根魔杖",
        quantity: 1,
        image: "/images/props/extras/wand.HEIC"
    }

];



    return (

        <div className="
            min-h-screen
            bg-slate-50
            text-gray-900
        ">

            <Header />



            {/* HERO */}

            <section className="
                bg-[#00539F]
                text-white
                py-20
                px-6
            ">

                <div className="
                    max-w-7xl
                    mx-auto
                    text-center
                ">

                    <h1 className="
                        text-5xl
                        font-bold
                    ">

                        {
                            language === "zh"
                                ? "拍照道具租赁"
                                : "Photography Props Rental"
                        }

                    </h1>

                    <p className="
                        mt-5
                        text-xl
                        text-blue-100
                    ">

                        {
                            language === "zh"
                                ? "每件道具 £3 · 租赁一天"
                                : "£3 per prop • 1 day rental"
                        }

                    </p>

                </div>

            </section>



            {/* PRICE */}

            <section className="
                max-w-7xl
                mx-auto
                px-6
                py-12
            ">

                <div className="
                    bg-blue-600
                    text-white
                    rounded-2xl
                    p-8
                    text-center
                    shadow-xl
                ">

                    <h2 className="
                        text-3xl
                        font-bold
                    ">

                        {
                            language === "zh"
                                ? "统一租赁价格"
                                : "Rental Price"
                        }

                    </h2>

                    <p className="
                        text-5xl
                        font-extrabold
                        mt-4
                    ">

                        £3

                    </p>

                    <p className="
                        text-blue-100
                        mt-3
                        text-lg
                    ">

                        {
                            language === "zh"
                                ? "每件道具 · 一天"
                                : "Per Prop • Per Day"
                        }

                    </p>

                </div>

            </section>



            {/* OFFICIAL */}

            <section className="
                max-w-7xl
                mx-auto
                px-6
                pb-16
            ">

                <h2 className="
                    text-4xl
                    font-bold
                    mb-8
                    text-[#00539F]
                ">

                    {
                        language === "zh"
                            ? "🏛️ 官方 University of Southampton 道具"
                            : "🏛️ Official University of Southampton Props"
                    }

                </h2>

                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-4
                    gap-8
                ">

                    {officialProps.map((prop, index) => (

                        <div
                            key={index}
                            className="
                                bg-white
                                rounded-2xl
                                shadow-lg
                                overflow-hidden
                                hover:shadow-2xl
                                transition
                            "
                        >

                            <img
                                src={prop.image}
                                alt={prop.nameEn}
                                className="
                                    w-full
                                    h-64
                                    object-cover
                                "
                            />

                            <div className="p-6">

                                <h3 className="
                                    text-xl
                                    font-bold
                                ">

                                    {
                                        language === "zh"
                                            ? prop.nameZh
                                            : prop.nameEn
                                    }

                                </h3>

                                <p className="
                                    text-gray-500
                                    mt-2
                                ">

                                    {
                                        language === "zh"
                                            ? `数量：${prop.quantity}`
                                            : `Quantity: ${prop.quantity}`
                                    }

                                </p>

                                <div className="
                                    mt-5
                                    flex
                                    justify-between
                                    items-center
                                ">

                                    <span className="
                                        text-2xl
                                        font-bold
                                        text-blue-600
                                    ">

                                        £3

                                    </span>

                                    <span className="
                                        text-sm
                                        text-gray-500
                                    ">

                                        1 Day

                                    </span>

                                </div>

                            </div>

                        </div>

                    ))}

                                    </div>

            </section>



            {/* UNOFFICIAL */}

            <section
                className="
                    max-w-7xl
                    mx-auto
                    px-6
                    pb-16
                "
            >

                <h2
                    className="
                        text-4xl
                        font-bold
                        mb-8
                        text-[#00539F]
                    "
                >

                    {
                        language === "zh"
                            ? "🪣 非官方道具"
                            : "🪣 Unofficial Props"
                    }

                </h2>

                <div
                    className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-4
                        gap-8
                    "
                >

                    {unofficialProps.map((prop, index) => (

                        <div
                            key={index}
                            className="
                                bg-white
                                rounded-2xl
                                shadow-lg
                                overflow-hidden
                                hover:shadow-2xl
                                transition
                            "
                        >

                            <img
                                src={prop.image}
                                alt={prop.nameEn}
                                className="
                                    w-full
                                    h-64
                                    object-cover
                                "
                            />

                            <div className="p-6">

                                <h3
                                    className="
                                        text-xl
                                        font-bold
                                    "
                                >

                                    {
                                        language === "zh"
                                            ? prop.nameZh
                                            : prop.nameEn
                                    }

                                </h3>

                                <p
                                    className="
                                        text-gray-500
                                        mt-2
                                    "
                                >

                                    {
                                        language === "zh"
                                            ? `数量：${prop.quantity}`
                                            : `Quantity: ${prop.quantity}`
                                    }

                                </p>

                                <div
                                    className="
                                        mt-5
                                        flex
                                        justify-between
                                        items-center
                                    "
                                >

                                    <span
                                        className="
                                            text-2xl
                                            font-bold
                                            text-blue-600
                                        "
                                    >

                                        £3

                                    </span>

                                    <span
                                        className="
                                            text-sm
                                            text-gray-500
                                        "
                                    >

                                        1 Day

                                    </span>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </section>



            {/* EXTRAS */}

            <section
                className="
                    max-w-7xl
                    mx-auto
                    px-6
                    pb-16
                "
            >

                <h2
                    className="
                        text-4xl
                        font-bold
                        mb-8
                        text-[#00539F]
                    "
                >

                    {
                        language === "zh"
                            ? "✨ 其他道具"
                            : "✨ Extras"
                    }

                </h2>

                <div
                    className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        gap-8
                    "
                >

                    {extras.map((prop, index) => (

                        <div
                            key={index}
                            className="
                                bg-white
                                rounded-2xl
                                shadow-lg
                                overflow-hidden
                                hover:shadow-2xl
                                transition
                            "
                        >

                            <img
                                src={prop.image}
                                alt={prop.nameEn}
                                className="
                                    w-full
                                    h-72
                                    object-cover
                                "
                            />

                            <div className="p-6">

                                <h3
                                    className="
                                        text-2xl
                                        font-bold
                                    "
                                >

                                    {
                                        language === "zh"
                                            ? prop.nameZh
                                            : prop.nameEn
                                    }

                                </h3>

                                <p
                                    className="
                                        text-gray-500
                                        mt-2
                                    "
                                >

                                    {
                                        language === "zh"
                                            ? `数量：${prop.quantity}`
                                            : `Quantity: ${prop.quantity}`
                                    }

                                </p>

                                <div
                                    className="
                                        mt-5
                                        flex
                                        justify-between
                                        items-center
                                    "
                                >

                                    <span
                                        className="
                                            text-2xl
                                            font-bold
                                            text-blue-600
                                        "
                                    >

                                        £3

                                    </span>

                                    <span
                                        className="
                                            text-sm
                                            text-gray-500
                                        "
                                    >

                                        1 Day

                                    </span>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </section>



            {/* RENTAL INFORMATION */}

            <section
                className="
                    max-w-5xl
                    mx-auto
                    px-6
                    pb-20
                "
            >

                <div
                    className="
                        bg-white
                        rounded-2xl
                        shadow-lg
                        p-8
                        space-y-4
                    "
                >

                    <h2
                        className="
                            text-3xl
                            font-bold
                            text-[#00539F]
                        "
                    >

                        {
                            language === "zh"
                                ? "租赁须知"
                                : "Rental Information"
                        }

                    </h2>

                    <ul
                        className="
                            list-disc
                            pl-6
                            space-y-3
                            text-gray-700
                            leading-relaxed
                        "
                    >

                        <li>
                            {
                                language === "zh"
                                    ? "所有道具统一 £3 / 件 / 天。"
                                    : "All props are £3 per item per day."
                            }
                        </li>

                        <li>
                            {
                                language === "zh"
                                    ? "所有道具均需按约定时间归还。"
                                    : "All props must be returned on the agreed date."
                            }
                        </li>

                        <li>
                            {
                                language === "zh"
                                    ? "数量有限，先到先得。"
                                    : "Items are subject to availability."
                            }
                        </li>

                        <li>
                            {
                                language === "zh"
                                    ? "遗失或损坏需按实际价值赔偿。"
                                    : "Lost or damaged items may incur replacement charges."
                            }
                        </li>

                        <li>
                            {
                                language === "zh"
                                    ? "可与毕业袍一起租赁。"
                                    : "Props can be rented together with graduation gowns."
                            }
                        </li>

                    </ul>

                </div>

            </section>



            <Footer />

        </div>

    );

}