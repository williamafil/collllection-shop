import React from "react";
import { Link } from "react-router-dom";
import clxs from "../../utils/clxs";

const CategoryListItem = React.forwardRef((props, ref) => {
  const { title, imageUrl, pathName } = props;

  return (
    <Link
      ref={ref}
      to={`/collections/${pathName}`}
      className={clxs("category-card relative w-5/12")}
    >
      <div className="relative">
        <h2
          className={clxs(
            "z-10 absolute left-5 top-6",
            "text-4xl md:text-5xl lg:text-7xl font-thin tracking-wide",
          )}
        >
          {title}
        </h2>
      </div>
      <img className="w-full " src={imageUrl} alt={title} />
    </Link>
  );
});

export default CategoryListItem;
