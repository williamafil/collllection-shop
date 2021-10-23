import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useDispatch, useSelector } from "react-redux";
import { categoryActions } from "../../store/category-slice";
import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import clxs from "../../utils/clxs";

import Category from "./Category/";
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

    tl.from(listRef.current, 1, { autoAlpha: 0, delay: 0.5, stagger: 0.5 });
  }, []);

  return (
    <>
      <section className="category-wrapper pt-28 pb-20 flex flex-col gap-y-16 lg:flex-row lg:justify-between lg:flex-wrap">
        {isLoading && <CategorySkeleton show={isLoading} />}
        {!isLoading &&
          categories.map(({ id, ...restProps }, index) => (
            <CategoryListItem
              ref={(element) => (listRef.current[index] = element)}
              key={id}
              {...restProps}
              className={clxs(index % 2 === 1 ? "lg:translate-y-16" : "", "")}
            />
          ))}
      </section>

      {/* <Switch>
        <Route path={`${path}/collections/:categoryId`}>
          <Category />
        </Route>
      </Switch> */}
    </>
  );
};

export default CategoryList;
