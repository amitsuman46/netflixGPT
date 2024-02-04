export const checkValidData = (name, email, password) => {
  // Optional name validation
  if (name) {
    const isNameValid = /^[a-zA-Z\s'-]+$/.test(name);
    if (!isNameValid) return "Name is not valid";
  }
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email Id is not Valid";
  if (!isPasswordValid) return "Password is not Valid";

  return null;
};
