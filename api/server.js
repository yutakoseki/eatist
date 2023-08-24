require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./routers/auth");
const cors = require("cors");

// PORTは適当
const PORT = 5050;

// TODO テスト用
// app.get("/", (req, res) => {
//     res.send("<h1>Hello world</h1>");
// })

// Expressの設定
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.listen(PORT, () => console.log(`sercer is running on Port ${PORT}`));
