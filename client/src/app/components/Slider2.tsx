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

// カルーセルにする画像のソースをリストにします
const images = ["/dummy/1.jpg", "/dummy/2.jpg", "/dummy/3.jpg", "/dummy/4.jpg", "/dummy/5.jpg", "/dummy/6.jpg", "/dummy/7.jpg", "/dummy/8.jpg", "/dummy/9.jpg", "/dummy/10.jpg"];

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
                spaceBetween={50}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{
                    el: null, //ページネーション要素
                    type: "bullets", //ページネーション種類
                    clickable: true,
                }}
                // 自動スライド
                loop={true}
                autoplay={{
                    delay: 2500,
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
                {/* <SwiperSlide>
                    <img src="https://raw.githubusercontent.com/yutakoseki/vocallery-storage/master/images/userid/img_1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide> */}

{images.map((src: string, index: number) => {
                    return (
                        <SwiperSlide key={`${index}`}>
                            <div className="w-full flex justify-center items-center">
                                <div className={slider.container}>
                                    <Image className="overflow-hidden" layout="fixed" src={src} width={500} height={300} alt="image" />
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
}
