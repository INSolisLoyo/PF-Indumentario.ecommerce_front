
//! finishhhhhhhhhhhhhhh


const validate = (data, value, errors, setErrors) => {
    const newErrors = { ...errors };
  
    const patternName = /^[a-zA-Z\s]+$/;
    const patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const patternPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!?#$]).{10,30}$/;
    const patternDob = /\d{4}-\d{2}-\d{2}/;
  
    switch (data) {
      case "name":
        if (value.length === 0) {
          newErrors.name = '"Name is required"';
        } else {
          if (value.length > 30) {
            newErrors.name = "Name should not exceed 30 characters";
          } else {
            if (!patternName.test(value)) {
              newErrors.name = "Only enter letters";
            } else {
              if (typeof value !== "string") {
                newErrors.name = "Name must be a string";
              } else {
                newErrors.name = "";
              }
            }
          }
        }
  
        break;
  
      case "lastname":
        if (value.length === 0) {
          newErrors.lastname = '"Lastname is required"';
        } else {
          if (value.length > 30) {
            newErrors.lastname = "Lastname should not exceed 30 characters";
          } else {
            if (!patternName.test(value)) {
              newErrors.lastname = "Only enter letters";
            } else {
              if (typeof value !== "string") {
                newErrors.lastname = "Name must be a string";
              } else {
                newErrors.lastname = "";
              }
            }
          }
        }
        break;
  
      case "dob":
        if (value.length === 0) {
          newErrors.dob = "Date of Birth is required";
        } else {
          if (!patternDob.test(value)) {
            newErrors.dob = "Invalid date of birth format";
          } else {
            newErrors.dob = "";
          }
        }
        break;
  
      case "email":
        if (value.length === 0) {
          newErrors.email = "Email is required";
        } else {
          if (value.length > 30) {
            newErrors.email = "Email should not exceed 30 characters";
          } else {
            if (!patternEmail.test(value)) {
              newErrors.email = "Invalid email format";
            } else {
              if (typeof value !== "string") {
                newErrors.email = "Email must be a string";
              } else {
                newErrors.email = "";
              }
            }
          }
        }
        break;
  
      case "password":
        if (value.length < 10 || value.length > 30) {
          newErrors.password =
            "Password length should be between 10 and 30 characters";
        } else {
          if (!patternPassword.test(value)) {
            newErrors.password =
              "Password must contain at least one lowercase letter, one uppercase letter, and one of the special characters";
          } else {
            if (typeof value !== "string") {
              newErrors.password = "Password invalid";
            } else{
                if(value.length === 0) {
                    newErrors.password = "Password is required";

            } else {
              newErrors.password = "";
            }
        }
          }
        }
        break;
  
      case "phone":
        if (value.length < 6 || value.length > 15) {
          newErrors.phone =
            "Phone length should be between 6 and 15 characters";
        } else {
          if (typeof value !== "string") {
              newErrors.phone = "Phone invalid";
            } else {
              newErrors.phone = "";
            }
          }
        break;
  
        case "adress":
          if (value.length === 0) {
            newErrors.adress = "Address is required";
          } else {
            if (value.length > 30) {
              newErrors.adress = "Address should not exceed 30 characters";
            } else {
              if (typeof value !== "string") {
                  newErrors.adress = "Address must be a string";
                } else {
                  newErrors.adress = "";
                }            
            }
          }
          break;
  
          case "city":
          if (value.length === 0) {
            newErrors.city = "City is required";
          } else {
            if (value.length > 30) {
              newErrors.city = "City should not exceed 30 characters";
            } else {
              if (typeof value !== "string") {
                  newErrors.city = "City must be a string";
                } else {
                  newErrors.city = "";
                }            
            }
          }
          break;
  
          case "country":
          if (value.length === 0) {
            newErrors.country = "Country is required";
          } else {
            if (value.length > 30) {
              newErrors.country = "Country should not exceed 30 characters";
            } else {
              if (typeof value !== "string") {
                  newErrors.country = "Country must be a string";
                } else {
                  newErrors.country = "";
                }            
            }
          }
          break;
  
          case "state":
          if (value.length === 0) {
            newErrors.state = "State is required";
          } else {
            if (value.length > 30) {
              newErrors.state = "State should not exceed 30 characters";
            } else {
              if (typeof value !== "string") {
                  newErrors.state = "State must be a string";
                } else {
                  newErrors.state = "";
                }            
            }
          }
          break;
  
  
          case "zipcode":
              const zipcode = value.toString();
          if (!/^\d+$/.test(zipcode)) {
            newErrors.zipcode = "Zipcode must be an integer";
          } else {
            if (value.length === 0 || value.length > 10 || parseInt(zipcode) < 0 || parseInt(zipcode) > 9999999999) {
              newErrors.zipcode = "Zipcode invalid";
            } else {
                  newErrors.zipcode = "";
                }            
            
          }
          break;
  
  
  
      default:
        break;
    }
  
    setErrors(newErrors);
  };

  export default validate;
  