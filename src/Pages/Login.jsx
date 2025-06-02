import Lottie from "lottie-react";
import React from "react";
import loginAnimation from "../assets/Lottie-animation/login.json";

import SocialLogin from "../Component/SocialLogin";
import { useLocation, useNavigate } from "react-router";
import useAuth from "../Hooks/useAuth";
const Login = () => {
  const { loginUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";

  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((res) => {
        console.log(res);
        navigate(from);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div>
        <div className=" bg-base-200 min-h-screen">
          <div className="flex justify-center items-center gap-10 py-20">
            <div className="bg-base-100 shadow-2xl w-md">
              <div className="card-body">
                <h1 className="text-3xl ">Login Here</h1>
                <form onSubmit={handleLogin}>
                  <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input
                      type="email"
                      className="input"
                      placeholder="Email"
                      name="email"
                    />
                    <label className="label">Password</label>
                    <input
                      type="password"
                      className="input"
                      placeholder="Password"
                      name="password"
                    />

                    <button className="btn btn-neutral mt-4">Login</button>
                  </fieldset>
                </form>
                <SocialLogin from={from}></SocialLogin>
              </div>
            </div>
            <div className="text-center lg:text-left ">
              <Lottie
                style={{ width: "200px", height: "200px" }}
                animationData={loginAnimation}
                loop={true}></Lottie>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
