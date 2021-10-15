import React from "react";
import clxs from "../../util/clxs";

const CategorySkeleton = () => {
  return (
    <section
      className={clxs(
        "animate-pulse category-wrapper w-full pb-20 flex flex-col gap-y-16 lg:flex-row lg:justify-between lg:flex-wrap",
      )}
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
  );
};

export default CategorySkeleton;
