import Header from "./Header";
import { useState } from "react";

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const clickHandler = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_large.jpg"
          alt="background-img"
        />
      </div>
      <form className="absolute p-12 bg-black w-4/12 my-24 mx-auto left-0 right-0 flex flex-col text-white gap-2 opacity-95 rounded-lg">
        <h1 className="text-3xl font-bold">
          {"Sign " + (isSignInForm === true ? "In" : "Up")}
        </h1>

        <div className="mt-8 flex flex-col mb-4">
          {!isSignInForm ? (
            <>
              <input
                type="text"
                placeholder="Full Name"
                className="p-2 border bg-inherit rounded-sm"
              />
            </>
          ) : null}
          <input
            type="text"
            placeholder="Email or mobile number"
            className="p-2 border bg-inherit rounded-sm mt-4"
          />

          <input
            type="password"
            placeholder="Password"
            className="p-2 border bg-inherit rounded-sm mt-4"
          />
        </div>

        <button className="cursor-pointer bg-red-700 rounded-sm hover:bg-red-800 py-2">
          {"Sign-" + (isSignInForm === true ? "In" : "Up")}
        </button>

        {isSignInForm === true ? (
          <>
            <p className="text-center my-2">OR</p>
            <button className="cursor-pointer bg-gray-800 hover:bg-gray-900 rounded-sm py-2">
              Use a sign-in code
            </button>
          </>
        ) : null}

        <p className="text-gray-400 my-4">
          {isSignInForm ? "New to Netflix?" : "Already registered?"}&nbsp;
          <span
            className="text-white hover:border-b cursor-pointer"
            onClick={clickHandler}
          >
            Sign {isSignInForm ? "up" : "in"} now.
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
