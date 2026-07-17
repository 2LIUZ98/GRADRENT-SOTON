// frontend/routes/PrivateRoutes.jsx

import { Outlet, Navigate } from "react-router-dom";
import { Spin } from "antd";


export default function PrivateRoutes() {


    const staff = JSON.parse(
        localStorage.getItem("staff")
    );


    const loading = false;



    if (loading) {

        return (

            <div className="
                min-h-screen
                flex
                items-center
                justify-center
            ">

                <Spin size="large" />

            </div>

        );

    }



    return staff ? (

        <Outlet />

    ) : (

        <Navigate
            to="/staff-login"
            replace
        />

    );


}