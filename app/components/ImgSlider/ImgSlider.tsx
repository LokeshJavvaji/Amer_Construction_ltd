import Slider from "@/components/Slider/Slider";

export default function ImgSlider() {
    const images = [
  "/s1.jpg",
  "/s2.webp",
  "/s3.webp",
  "/s4.webp",
  "/s6.webp",
  "/s5.webp"
];

    return (
        <div className="w-full">
            <Slider images={images} />
            <p></p>
        </div>
    );
}
