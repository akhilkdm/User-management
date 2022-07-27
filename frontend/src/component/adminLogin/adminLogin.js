import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useForm } from "react-hook-form";

function  AdminLogin() {
  
  useEffect(() => {
    const admininfo = localStorage.getItem("admininfo");
    if (admininfo) {
      navigate("/adminHome");
    }
  }, []);
  const navigate = useNavigate();
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [error, seterror] = useState('')
    const [loading, setLoading] = useState(false)

       
    let handleLogin=async(e)=>{
        e.preventDefault()
      console.log(email,password);
        try {
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          }
        
          let logDetails={
            email,
            password
          }
         
          setLoading(true)
          const {data}=await axios.post('/api/admin/admin',logDetails,config);
          console.log("this is out loged in data",data);
          localStorage.setItem("admininfo", JSON.stringify(data))
          if (localStorage.admininfo) {
            setLoading(false)
            navigate('/adminHome')
          }
        } catch (error) {
          seterror(error.response.data)
          console.log(error.response.data);
          setLoading(false)
        }
    
      }
 

  // const navigate = useNavigate();


  const {
    register,
    handleSubmit,

    trigger,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  }


  return (
    <div className="Login">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 mt-5">
            <div>
              <h3 className="text-center">ADMIN LOGIN</h3>
            </div>

            <form onSubmit={handleLogin} >
              <label>Email</label>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className={`form-control  ${errors.email && "invalid"}`}
                  placeholder="enter your email"
                  // {...register("email", {
                  //   required: "Email is required",
                  //   pattern: {
                  //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  //     message: "invalid email address",
                  //   },
                  // })}
                  // onKeyUp={() => {
                  //   trigger("eamil");
                  // }}
                  value={email}
                  onChange={(e)=>{setemail(e.target.value)}}
                />
                {errors.email && (
                  <small className="text-danger">{errors.email.message}</small>
                )}
              </div>
              <label>Password</label>
              <div className="form-group">
                <input
                  type="password"
                  className={`form-control  ${errors.password && "invalid"}`}
                  name="password"
                  placeholder="enter your name"
                  // {...register("password", {
                  //   required: "password is required",
                  //   pattern: {
                  //     value: /^[a-zA-Z,0-9]{5,10}$/,
                  //     message: "Minimum eight characters,only characters",
                  //   },
                  // })}
                  // onKeyUp={() => {
                  //   trigger("password");
                  // }}
                  value={password}
                  onChange={(e)=>{setpassword(e.target.value)}}
                />
                {errors.password && (
                  <small className="text-danger">
                    {errors.password.message}
                  </small>
                )}
              </div>
              {error && <div className="error_msg">{error}</div>}
              <div className="text-center">
                <button type="submit" className="btn btn-primary mt-4">
                  LOGIN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

}
export default AdminLogin