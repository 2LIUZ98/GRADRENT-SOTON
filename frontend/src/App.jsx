import './App.css';

import {
    Routes,
    Route
} from 'react-router-dom';


import Home from "./views/Home";

import Gowns from "./views/Gowns";

import Booking from "./views/Booking";

import HowItWorks from "./views/HowItWorks";

import Contact from "./views/Contact";

import StaffLogin from "./views/StaffLogin";

import Dashboard from "./views/Dashboard";



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



            <Route

                path="/gowns"

                element={<Gowns />}

            />



            <Route

                path="/how-it-works"

                element={<HowItWorks />}

            />



            <Route

                path="/booking"

                element={<Booking />}

            />



            <Route

                path="/contact"

                element={<Contact />}

            />





            {/* =========================
                STAFF SYSTEM
            ========================= */}


            <Route

                path="/staff-login"

                element={<StaffLogin />}

            />



            <Route

                path="/dashboard"

                element={<Dashboard />}

            />



        </Routes>


    );

}