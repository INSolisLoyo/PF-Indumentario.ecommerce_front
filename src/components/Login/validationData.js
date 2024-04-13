const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const validationData = (form, setErrors, setValidation) => {

    let emailError = '';
    let passwordError = '';

    let validationEmail = false;
    let validationPassword = false;

    if(form.email.length === 0){

      emailError = 'Enter your email account';

    } else {

      if(EMAIL_REGEX.test(form.email)){
        
        validationEmail = true;

      } else {
        emailError = 'Enter a valid email';
      }

    }
 
    if(form.password.length === 0){
          
      passwordError = 'Enter your password';
      
    } else {

      validationPassword = true;

    }

    setErrors({
      email: emailError,
      password: passwordError
    })

    setValidation({
      email: validationEmail,
      password: validationPassword
    })

  }

export default validationData;