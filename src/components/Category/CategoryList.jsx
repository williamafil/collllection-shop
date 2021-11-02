import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useDispatch, useSelector } from "react-redux";
import { categoryActions } from "../../store/category-slice";
import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import CategoryListItem from "./CategoryListItem";
import CategorySkeleton from "./CategorySkeleton";

const tl = gsap.timeline();

const CategoryList = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const [isLoading, setIsLoading] = useState(false);
  const listRef = useRef([]);

  useEffect(async () => {
    if (!categories.length) {
      setIsLoading(true);

      const categoriesSnapshot = await getDocs(collection(db, "categories"));
      const categoriesData = categoriesSnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      dispatch(categoryActions.setCategories(categoriesData));
      setIsLoading(false);
    }

    tl.from(listRef.current, 8, { autoAlpha: 0, delay: 0.6, stagger: 3 });
  }, []);

  return (
    <>
      <section className="category-wrapper w-1/2 md:w-full pt-10 pb-16">
        {isLoading && <CategorySkeleton show={isLoading} />}
        {!isLoading && (
          <div className="max-w-7xl mx-auto md:masonry-col-2  before:box-inherit after:box-inherit">
            {categories.map(({ id, ...restProps }, index) => (
              <div key={id} className="mb-8 break-inside mt-12">
                <CategoryListItem
                  ref={(element) => (listRef.current[index] = element)}
                  key={id}
                  {...restProps}
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default CategoryList;
