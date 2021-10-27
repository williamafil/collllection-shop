import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as ArrowRightIcon } from "../../images/arrow-right.svg";

const ProductGallery = ({ images }) => {
  const [imgs, setImgs] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [translateVal, setTranslateVal] = useState(0);
  const sliderRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    if (images.length) setImgs([...images]);
  }, [images]);

  if (sliderRef.current) {
    sliderRef.current.scrollLeft = 264;
  }

  const onShiftRightHandler = () => {
    if (currentIdx === imgs.length - 1) {
      setCurrentIdx(0);
      setTranslateVal(0);
      return;
    }
    setCurrentIdx((prevState) => (prevState += 1));
    setTranslateVal(
      (prevState) => prevState - imagesRef.current[currentIdx].clientWidth - 24,
    );
  };

  const onSetImgHandler = (index) => {
    setCurrentIdx(index);
  };

  return (
    <>
      <aside className="gallery-mobile md:hidden">
        <div className="h-56 sm:h-64 md:h-72 w-full overflow-hidden">
          <section
            ref={sliderRef}
            className="flex h-full space-x-6"
            style={{
              transform: `translateX(${translateVal}px)`,
              transition: "transform ease-out 0.45s",
            }}
          >
            {imgs.map((image, index) => (
              <img
                key={index}
                className=""
                src={image}
                alt="image"
                ref={(element) => (imagesRef.current[index] = element)}
              />
            ))}
          </section>
        </div>
        <div className="my-6 flex justify-end" onClick={onShiftRightHandler}>
          <ArrowRightIcon className="cursor-pointer" />
        </div>
      </aside>

      <aside className="gallery-desktop hidden md:block">
        <div className="relative h-64 w-full flex">
          <div className="w-3/12 h-full pb-6 px-4 space-y-6 overflow-y-auto">
            {imgs.map((img, index) => (
              <img
                className="cursor-pointer"
                key={index}
                src={img}
                alt="img"
                onClick={(event) => onSetImgHandler(index)}
              />
            ))}
            <div className="w-3/12 h-10 absolute left-0 bottom-0 bg-gradient-to-t from-white" />
          </div>

          <div className="w-9/12">
            <img src={imgs[currentIdx]} alt="img" />
          </div>
        </div>
      </aside>
    </>
  );
};

export default ProductGallery;
