import "dotenv/config";

import express from "express";
import cors from "cors";
import ViteExpress from "vite-express";

import customersRouter from "./routes/customer.mjs";
import inventoryRouter from "./routes/inventory.mjs";
import productsRouter from "./routes/products.mjs";
import rentalsRouter from "./routes/rentals.mjs";
import paymentsRouter from "./routes/payments.mjs";
import returnsRouter from "./routes/returns.mjs";
import statusRouter from "./routes/status.mjs";
import staffRouter from "./routes/staff.mjs";


// =====================================
// INITIALISE EXPRESS
// =====================================
const app = express();


// =====================================
// MIDDLEWARE
// =====================================
app.use(cors());

app.use(express.json());


// =====================================
// REGISTER ROUTES
// =====================================
app.use("/customers", customersRouter);

app.use("/inventory", inventoryRouter);

app.use("/products", productsRouter);

app.use("/rentals", rentalsRouter);

app.use("/payments", paymentsRouter);

app.use("/returns", returnsRouter);

app.use("/status", statusRouter);

app.use("/staff", staffRouter);


// =====================================
// START SERVER
// =====================================
ViteExpress.listen(app, 3000, () => {

    console.log("====================================");
    console.log("🎓 Graduation Gown Rental System");
    console.log("====================================");

});