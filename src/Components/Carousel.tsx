import React, { useState } from "react";
import image1 from "../assets/images/fitness-posted-by-zoey-sellers.jpg";
import image2 from "../assets/images/gym-images.jpg";
import image3 from "../assets/images/pull_up.jpg";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

type Props = {};

function Carousel({}: Props) {
  const [currentIndex, setCurrentIndex] = useState<any>(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const slides = [
    {
      url: image1,
      caption: "Strength is the product of struggle, you must do what others don’t to achieve what others won’t.", // Add caption for image 1
    },
    {
      url: image2,
      caption: "Success isn’t always about greatness. It’s about consistency. Consistent hard work gains success. Greatness will come.”", // Add caption for image 2
    },
    {
      url: image3,
      caption: "“Training gives us an outlet for suppressed energies created by stress and thus tones the spirit just as exercise conditions the body.”", // Add caption for image 3
    },
  ];
  return (
    <div
      className="max-w-[1500px] h-[780px] w-full m-auto py-16 px-4 relative group items-center"
      style={{ backgroundSize: "cover" }}
    >
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          backgroundPosition: "center 30%",
        }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 relative"
      >
    <div className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white, items-center p-4">
          {/* Display caption text */}
          <p className="text-white">{slides[currentIndex].caption}</p>
        </div>
        <div className="hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <CircleChevronLeft size={25} onClick={prevSlide} />
        </div>
        <div className="hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <CircleChevronRight size={25} onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
