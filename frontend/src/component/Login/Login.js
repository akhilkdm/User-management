import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useForm } from "react-hook-form";

function Login(props) {
  console.log("props", props.title);

  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/products");
    } 
  }, []);
  const {
    register,
    handleSubmit,

    trigger,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);

    const email = data.email;
    const password = data.password;
    console.log("email",email);
    console.log("password",password);

    if (props.title === "USER") {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        const { data } = await axios.post(
          "/api/users/login",
          {
            email,
            password,
          },
          config
        );
        localStorage.setItem("userInfo", JSON.stringify(data));
        console.log("hoi");

        navigate("/products");
        console.log(data);
      } catch (error) {
        console.log(error);
        console.log(error.response.status);
        console.log(error.response.data.message);
        setError(error.response.data.message);
      }
    } 
    
    
    // else {
    //   console.log("else admin");
    //   const adminEmail = "admin@gmail.com";
    //   const adminPassword = "asdfghjkl";
    //   if (email === adminEmail && password === adminPassword) {
    //     console.log("admin");
    //     localStorage.setItem("adminInfo", JSON.stringify(adminEmail));
    //     navigate("/adminHome");
    //   } else {
    //     setError("Incorrect Password And Email");
    //   }
    // }
  };

  return (
    <div className="Login">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 mt-5">
            <div>
              <h3 className="text-center">{props.title} LOGIN</h3>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <label>Email</label>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className={`form-control  ${errors.email && "invalid"}`}
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("eamil");
                  }}
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
                  placeholder="Enter your name"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: /^[a-zA-Z,0-9]{5,10}$/,
                      message: "Minimum five characters,only characters",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("password");
                  }}
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
export default Login;
