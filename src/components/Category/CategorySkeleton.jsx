import React, { useState, useEffect } from "react";
import clxs from "../../utils/clxs";

const CategorySkeleton = ({ show }) => {
  const [render, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, []);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    render && (
      <>
        <div className="relative mb-8 break-inside mt-12 w-full h-56 sm:h-80 md:h-96 bg-gray-200 animate-pulse">
          <div className="bg-gray-300 h-8 w-48 absolute left-5 top-4"></div>
        </div>
        <div className="relative mb-8 break-inside mt-12 w-full h-56 sm:h-80 md:h-96 bg-gray-200 animate-pulse">
          <div className="bg-gray-300 h-8 w-16 absolute left-5 top-4"></div>
          <div className="bg-gray-300 h-8 w-24 absolute left-5 top-12"></div>
        </div>
        <div className="relative mb-8 break-inside mt-12 w-full h-56 sm:h-80 md:h-96 bg-gray-200 animate-pulse">
          <div className="bg-gray-300 h-8 w-32 absolute left-5 top-4"></div>
          <div className="bg-gray-300 h-8 w-8 absolute left-5 top-12"></div>
          <div className="bg-gray-300 h-8 w-32 absolute left-5 top-20"></div>
        </div>
        <div className="relative mb-8 break-inside mt-12 w-full h-28 sm:h-80 md:h-96 bg-gray-200 animate-pulse">
          <div className="bg-gray-300 h-8 w-32 absolute left-5 top-4"></div>
          <div className="bg-gray-300 h-8 w-28 absolute left-5 top-12"></div>
        </div>
        <div className="relative mb-8 break-inside mt-12 w-full h-56 sm:h-80 md:h-96 bg-gray-200 animate-pulse">
          <div className="bg-gray-300 h-8 w-48 absolute left-5 top-4"></div>
        </div>
        <div className="relative mb-8 break-inside mt-12 w-full h-56 sm:h-80 md:h-96 bg-gray-200 animate-pulse">
          <div className="bg-gray-300 h-8 w-48 absolute left-5 top-4"></div>
        </div>
        <div className="relative mb-8 break-inside mt-12 w-full h-56 sm:h-80 md:h-96 bg-gray-200 animate-pulse">
          <div className="bg-gray-300 h-8 w-48 absolute left-5 top-4"></div>
        </div>
        <div className="relative mb-8 break-inside mt-12 w-full h-56 sm:h-80 md:h-96 bg-gray-200 animate-pulse">
          <div className="bg-gray-300 h-8 w-48 absolute left-5 top-4"></div>
        </div>
      </>
    )
  );
};

export default CategorySkeleton;
