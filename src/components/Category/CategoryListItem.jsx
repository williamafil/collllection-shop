import React from "react";
import { Link } from "react-router-dom";
import clxs from "../../utils/clxs";

const CategoryListItem = React.forwardRef((props, ref) => {
  const { title, imageUrl, pathName, className } = props;

  return (
    <Link
      ref={ref}
      to={`/collections/${pathName}`}
      // to={`${url}/collections/${pathName}`}
      className={clxs("category-card relative w-5/12", className)}
    >
      <h2 className="absolute left-5 top-5 text-3xl font-thin tracking-wide">
        {title}
      </h2>

      <img className="w-full" src={imageUrl} alt={title} />
    </Link>
  );
});

export default CategoryListItem;
