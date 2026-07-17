import './App.css';

import {
    Routes,
    Route
} from 'react-router-dom';


import Home from "./views/Home.jsx";
import Booking from "./views/Booking.jsx";
import Auth from "./views/Auth.jsx";
import Staff from "./views/Staff.jsx";



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


        </Routes>


    );

}