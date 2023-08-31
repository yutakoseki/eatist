"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slider from "./slider.module.scss";
import { useEffect, useState } from "react";
import apiClient from "@/lib/apiClient";

// カルーセルにする画像のソースをリストにします
const images = ["/dummy/1.jpg", "/dummy/2.jpg", "/dummy/3.jpg", "/dummy/4.jpg", "/dummy/5.jpg", "/dummy/6.jpg", "/dummy/7.jpg", "/dummy/8.jpg", "/dummy/9.jpg", "/dummy/10.jpg"];

const Slider = () => {
    return (
        <div className="h-screen">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={-100}
                pagination={{
                    el: null, //ページネーション要素
                    type: "bullets", //ページネーション種類
                    clickable: true,
                }} //何枚目のスライドかを示すアイコン、スライドの下の方にある
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                breakpoints={{
                    601: { slidesPerView: 1 },
                    1025: { slidesPerView: 3 },
                }}
            >
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
        </div>
    );
};

export default Slider;
