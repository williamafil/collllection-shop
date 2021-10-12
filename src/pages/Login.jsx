import React from "react";

const Login = () => {
  return (
    <section className="Login py-28">
      <div className="container mx-auto px-5">
        <div className="px-16 flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h2 className="mb-4 text-4xl">Login</h2>
            <p className="text-sm tracking-wide">Return to Store</p>
          </div>
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <form>
              <fieldset className="mt-5 lg:mt-0">
                <label>Email</label>
                <input
                  className="w-full mt-2.5 py-2.5 px-5 tracking-wide border border-black bg-transparent"
                  type="email"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset className="mt-5">
                <label>Password</label>
                <input
                  className="w-full mt-2.5 py-2.5 px-5 tracking-widest border border-black bg-transparent"
                  type="password"
                  placeholder="Password"
                />
              </fieldset>
              <fieldset className="mt-5">
                <button className="w-full mt-2.5 py-2.5 px-5 text-center bg-black text-white text-sm hover:bg-dark">
                  Sign In
                </button>

                <button className="w-full mt-2.5 py-2.5 px-5 text-center border border-black text-black text-sm hover:bg-googleBlue hover:border-googleBlue hover:text-white">
                  Sign In with Google
                </button>
              </fieldset>
              <div className="mt-10 flex space-x-5 text-sm tracking-wide">
                <p>Create account</p>
                <p>Forgot your password?</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
