import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Signup = (props) => {

  const {showAlert} = props;

  const [cred, setCred] = useState({username : "" , email : "" , password : ""})

  const host = "http://localhost:5000";

  const navigate = useNavigate();

  const onChange = (e) =>{
      setCred({...cred,[e.target.name] : e.target.value})
  }

  const submit = async(e) =>{
      e.preventDefault();
      const response = await fetch(`${host}/auth/createUser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({username:cred.username, email : cred.email, password : cred.password}),
        });
        const json = await response.json();
        if(json.success){
          localStorage.setItem('token',json.authToken);
          showAlert("Account Created Successfully","success")
          navigate("/");
        }
        else{
          showAlert("User Already Exist", "danger")
        }
  }

  return (
    <>
        <div>
        <h1 className=' text-4xl font-mono mt-[4rem] font-bold flex justify-center'>SignUp To Create an Account and Continue to iNoteBook !!</h1>
      </div>
       <form onSubmit={submit} className=' flex justify-center mt-[4rem] mb-[12rem] text-2xl'>
            <div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className=' font-bold mb-2'>Email address</label>
                    <input type="email" required value={cred.email} name='email' onChange={onChange} className=" w-[25rem] border-2 border-black form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className=' font-bold mt-5 mb-2'>Username</label>
                    <input type="text" required minLength={3} value={cred.username} name='username' onChange={onChange} className="  w-[25rem] border-2 border-black form-control" id="exampleInputUsername" placeholder="Username"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className=' font-bold mt-5 mb-2'>Password</label>
                    <input type="password" required minLength={8} value={cred.password} name='password' onChange={onChange} className="  w-[25rem] border-2 border-black form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className=' flex justify-center'>
                    <button type="submit" className=" border-2 border-black font-bold mt-5 btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    </>
  )
}

export default Signup