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
import Rentals from "./views/staff/Rental.jsx";
import Products from "./views/staff/Products.jsx";
import Payments from "./views/staff/Payments.jsx";
import Returns from "./views/staff/Returns.jsx";
import Gowns from "./views/Gowns.jsx";
import About from "./views/About.jsx";
import Contact from "./views/Contact.jsx";
import Terms from "./views/Terms.jsx";


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


<Route
    path="/staff/products"
    element={<Products />}
/>

<Route
    path="/staff/payments"
    element={<Payments />}
/>

<Route
    path="/staff/returns"
    element={<Returns />}
/>

<Route
    path="/gowns"
    element={<Gowns />}
/>

<Route
    path="/about"
    element={<About />}
/>

<Route
    path="/contact"
    element={<Contact />}
/>

<Route
    path="/terms"
    element={<Terms />}
/>
        </Routes>


    );

}