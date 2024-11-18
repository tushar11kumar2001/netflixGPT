

const formValidation = (email,password)=>{

  const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  if(!validEmail) return "invalid email";
  if(password !== undefined) {
    const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!validPassword) return "invalid password";
  };
  

  return null;
}

export default formValidation;