import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core"; // "swiper/core" に変更
import "swiper/swiper-bundle.css"; // CSS ファイルのインポート
import slider from "./slider.module.scss";

// SwiperCore で必要なモジュールをインストール
SwiperCore.use([Navigation, Pagination, Autoplay]);

const images = ["/dummy/1.jpg", "/dummy/2.jpg", "/dummy/3.jpg"];

const Slider = () => {
    return (
        <div className="h-screen">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                spaceBetween={10} // 前後のスライドとのスペース
                pagination={{
                    el: null,
                    type: 'bullets',
                    clickable: true,
                }}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
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
