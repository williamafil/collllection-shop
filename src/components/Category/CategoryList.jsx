import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryActions } from "../../store/category-slice";
import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import CategoryListItem from "./CategoryListItem";
import CategorySkeleton from "./CategorySkeleton";

const CategoryList = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const [isLoading, setIsLoading] = useState(false);

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
  }, []);

  return (
    <section className="category-wrapper pt-28 pb-20 flex flex-col gap-y-16 lg:flex-row lg:justify-between lg:flex-wrap">
      {isLoading && <CategorySkeleton />}
      {!isLoading &&
        categories.map(({ id, ...restProps }, index) => (
          <CategoryListItem
            key={id}
            {...restProps}
            className={index % 2 === 1 ? "lg:translate-y-16" : ""}
          />
        ))}
    </section>
  );
};

export default CategoryList;
