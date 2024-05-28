import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = (props) => {

    const {showAlert} = props;

    const [cred, setCred] = useState({email : "" , password : ""})

    const host = "http://localhost:5000";

    const navigate = useNavigate();

    const onChange = (e) =>{
        setCred({...cred,[e.target.name] : e.target.value})
    }

    const submit = async(e) =>{
        e.preventDefault();
        const response = await fetch(`${host}/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email : cred.email, password : cred.password}),
          });
          const json = await response.json();
          if(json.success){
            localStorage.setItem('token',json.authtoken);
            showAlert("Logged In Successfully","success");
            navigate("/");
          }
          else{
            showAlert("Invalid Credentials","danger");
          }
    }

  return (
    <>
      <div>
        <h1 className=' text-4xl font-mono mt-[4rem] font-bold flex justify-center'>LogIn To Continue to iNoteBook !!</h1>
      </div>
        <form onSubmit={submit} className=' flex justify-center mt-[6rem] mb-[12rem] text-2xl'>
            <div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className=' font-bold mb-2'>Email address</label>
                    <input type="email" value={cred.email} name='email' required onChange={onChange} className=" w-[25rem] border-2 border-black form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className=' font-bold mt-5 mb-2'>Password</label>
                    <input type="password" minLength={8} required value={cred.password} name='password' onChange={onChange} className="  w-[25rem] border-2 border-black form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className=' flex justify-center'>
                    <button type="submit" className=" border-2 border-black font-bold mt-5 btn btn-primary">LogIn</button>
                </div>
            </div>
        </form>
    </>
  )
}

export default Login