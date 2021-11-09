import React from "react";

const CategoryItems = () => {
  return (
    <section className="category-wrapper pt-28 pb-20 flex flex-col space-y-16 lg:flex-row lg:justify-between lg:flex-wrap">
      <article className="category-card relative w-5/12">
        <h2 className="absolute left-5 top-5 text-3xl font-thin tracking-wide">
          Accessories
        </h2>

        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1635&q=80"
          alt="accessories image"
        />
      </article>

      <article className="category-card relative w-5/12">
        <h2 className="absolute left-5 top-5 text-3xl font-thin tracking-wide">
          Art Prints
        </h2>

        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
          alt="art prints image"
        />
      </article>

      <article className="category-card relative w-5/12">
        <h2 className="absolute left-5 top-5 text-3xl font-thin tracking-wide">
          Textiles
        </h2>

        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1602185335134-2d072c07703c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHRleHRpbGVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
          alt="textile image"
        />
      </article>

      <article className="category-card relative w-5/12">
        <h2 className="absolute left-5 top-5 text-3xl font-thin tracking-wide">
          Homewares
        </h2>

        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt="homeware image"
        />
      </article>

      <article className="category-card relative w-5/12">
        <h2 className="absolute left-5 top-5 text-3xl font-thin tracking-wide">
          Ceramics & Glass
        </h2>

        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
          alt="ceramics & glass image"
        />
      </article>

      <article className="category-card relative w-5/12">
        <h2 className="absolute left-5 top-5 text-3xl font-thin tracking-wide">
          Jewellry
        </h2>

        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1603970402494-f97dac5a9b53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80"
          alt="jewellery image"
        />
      </article>

      <article className="category-card relative w-5/12">
        <h2 className="absolute left-5 top-5 text-3xl font-thin tracking-wide">
          Paper Goods
        </h2>

        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1531347520814-e80b3cbe3cba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1966&q=80"
          alt="paper goods image"
        />
      </article>

      <article className="category-card relative w-5/12">
        <h2 className="absolute left-5 top-5 text-3xl font-thin tracking-wide">
          Fragrance & Grooming
        </h2>

        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1598121496628-9d8b7578e290?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
          alt="fragrance and grooming image"
        />
      </article>
    </section>
  );
};

export default CategoryItems;
