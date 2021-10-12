import React, { useState } from "react";

import LoginForm from "../components/Login/LoginForm";
import ResetPasswordForm from "../components/Login/ResetPasswordForm";
import LoginSignupWrapper from "../components/UI/LoginSignupWrapper";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const resetHandler = () => setIsLogin(false);
  const cancelHandler = () => setIsLogin(true);

  return (
    <section className="Login py-28">
      <LoginSignupWrapper sectionTitle="Login">
        {isLogin ? (
          <LoginForm onResetPasswordHandler={resetHandler} />
        ) : (
          <ResetPasswordForm onCancelHandler={cancelHandler} />
        )}
      </LoginSignupWrapper>
    </section>
  );
};

export default Login;
