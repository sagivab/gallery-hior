import { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
  const jumpToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative h-3/4 flex flex-col justify-center items-center">
      <div className="group absolute w-full h-2/5">
        <div
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 left-8 text-5xl text-navbar z-10 cursor-pointer opacity-0 group-hover:opacity-100"
        >
          ❰
        </div>
        <div
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 right-8 text-5xl text-navbar z-10 cursor-pointer opacity-0 group-hover:opacity-100"
        >
          ❱
        </div>
      </div>

      <div className="w-full h-full rounded-2xl bg-contain bg-no-repeat bg-center background-url"></div>
      <div className="flex justify-center">
        {slides.map((slide, slideIndex) => (
          <div
            // style={dotStyle}
            className="text-xl cursor-pointer mx-1"
            key={slideIndex}
            onClick={() => jumpToSlide(slideIndex)}
          >
            {slideIndex == currentIndex ? "●" : "○"}
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .background-url {
            background-image: url(${slides[currentIndex].url});
          }
        `}
      </style>
    </div>
  );
};

export default ImageSlider;
