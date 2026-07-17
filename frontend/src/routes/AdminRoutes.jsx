import { Outlet, Navigate } from "react-router-dom";


export default function AdminRoute() {


    const staff = JSON.parse(
        localStorage.getItem("staff")
    );



    // Not logged in
    if (!staff) {

        return (

            <Navigate
                to="/staff-login"
                replace
            />

        );

    }



    // Logged in but not Admin
    if (staff.Role !== "Admin") {

        return (

            <Navigate
                to="/staff"
                replace
            />

        );

    }



    // Admin access allowed
    return <Outlet />;


}