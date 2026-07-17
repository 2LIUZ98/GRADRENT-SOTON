import './App.css';

import {
    Routes,
    Route
} from 'react-router-dom';


import Home from "./views/Home.jsx";
import Booking from "./views/Booking.jsx";
import Auth from "./views/Auth.jsx";
import Staff from "./views/Staff.jsx";
import Customers from "./views/staff/Customers.jsx";
import Inventory from "./views/staff/Inventory.jsx";
import Rentals from "./views/Staff/Rentals.jsx";



export default function App() {


    return (


        <Routes>


            {/* =========================
                PUBLIC WEBSITE
            ========================= */}


            <Route

                path="/"

                element={<Home />}

            />



            {/* =========================
                GRADUATION GOWN BOOKING
            ========================= */}


            <Route

                path="/booking"

                element={<Booking />}

            />

            <Route

    path="/staff"

    element={<Auth />}

/>

<Route

    path="/dashboard"

    element={<Staff />}

/>

<Route
    path="/staff/customers"
    element={<Customers />}
/>

<Route
    path="/staff/inventory"
    element={<Inventory />}
/>

<Route
    path="/staff/rentals"
    element={<Rentals />}
/>



        </Routes>


    );

}