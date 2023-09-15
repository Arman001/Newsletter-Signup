const signupButton = document.getElementById("signupButton");
const signup = document.getElementById("signup");
const success = document.getElementById("success");
const successButton = document.getElementById("successButton");

signupButton.addEventListener("click", () => {
  const successEmail = document.getElementById("successEmail");
  const emailInput = document.getElementById("emailAddress");
  const validationError = document.getElementById("signupError");
  const email = emailInput.value.trim();
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailPattern.test(email)) {
    validationError.style.display = "none";
    emailInput.classList.add("signup--normal");
    emailInput.classList.remove("signup--error");
    emailInput.value = "";
    signup.style.display = "none";
    success.style.display = "flex";
    successEmail.textContent = email;
  } else {
    validationError.style.display = "block";
    emailInput.classList.remove("signup--normal");
    emailInput.classList.add("signup--error");
  }
});


successButton.addEventListener("click", () => {
  signup.style.display = "flex";
  success.style.display = "none";
});



const sizeChange = ()=>{
  const signupImage = document.getElementById('signupImage');
  if(window.innerWidth>800){
    signupImage.src = '../assets/images/illustration-sign-up-desktop.svg';
  }
  else{
    
    signupImage.src = '../assets/images/illustration-sign-up-mobile.svg';
  }
}

window.addEventListener('resize', sizeChange);
sizeChange();

