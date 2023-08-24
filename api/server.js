const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

// PORTは適当
const PORT = 5000;

// api作成
// TODO テスト用
// app.get("/", (req, res) => {
//     res.send("<h1>Hello</h1>");
// })

const prisma = new PrismaClient();
// Expressの設定
app.use(express.json());

// 新規ユーザー登録API
app.post("/api/auth/register", async (req, res) => {
    const { username, email, password } =req.body;

    // パスワードのハッシュ化
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword,
        },
    });
    return res.json({ user });
});
app.listen(PORT, () => console.log(`sercer is running on Port ${PORT}`));