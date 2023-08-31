require("dotenv").config();
const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const isAuthenticated = require("../middlewares/isAuthenticated");

// Prisma初期化
const prisma = new PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL,
        },
    },
});

// アップロード画像パス登録用API
router.post("/register", isAuthenticated, async (req, res) => {
    try {
        const newImage = await prisma.gallery.create({
            data: {
                imagename: req.body.imageName,
                uploadimagename: req.body.uploadImageName,
                filepath: req.body.urlPath,
                authorId: parseInt(req.body.userid),
            },
            include: {
                author: true,
            },
        });

        res.status(201).json(newImage);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "サーバーエラーです。" });
    }
});

module.exports = router;
