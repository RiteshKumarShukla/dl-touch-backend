const express = require("express");
require("dotenv").config();
const connectDB = require("./configs/db");
const cors = require("cors");
const colors = require("colors");
const productRoute = require("./routes/productRoutes");
const cartRoute = require("./routes/cartRoute");
const userRoute = require("./routes/userRoutes");

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

app.use("/users", userRoute);
app.use("/products",productRoute)
app.use("/cart", cartRoute);
//default home

app.use("/", (req, res) => {
    res.status(200).send("Home Page");
});

app.listen(process.env.port, async () => {
    try {
        await connectDB;
        console.log(colors.rainbow("DB connected"));
    } catch (error) {
        console.log(error);
    }
    console.log(
        `Your server is running at http://localhost:${process.env.port}`.bgWhite
            .blue
    );
});