import './App.css';

import {
    Routes,
    Route
} from 'react-router-dom';


import Home from "./views/Home.jsx";
import Booking from "./views/Booking.jsx";



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


        </Routes>


    );

}