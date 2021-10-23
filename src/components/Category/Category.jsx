import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { categoryActions } from "../../store/category-slice";
import { db } from "../../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const Category = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const { pathName } = useParams();
  const [currentCategory, setCurrentCategory] = useState(null);

  useEffect(async () => {
    if (!categories.length) {
      const categoriesSnapshot = await getDocs(collection(db, "categories"));
      const categoriesData = categoriesSnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      dispatch(categoryActions.setCategories(categoriesData));

      const result = await categoriesData.filter(
        (item) => item.pathName === pathName,
      );
      setCurrentCategory(result[0]);
    }
  }, [categories]);

  useEffect(async () => {
    const categoriesRef = await collection(db, "categories");
    const q = query(categoriesRef, where("pathName", "==", pathName));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });

    const productsRef = await collection(db, "products");
    // const productQuery = query(productsRef, where("categoryId", "==", pathName));
  }, []);

  return <div>{pathName}</div>;
};

export default Category;
