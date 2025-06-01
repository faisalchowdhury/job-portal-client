import Lottie from "lottie-react";
import React from "react";
import registerLottie from "../assets/Lottie-animation/register.json";
const Register = () => {
  return (
    <div>
      <div>
        <div className=" bg-base-200 min-h-screen">
          <div className="flex justify-center items-center gap-10 py-20">
            <div className="bg-base-100 shadow-2xl w-md">
              <div className="card-body">
                <h1 className="text-3xl ">Register Here</h1>
                <form action="">
                  <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input
                      type="password"
                      className="input"
                      placeholder="Password"
                    />

                    <button className="btn btn-neutral mt-4">Register</button>
                  </fieldset>
                </form>
              </div>
            </div>
            <div className="text-center lg:text-left ">
              <Lottie
                style={{ width: "300px", height: "500px", marginTop: "-100px" }}
                animationData={registerLottie}
                loop={true}></Lottie>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
