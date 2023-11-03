export const checkValidate = (email, password) => {

  const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  const isValidPassword = /^[A-Za-z0-9]\w{7,14}$/.test(password);

  if (!isValidEmail) {
    return "Enter valid email address"
  }
  if (!isValidPassword) {
    return "Enter valid password"
  }
  
  return null;

};
 