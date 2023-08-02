import React, { useContext } from "react";
import img from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        // const loggedUser = {
        //   email: user.email,
        // };
        console.log(user);
        navigate(from, { replace: true });

        // fetch("https://car-doctor-server-new-kappa.vercel.app/jwt", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(loggedUser),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log("jwt response", data);

        //     // local storage is best
        //     localStorage.setItem("car-access-token", data.token);
        //     // navigate(from, { replace: true });
        //   });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200 mt-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center w-1/2 mr-20 mt-20">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full lg:w-1/2  max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl ml-5 pt-9 font-bold">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <SocialLogin></SocialLogin>
          </form>
          <div className="text-center pb-5 ">
            <small>
              New To Car Doctor?? Please
              <Link to="/register" className="text-blue-700 font-bold">
                Register
              </Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
