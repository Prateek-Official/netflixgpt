export const checkValidData = (email, password, name) => {
//   console.log(name);
  if (name.current !== null && name.current.value === "") {
    return "Please enter your name";
  }

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
      password
    );

  if (!isEmailValid) {
    return "Email is not valid!";
  }

  if (!isPasswordValid) {
    return "Password is not valid!";
  }

  return null;
};
