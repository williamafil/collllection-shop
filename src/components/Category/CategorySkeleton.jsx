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
      <section
        className={clxs(
          "category-wrapper",
          "animate-pulse w-full pb-20 gap-y-16",
          "flex flex-col lg:flex-row lg:justify-between lg:flex-wrap",
          show ? "" : "animate-fadeOut",
        )}
        onAnimationEnd={onAnimationEnd}
      >
        <article className="category-card relative w-5/12 ">
          <div className="aspect-w-3 aspect-h-4 bg-lightOrange-150" />
        </article>

        <article className="mt-16 category-card relative w-5/12 ">
          <div className="aspect-w-3 aspect-h-4 bg-lightOrange-200" />
        </article>

        <article className="category-card w-5/12 ">
          <div className="aspect-w-3 aspect-h-4 bg-lightOrange-150" />
        </article>

        <article className="category-card relative w-5/12 ">
          <div className="lg:translate-y-16 aspect-w-3 aspect-h-4 bg-lightOrange-200" />
        </article>

        <article className="category-card relative w-5/12">
          <div className="aspect-w-4 aspect-h-3 bg-lightOrange-150" />
        </article>

        <article className="category-card relative w-5/12">
          <div className="lg:translate-y-16 aspect-w-4 aspect-h-3 bg-lightOrange-200" />
        </article>

        <article className="category-card relative w-5/12">
          <div className="aspect-w-3 aspect-h-4 bg-lightOrange-150" />
        </article>

        <article className="category-card relative w-5/12">
          <div className="lg:translate-y-16 aspect-w-3 aspect-h-4 bg-lightOrange-200" />
        </article>
      </section>
    )
  );
};

export default CategorySkeleton;
