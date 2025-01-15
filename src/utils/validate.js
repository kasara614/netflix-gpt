export const checkValidData = (email, password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isNameValid = /(^[A-Za-z]{2,16})([ ]{0,1})([A-Za-z]{1,16})?([ ]{0,1})?([A-Za-z]{1,16})/.test(name);

  if (!isEmailValid) return "Please enter a valid email address";
  if (!isPasswordValid) return "Your password must contain 8 Characters";
  if (!isNameValid) return "Please Enter Full Name";

  return null;

};