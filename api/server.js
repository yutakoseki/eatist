const express = require("express");
const app = express();

// PORTは適当
const PORT = 5000;

// api作成
// TODO テスト用
// app.get("/", (req, res) => {
//     res.send("<h1>Hello</h1>");
// })


app.listen(PORT, () => console.log(`sercer is running on Port ${PORT}`));