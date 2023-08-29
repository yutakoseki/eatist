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
];

const Gallery = () => {
    return <Slider items={items} />;
};

export default Gallery;
