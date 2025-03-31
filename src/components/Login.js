import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  //   console.log(name);

  const handleValidation = () => {
    //Validation logic inside "validate.js" file
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name
    );
    setErrorMessage(message);

    //Sign up / sign-in
    if (message === null) {
      //create a new user / sign in
      if (!isSignInForm) {
        //sign up logic
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Sign up logic
            const user = userCredential.user;
            // console.log(user);
            updateProfile(user, {
              displayName: name.current.value
            })
              .then(() => {
                // Profile updated!
                console.log(auth);
                const { uid, email, displayName } = auth.currentUser;
                dispatch(
                  addUser({ uid: uid, email: email, displayName: displayName })
                );
                navigate("/browse");
              })
              .catch((error) => {
                // An error occurred
                // ...
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log("errorCode - ", errorCode);
            console.log("errorMessage - ", errorMessage);
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      } else {
        //Sign in logic
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " - " + errorMessage);
          });
      }
    }
  };

  const toggleButton = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
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

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black w-4/12 my-24 mx-auto left-0 right-0 flex flex-col text-white gap-2 opacity-95 rounded-lg"
      >
        <h1 className="text-3xl font-bold">
          {"Sign " + (isSignInForm === true ? "In" : "Up")}
        </h1>

        <div className="mt-8 flex flex-col mb-4">
          {!isSignInForm ? (
            <>
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="p-2 border bg-inherit rounded-sm"
              />
            </>
          ) : null}
          <input
            ref={email}
            type="text"
            placeholder="Email or mobile number"
            className="p-2 border bg-inherit rounded-sm mt-4"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 border bg-inherit rounded-sm mt-4"
          />
        </div>

        <p className="text-red-500 mb-1 font-bold">{errorMessage}</p>

        <button
          className="cursor-pointer bg-red-700 rounded-sm hover:bg-red-800 py-2"
          onClick={handleValidation}
        >
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
            onClick={toggleButton}
          >
            Sign {isSignInForm ? "up" : "in"} now.
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
