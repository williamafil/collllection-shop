import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { pathToHome } from "../../router";
import SearchForm from "../Form/SearchForm";
import IsLoggedInAs from "../Account/IsLoggedInAs";
import NotLoggedIn from "../Account/NotLoggedIn";

const MobileNavOverlay = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();
  const currentUser = useSelector((state) => state.user.currentUser);
  const [searchKeyword, setSearchKeyword] = useState("");

  const redirectPageHandler = (path) => {
    if (pathname !== path) history.push(path);
    dispatch(uiActions.closeOverlay());
  };

  const switchOverlayComponentHandler = (componentName) => {
    dispatch(uiActions.switchOverlayComponent(componentName));
  };

  const onInputHandler = (event) => {
    setSearchKeyword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (searchKeyword.trim() === "") return;

    history.push(`/search?q=${searchKeyword}`);
    dispatch(uiActions.closeOverlay());
  };

  return (
    <div className="lg:hidden">
      <ul className="text-3xl tracking-wider uppercase space-y-8">
        <li className="cursor-pointer">
          <span onClick={() => redirectPageHandler(pathToHome)}>Main</span>
        </li>
        <li className="cursor-pointer">
          <span onClick={() => switchOverlayComponentHandler("shopMenu")}>
            Shop
          </span>
        </li>
        <li className="cursor-pointer">
          <span onClick={() => switchOverlayComponentHandler("info")}>
            Info
          </span>
        </li>
      </ul>
      <div>
        {!currentUser ? (
          <NotLoggedIn />
        ) : (
          <IsLoggedInAs currentUser={currentUser} />
        )}
      </div>
      <div className="mt-10 max-w-md">
        <SearchForm
          onSubmit={onSubmitHandler}
          onInput={onInputHandler}
          className="border-lightOrange-800 w-full placeholder-lightOrange-800"
        />
      </div>
    </div>
  );
};

export default MobileNavOverlay;
