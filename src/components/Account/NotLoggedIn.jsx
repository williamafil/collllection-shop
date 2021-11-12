import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { pathToLogin, pathToSignup } from "../../router";

const NotLoggedIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();

  const redirectPageHandler = (path) => {
    if (pathname !== path) history.push(path);
    dispatch(uiActions.closeOverlay());
  };

  return (
    <ul className="mt-28 space-y-4 tracking-wide">
      <li>
        <span
          onClick={() => redirectPageHandler(pathToLogin)}
          className="py-1 pr-2 cursor-pointer"
        >
          Log in
        </span>
      </li>
      <li
        onClick={() => redirectPageHandler(pathToSignup)}
        className="py-1 pr-2 cursor-pointer"
      >
        Create account
      </li>
    </ul>
  );
};

export default NotLoggedIn;
