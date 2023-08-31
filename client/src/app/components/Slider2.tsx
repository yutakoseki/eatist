"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import apiClient from "@/lib/apiClient";
import MusicPlayer from "./MusicPlayer/MusicPlayer";
import Image from "next/image";

// カルーセルにする画像のソースをリストにします
const images = ["https://raw.githubusercontent.com/yutakoseki/vocallery-storage/master/images/userid/img_1.jpg", "https://swiperjs.com/demos/images/nature-2.jpg", "https://swiperjs.com/demos/images/nature-3.jpg", "https://swiperjs.com/demos/images/nature-4.jpg", "https://swiperjs.com/demos/images/nature-5.jpg", "https://swiperjs.com/demos/images/nature-6.jpg", "https://swiperjs.com/demos/images/nature-7.jpg", "https://swiperjs.com/demos/images/nature-8.jpg", "https://swiperjs.com/demos/images/nature-9.jpg", "https://swiperjs.com/demos/images/nature-10.jpg"];

const wallPaper = "https://raw.githubusercontent.com/yutakoseki/vocallery-storage/master/wallpaper/default/philippe-ramakers-GEc9p9avZP8-unsplash.jpg";

export default function Slider2() {
    const [gallery, setGallery] = useState([]);
    // 初回に画像を読み込み
    useEffect(() => {
        const fetchLatestPosts = async () => {
            try {
                const response = await apiClient.get("/gallery/get_latest_image");
                setGallery(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchLatestPosts();
    }, []);
    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                speed={1000}
                spaceBetween={50}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={{
                    el: null, //ページネーション要素
                    type: "bullets", //ページネーション種類
                    clickable: true,
                }}
                // 自動スライド
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
                // レスポンシブ
                breakpoints={{
                    601: { slidesPerView: 1 },
                    1025: { slidesPerView: 3 },
                }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                {images.map((src: string, index: number) => {
                    return (
                        <SwiperSlide key={`${index}`}>
                            <div className="w-10/12 mx-auto">
                                <Image className="p-4 border-solid border-8 border-x-slate-500/50 border-y-slate-800/50 shadow-lg shadow-slate-500/40 bg-slate-50/75 max-h-96" src={src} width={600} height={400} />
                                <div className="mt-4 flex justify-center items-center">title</div>
                            </div>
                        </SwiperSlide>
                    );
                })}
                <div className="mx-3 xs:my-10 flex justify-center items-center">
                    <MusicPlayer />
                </div>
            </Swiper>

            <div className={`fixed top-0 left-0 w-full h-screen z-[-1]`}>
                <Image className="blur-sm" src={wallPaper} layout={`fill`} objectFit={`cover`} />
            </div>
        </>
    );
}
