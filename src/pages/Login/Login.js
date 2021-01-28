import { render } from "@testing-library/react";
import { useState} from "react";
import { useForm } from '../../useForm';

function Login() {
    // update an object
  const [signinValues,SetSigninValues] = useState({
    email: "",
    password: ""
  });
  const handleChange = (event) => {
    SetSigninValues((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }));
  };
//   useState to update a variable 
  const [lastName,setLastName]=useState("");


  const handleAnswerChange=event=>{
    if(event.key === 'y'){
        alert('The sky is your starting point!')
}
    else if (event.key === 'n') {
        alert('The sky is your limit👀')
}
  }
  return (
     <div>
    <input name="email" value={signinValues.email} onKeyPress={handleAnswerChange} onChange={handleChange}/>
    <input name="firstName" placeholder="First Name" value={signinValues.firstName} onChange={handleChange} />
    <input name="lastName" placeholder="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
    </div>
  ) 

}

export default Login;