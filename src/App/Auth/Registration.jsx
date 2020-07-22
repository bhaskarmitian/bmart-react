import React ,{useState} from "react";
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

 const Registration=(props)=>{
   const passwordVal=React.useRef();
   console.log(passwordVal.current);
  // console.log(props);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    ///Server Side Codes Goes here
    console.log(data);
  }
  console.log(watch("firstName"));
  //const [isOpened, setIsOpened] = useState(false);
  const [isOpened2, setIsOpened2] = useState(false);
  const [isOpened3, setIsOpened3] = useState(true);


  // function toggle() {
  //   setIsOpened(wasOpened => !wasOpened);
  // }
 
  function toggle(event) {
    console.log('Selected value:', event.target.value);
    if(event.target.value==='indian'){
      setIsOpened2(false);
      setIsOpened3(true);
    }
    if(event.target.value==='others'){
      setIsOpened2(true);
      setIsOpened3(false);
    }
    //setIsOpened(wasOpened => !wasOpened);
  }
 

  return(
<div className="register">
  <div className="container">
  <h2>Register Here</h2>
  <div className="login-form-grids">
  <h6>Login information</h6>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input  name="firstName" type="text" placeholder="First Name..."  ref={register({ required: true })} /><br></br>
        {errors.firstName && <span style={{color: "red"}}>This field is required</span>}<br></br>
       
        <div className="register-check-box">
        
        </div>
       
        <input  name="email"  type="text" placeholder="Email..."  ref={register({ required: true,
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "invalid email address"
        }
        })} /><br></br>
         {errors.email && errors.email.type === "required" && <span style={{color: "red"}}>This is required</span>}
        {errors.email && <span style={{color: "red"}}>{errors.email.message}</span>}<br></br>
        <input  name="password" type="password" placeholder="password..."  ref={register({ required: true })} /><br></br>
        {errors.password && <span style={{color: "red"}}>This field is required</span>}<br></br>
        <input  name="passwordConfirmation" type="password" placeholder="password Confirmation..."  ref={register({ required: true })} /><br></br>
        {errors.passwordConfirmation && <span style={{color: "red"}}>This field is required</span>}<br></br>
       
        {isOpened2 && (
        <div className="boxContent">
           <input  name="passport" ref={passwordVal} type="text" placeholder="passport Details..."  ref={register({ required: true })} /><br></br>
        </div>
      )}

    {isOpened3 && (
        <div className="boxContent">
           <input  name="pan-card" type="text" placeholder="pan card Details..."  ref={register({ required: true })} /><br></br>
        </div>
      )}
       
       
        
       
 
        <div>
  <label className="radio-inline"><input type="radio" name="optradio" defaultChecked />Male</label>
  <label className="radio-inline"><input type="radio" name="optradio" />Female</label>
  <label className="radio-inline"><input type="radio" name="optradio" />Others</label>
</div>
<br></br>

  <select className="form-control" onChange={toggle}>
  <option selected value={"indian"}>Indian</option>
  <option value={"others"}>Others</option>
</select>






        <input type="submit" value="Submit" /><br></br>
      </form>
     
      </div>
      <div className="register-home">
      <Link to="/dashbord"><a >Home</a></Link>
    </div>
      </div></div>


  )
}

const mapStateToProps=(state)=>{
  return{ registration: state.loginReducer};
}
export default connect(mapStateToProps, null)(Registration);
