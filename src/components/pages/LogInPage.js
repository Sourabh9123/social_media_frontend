import React, {useState} from "react";
import { useLoginMutation } from "../../services/accounts";
import { storetoken } from "../../services/LocalStorageService";
export default function LogInPage() {

    const [login] = useLoginMutation()

    const [formData, setFormData] = useState({
        email: "",
        password: ""
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
            password: formData.password,
            email: formData.email,
          };
        
          const response = await login(dataToSend)

          if(!response.error){
            storetoken(response.data.token)
          }
          

    
    
      };
      

  return (
    <div  className="container sign-up-from">
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
        onChange={onInputChange}
          value={formData.email}
          type="email"
          name="email"
          className="form-control"
          
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
        name="password"
         value={formData.password}
          type="password"
          className="form-control"
          onChange={onInputChange}
        />
      </div>
      
      <button type="submit"  disabled={formData.email === ""  && formData.password ===""}   className="btn btn-primary" >
        Submit
      </button>
    </form>
  </div>
  )
}







        // const response = await fetch("http://127.0.0.1:8000/api/account/login/", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(dataToSend),
        // });



        
        // if (response.status === 200) {
        //   const data_from_backend = await response.json();
        //   console.log(data_from_backend)
        // } else if (response.status === 401) {
        //   console.log(response.status);
        //   console.log("Errorrrrrrrrrrrrr",response.status);

        // }