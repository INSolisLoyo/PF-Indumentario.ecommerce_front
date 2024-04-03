import React, {useState} from "react";
import NavBar from "../Navbar/Navbar";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Register() {
  
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {

    let errors = {};

    // name
    if (typeof formData.name !== 'string') {
      errors.name = "Name must be a string";
    } else if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (formData.name.trim().length > 30) {
      errors.name = "Name should not exceed 30 characters";
    }
    // lastname
    if (typeof formData.lastname !== 'string') {
      errors.lastname = "Lastname must be a string";
    } else if (!formData.lastname.trim()) {
      errors.lastname = "Lastname is required";
    } else if (formData.lastname.trim().length > 45) {
      errors.lastname = "Lastname should not exceed 45 characters";
    }
    // email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    // password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!?#$]).{8,}$/;
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      errors.password = "Password must contain at least 8 characters including uppercase, lowercase, and special characters !?#$";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:3001/users', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.status === 200) {
          console.log("Form submitted successfully");
        } else {
          console.error("Error submitting form:", response.statusText);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    } else {
      console.log("Form validation failed");
    }
  };


  return (
    <div className="flex justify-center items-center h-full pt-[60px] lg:pt-[100px] overflow-hidden ">
      <div className="text-center">
        <h1 className="text-[25px] ">Register</h1>
        <div className="form w-[800px] h-[500px] mt-[30px] lg:mt-[30px] ">
          <form onSubmit={handleSubmit}>
            <div className="name-lastname flex  lg:flex-row justify-center ">

              <div className="name mb-[20px] lg:mr-[50px] mr-[15px]  ">
                <label className="block mb-[5px] " htmlFor="">
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className=" bg-primary rounded-lg p-2 outline-none  w-[150px] lg:w-[190px] text-center "
                />
                {errors.name && <div className="text-red-500">{errors.name}</div>}
              </div>


              <div className="lastname mb-[20px] lg:ml-[50px] ">
                <label className="block mb-[5px] " htmlFor="">
                  LASTNAME
                </label>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  className=" bg-primary rounded-lg p-2 outline-none  w-[150px] lg:w-[190px] text-center "
                />
                {errors.lastname && <div className="text-red-500">{errors.lastname}</div>}
              </div>
            </div>

            <div className="password block mb-[20px] lg:mt-[20px] ">
              <label className="block mb-[5px] " htmlFor="">
                PASSWORD
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className=" bg-primary rounded-lg p-2 outline-none w-[200px] lg:w-[250px] text-center "
              />
              {errors.password && <div className="text-red-500">{errors.password}</div>}
            </div>

            <div className="email block m-1 ">
              <label className="block mb-[5px] " htmlFor="">
                EMAIL
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className=" bg-primary rounded-lg p-2 outline-none w-[200px] lg:w-[250px] text-center "
              />
              {errors.email && <div className="text-red-500">{errors.email}</div>}
            </div>

            <div className="checkboxs text-[10px] mt-[30px] text-left ml-[270px] tracking-[1px]">
              <label className=" mr-[5px] " htmlFor="">
                I WANT TO RECEIVE INFORMATION IN MY EMAIL
              </label>
              <input className="align-middle outline-none " type="checkbox" />
            </div>

            <div className="checkboxs text-[10px] mt-[10px] text-left ml-[270px] tracking-[1px] ">
              <label className=" mr-[97px] " htmlFor="">
                I ACCEPT THE PRIVACY POLICY
              </label>
              <input className="align-middle outline-none " type="checkbox" />
            </div>

            <div className="button mt-[20px] bg-primary w-[90px] p-2 rounded-lg m-auto ">
              <input type="submit" value="Sign up" />
            </div>

            <div className=" flex justify-center mt-[10px] ">
              <div className="bar-1 w-[100px] h-[1px] bg-black  "></div>
              <p className="align-middle">or sign up with</p>
              <div className="bar-2 w-[100px] h-[1px] bg-black "></div>
            </div>

            <div className="socials">
              <div className="fb">
                <button >
                <FontAwesomeIcon icon="fa-brands fa-facebook" style={{color: "#0c5be4",}} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
