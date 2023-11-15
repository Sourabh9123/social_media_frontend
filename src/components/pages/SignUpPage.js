import React, { useState } from "react";
import { storetoken } from "../../services/LocalStorageService";
import { useSignupMutation } from "../../services/accounts";

export default function SignUpPage() {
  // const [isSuccess, setIsSuccess] = useState(false);

  const [usersignup, { isLoading, isSuccess , isError}] = useSignupMutation();

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  console.log(isSuccess, isLoading);

  const onInputChange = (e) => {
    // Update the formData state based on the input's name and value
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Access the form data in the formData state
    // console.log("Form Data:", formData);
    let dataToSend = null;
    if (formData.password === formData.confirmPassword) {
      dataToSend = await {
        first_name: formData.firstName,
        last_name: formData.lastName,
        password: formData.password,
        email: formData.email,
      };

      const res = await usersignup(dataToSend);
      if (!isError) {
        storetoken(res.data.token);
      }
    }
  };

  return (
    <>
      <div className="container sign-up-from">
        {isSuccess ? (
          <div>
            <h2 className="text-center ">Signup Successful!</h2>
            <p className="text-center">Thank you for signing up.</p>
          </div>
        ) : (
          <p></p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              name="email"
              type="email"
              onChange={onInputChange}
              value={formData.email}
              className="form-control"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              First Name
            </label>
            <input
              name="firstName"
              onChange={onInputChange}
              value={formData.firstName}
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Last Name
            </label>
            <input
              name="lastName"
              onChange={onInputChange}
              value={formData.lastName}
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              onChange={onInputChange}
              value={formData.password}
              name="password"
              type="password"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              onChange={onInputChange}
              value={formData.confirmPassword}
              name="confirmPassword"
              type="password"
              className="form-control"
            />
          </div>
          <button
            type="submit"
            disabled={formData.password !== formData.confirmPassword}
            className="btn btn-primary"
          >
            submit
          </button>
          {
            formData.password !== formData.confirmPassword ? (
              <div className="text-danger">
                Password and Confirm Password do not match
              </div>
            ) : null // You can use null, an empty string, or any other JSX you want to render when they match
          }
        </form>
      </div>
    </>
  );
}

// const response  = await usersignup(JSON.stringify(dataToSend))
// console.log(response.isSuccess)

//  const response = await fetch("http://127.0.0.1:8000/api/account/signup/", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(dataToSend),
// });

// const response = await fetch("http://127.0.0.1:8000/api/account/signup/", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(dataToSend),
// });

// if (response.status === 201) {
//   setIsSuccess(true);
//   const data_from_backend = await response.json();
//   const token = data_from_backend.token
//   storetoken(token)
//   console.log("data from backend   .........",token)

// let  strtoken = JSON.stringify(token);
// console.log(strtoken)

// } else if (response.status === 400) {
//   console.log(response.status);
// }

// You can perform further actions, such as sending the data to a server

//  const handleSubmit = async (e) =>{
//   e.preventDefault();

//   // Access the form data in the formData state
//   console.log("Form Data:", formData);
//   let dataToSend = null;
//   if (formData.password === formData.confirmPassword) {
//     dataToSend = await {
//       first_name: formData.firstName,
//       last_name: formData.lastName,
//       password: formData.password,
//       email: formData.email,
//     };

//   }

//  }

// const  response = useSignupMutation(handleSubmit())

// console.log(response)
// setIsSuccess(true)
