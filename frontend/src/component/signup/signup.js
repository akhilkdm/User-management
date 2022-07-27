import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import axios from "axios";

function Signup() {
  const [error, setError] = useState("");
  const navigate = useNavigate();


  
  const {
    register,
    handleSubmit,

    trigger,
    formState: { errors },
    
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const name = data.name;
    const email = data.email;
    const password = data.password;

    try {
      const confiq = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/users",
        {
          name,
          email,
          password,
        },
        confiq
      );
      console.log("hoi");
      navigate("/login");

      console.log(data);
    } catch (error) {
      console.log(error);
      console.log(error.response.status);
      console.log(error.response.data.message);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="signup">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 mt-5">
            <div>
              <h3 className="text-center">SIGNUP</h3>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-grop mt-4">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  className={`form-control  ${errors.name && "invalid"}`}
                  placeholder="enter a name"
                  {...register("name", {
                    required: "Name is required",
                    pattern: {
                      value: /^[a-zA-Z]+$/,
                      message: "Only Contains Character",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("name");
                  }}
                  //  onChange={(e)=>{setName(e.target.value)}}
                />
                {errors.name && (
                  <small className="text-danger">{errors.name.message}</small>
                )}
              </div>
              <label>Email</label>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className={`form-control  ${errors.email && "invalid"}`}
                  placeholder="enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address",
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
                  placeholder="enter your name"
                  {...register("password", {
                    required: "password is required",
                    pattern: {
                      value: /^[a-zA-Z,0-9]{5,10}$/,
                      message: "Minimum five characters",
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
                  SIGNUP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
