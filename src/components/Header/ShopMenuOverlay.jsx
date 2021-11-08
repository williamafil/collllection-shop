import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { uiActions } from "../../store/ui-slice";
import { ReactComponent as ArrowDownLeft } from "../../images/arrow-down-left.svg";
import { pathToHome } from "../../router";

const ShopMenuOverlay = () => {
  const dispatch = useDispatch();
  const history = useHistory();
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

  const switchOverlayComponentHandler = (componentName) => {
    dispatch(uiActions.switchOverlayComponent(componentName));
  };

  const shopHandler = () => {
    history.push(pathToHome);
    dispatch(uiActions.closeOverlay());
  };

  const redirectPageHandler = (path) => {
    history.push(`/collections/${path}`);
    dispatch(uiActions.closeOverlay());
  };

  return (
    <div>
      <div className="lg:hidden fixed top-6 left-6">
        <div
          onClick={() => switchOverlayComponentHandler("mobileNav")}
          className="inline-block"
        >
          <ArrowDownLeft className="cursor-pointer transform rotate-45" />
        </div>
      </div>

      <div
        onClick={shopHandler}
        className="mb-12 inline-block border-b border-lightOrange-800 cursor-pointer"
      >
        <h2 className="uppercase">Shop</h2>
      </div>

      <ul className="text-3xl leading-7 tracking-wider uppercase space-y-8">
        {categories.map((category) => (
          <li key={category.id}>
            <span
              onClick={() => redirectPageHandler(category.id)}
              className="cursor-pointer hover:text-black"
            >
              {category.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopMenuOverlay;
