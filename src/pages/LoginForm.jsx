import React from "react";
import { Link } from "react-router";

const LoginForm = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form>
                <h1 className="text-[22px] font-semibold mb-4">Please Login</h1>
              <label className="label">Email</label>
              <input
                type="email"
                className="input bg-black/10 outline-0 "
                name="email"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input bg-black/10 outline-0 "
                name="password"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-primary mt-4">Login</button>
              <p className="mt-4 text-green-600">
                I Dont Have a Account?{" "}
                <Link to={"/register"} className="text-blue-400">
                  Please Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
