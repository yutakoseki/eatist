"use client";

import Slider from "../components/Slider";

type Item = {
    id: number;
    content: string;
};

// ここにスライダーで表示する内容を書く
const items: Item[] = [
    { id: 1, content: "Slide 1" },
    { id: 2, content: "Slide 2" },
    { id: 3, content: "Slide 3" },
    { id: 4, content: "Slide 4" },
    { id: 5, content: "Slide 5" },
    { id: 6, content: "Slide 6" },
    { id: 7, content: "Slide 7" },
    { id: 8, content: "Slide 8" },
    { id: 9, content: "Slide 9" },
    { id: 10, content: "Slide 10" },
];

const Gallery = () => {
    return <Slider items={items} />;
};

export default Gallery;
