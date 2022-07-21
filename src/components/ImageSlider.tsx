import { useState } from "react";
import { Slide } from "../../types/slide";

interface ImageSliderProps {
  readonly slides: Slide[];
}

const ImageSlider = ({ slides }: ImageSliderProps): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
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
  const jumpToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative h-full flex flex-col justify-center items-center">
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
            className="text-xl cursor-pointer mx-1"
            key={slide.url}
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
