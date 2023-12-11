signUpForm = document.getElementById('signUpForm')
passInput = document.getElementById('passInput')
passConfirmInput = document.getElementById('passConfirmInput')

signUpForm.addEventListener('submit', (event) => {
  let pass = passInput.value
  let confirmPass = passConfirmInput.value
  if(pass != confirmPass){
    event.preventDefault()
  }
  else{
    signUpForm.submit()
  }
})