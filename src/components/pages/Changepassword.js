import React, { useState } from "react";
import { useChangepasswordMutation } from "../../services/accounts";
import { getToken } from "../../services/LocalStorageService";


function Changepassword() {
  const [changepassword,{isError}] = useChangepasswordMutation()

  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
  });

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
    console.log("Form Data:", formData);
    let dataToSend = null;
    dataToSend = await {
      new_password: formData.newPassword,
      old_password: formData.oldPassword,
    };
    console.log("im to be sent", dataToSend);

    // const response = await fetch(
    //   "http://127.0.0.1:8000/api/account/change-passowrd/",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(dataToSend),
    //   }
    // );
    const token = getToken()
    console.log(token)
    const response = changepassword(dataToSend,token)
    if(!isError){
      console.log(
        "good work"
      )
    }


    if (response.status === 200) {
      console.log("inside status 200", dataToSend);
    } else if (response.status === 400) {
      console.log(response.status);
      console.log("Errorrrrrrrrrrrrr", response.status);
    }
  };

  return (
    <div className="container sign-up-from">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Old Pasword
          </label>
          <input
            required
            onChange={onInputChange}
            value={formData.oldPassword}
            name="oldPassword"
            type="password"
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            New Password
          </label>
          <input
            required
            name="newPassword"
            value={formData.newPassword}
            type="password"
            className="form-control"
            onChange={onInputChange}
          />
        </div>

        <button type="submit"     disabled={formData.oldPassword === ""  && formData.newPassword===""}  className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Changepassword;
