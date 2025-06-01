import Lottie from "lottie-react";
import React, { useContext } from "react";
import registerLottie from "../assets/Lottie-animation/register.json";
import { AuthContext } from "../Context/AuthContext";
import SocialLogin from "../Component/SocialLogin";
const Register = () => {
  const { createNewUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    const regularExpression = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (regularExpression.test(password)) {
      createNewUser(email, password)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      alert(
        "password must be 6 character long , one uppercase latter and one lowercase latter"
      );
    }
  };

  return (
    <div>
      <div>
        <div className=" bg-base-200 min-h-screen">
          <div className="flex justify-center items-center gap-10 py-20">
            <div className="bg-base-100 shadow-2xl w-md">
              <div className="card-body">
                <h1 className="text-3xl ">Register Here</h1>
                <form onSubmit={handleRegister}>
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

                    <button type="submit" className="btn btn-neutral mt-4">
                      Register
                    </button>
                  </fieldset>
                </form>
                <SocialLogin></SocialLogin>
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
