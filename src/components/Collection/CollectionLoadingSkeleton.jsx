import React from "react";
import clxs from "../../utils/clxs";

const DUMMY_DATA = [
  {
    h: "h-64",
  },
  {
    h: "h-96",
  },
  {
    h: "h-72",
  },
  {
    h: "h-64",
  },
  {
    h: "h-80",
  },
  {
    h: "h-60",
  },
];

const CollectionLoadingSkeleton = () => {
  return (
    <div className="min-h-screen">
      <div
        className={clxs(
          "h-screen max-w-7xl",
          "sm:masonry-col-2 md:masonry-col-3 lg:masonry-col-3 lg:masonry-col-4",
          "before:box-inherit after:box-inherit",
        )}
      >
        {DUMMY_DATA.map((item, index) => (
          <div key={index} className="pb-8 break-inside animate-pulse">
            {/* <Link to={`/products/${product.slug}`} className=""> */}
            <div className="relative mb-10">
              {/* <img className="" src={product.images[0]} alt={product.title} /> */}
              <div className={clxs("w-full bg-gray-200", item.h)}></div>
              <div className="absolute -bottom-14 left-0">
                <h3 className="py-2 h-6 w-36 bg-gray-100"></h3>
                <h3 className="py-1 h-6 w-16 bg-gray-100"></h3>
              </div>
            </div>
            {/* <img className="" src={product.images[0]} alt={product.title} />
                <div className="">
                  <h3 className="py-2 font-bold leading-4 tracking-wide text-gray-700">
                    {product.title}
                  </h3>
                  <h3 className="py-2 leading-3">${product.price}</h3>
                </div> */}
            {/* </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionLoadingSkeleton;
