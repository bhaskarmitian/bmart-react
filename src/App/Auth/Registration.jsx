import React from "react";
import { useForm } from "react-hook-form";

const Registration=()=>{
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  }
  console.log(watch("firstName"));
  return(
<div className="register">
  <div className="container">
    <h2>Register Here</h2>
    <div className="login-form-grids">
      <h5>profile information</h5>
      <form action="#" method="post" onSubmit={handleSubmit(onSubmit)}>
        <input  name="firstName" type="text" placeholder="First Name..."  ref={register({ required: true })} />
        {errors.firstName && <span>This field is required</span>}
        <input type="text" placeholder="Last Name..." required=" " />
      <div className="register-check-box">
        <div className="check">
          <label className="checkbox"><input type="checkbox" name="checkbox" /><i> </i>Subscribe to Newsletter</label>
        </div>
      </div>
      <h6>Login information</h6>
     
        <input type="email" placeholder="Email Address" required=" " />
        <input type="password" placeholder="Password" required=" " />
        <input type="password" placeholder="Password Confirmation" required=" " />
        <div className="register-check-box">
          <div className="check">
            <label className="checkbox"><input type="checkbox" name="checkbox" /><i> </i>I accept the terms and conditions</label>
          </div>
        </div>
        <input type="submit" value="" />
      </form>
    </div>
    <div className="register-home">
      <a >Home</a>
    </div>
  </div>
</div>


  )
}


export default Registration;