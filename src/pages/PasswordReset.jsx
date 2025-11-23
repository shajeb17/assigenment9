import React, { use, useState } from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import { useLocation } from "react-router";
import { AuthContext } from "../uesContextHook/formhook/AuthContex";

const PasswordReset = () => {
     let {handlePasswordReste } = use(AuthContext);
     const location = useLocation();
     let [email,setEmail]=useState(location?.state?.email || "")
    console.log(email);
    
    let passwordreset=(e)=>{
        e.preventDefault();
        handlePasswordReste(email)
        .then(()=>
            window.location.href = "https://mail.google.com",
        )
    }
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar></NavBar>
      <div className="flex-1">
        <div className="hero bg-base-200 min-h-screen">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form>
                <h1 className="text-[22px] font-semibold mb-4">Forget Password</h1>
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input bg-black/10 outline-0 "
                  name="email"
                  defaultValue={location?.state?.email}
                  placeholder="Email"
                  onChange={e=>setEmail(e.target.value)}
                />
            
                <button className="btn btn-primary mt-4 w-full" onClick={passwordreset}>Password Reset</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default PasswordReset;
