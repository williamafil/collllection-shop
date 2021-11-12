import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase/firebase";
import { uiActions } from "../../store/ui-slice";
import { pathToAccount, pathToHome } from "../../router";

const IsLoggedInAs = ({ currentUser }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();

  const redirectPageHandler = (path) => {
    if (pathname !== path) history.push(path);
    if (path === "signOut") {
      history.push(pathToHome);
      auth.signOut();
      return;
    }
    dispatch(uiActions.closeOverlay());
  };

  return (
    <>
      <ul className="mt-28 space-y-4 tracking-wide">
        {currentUser.firstName !== "" && (
          <li>
            <span
              onClick={() => redirectPageHandler(pathToAccount)}
              className="py-1 pr-2 cursor-pointer"
            >
              Logged in as {currentUser.firstName}
            </span>
          </li>
        )}

        <li>
          <span
            onClick={() => redirectPageHandler("signOut")}
            className="py-1 pr-2 cursor-pointer"
          >
            Log out
          </span>
        </li>
      </ul>
    </>
  );
};

export default IsLoggedInAs;
