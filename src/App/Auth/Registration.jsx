import React from "react";
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';

 const Registration=(props)=>{
   console.log(props);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    ///Server Side Codes Goes here
    console.log(data);
  }
  console.log(watch("firstName"));
  return(
<div className="register">
  <div className="container">
  <h2>Register Here</h2>
  <div className="login-form-grids">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input  name="firstName" type="text" placeholder="First Name..."  ref={register({ required: true })} /><br></br>
        {errors.firstName && <span style={{color: "red"}}>This field is required</span>}<br></br>
       
        <div className="register-check-box">
        <div className="check">
          <label className="checkbox"><input type="checkbox" name="checkbox" /><i> </i>Subscribe to Newsletter</label>
        </div>
        </div>
        <h6>Login information</h6>
        <input  name="email"  type="text" placeholder="Email..."  ref={register({ required: true,
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "invalid email address"
        }
        })} /><br></br>
    
        {errors.email && <span style={{color: "red"}}>{errors.email.message}</span>}<br></br>
        <input  name="password" type="password" placeholder="password..."  ref={register({ required: true })} /><br></br>
        {errors.password && <span style={{color: "red"}}>This field is required</span>}<br></br>
        <input  name="passwordConfirmation" type="password" placeholder="password Confirmation..."  ref={register({ required: true })} /><br></br>
        {errors.passwordConfirmation && <span style={{color: "red"}}>This field is required</span>}<br></br>
        <div className="register-check-box">
          <div className="check">
            <label className="checkbox"><input type="checkbox" name="checkbox" /><i> </i>I accept the terms and conditions</label>
          </div>
        </div>
        <input type="submit" value="Submit" /><br></br>
      </form>
     
      </div>
      <div className="register-home">
      <a >Home</a>
    </div>
      </div></div>


  )
}

const mapStateToProps=(state)=>{
  return{ registration: state.loginReducer};
}
export default connect(mapStateToProps, null)(Registration);
