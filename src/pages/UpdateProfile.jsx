import React from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import { auth } from "../firebase/firebaseconfig";
import { updateProfile } from "firebase/auth";

const UpdateProfile = () => {
  let handleClick = (e) => {
    e.preventDefault();
    let displayName = e.target.text.value;
    let photoURL = e.target.image.value;

    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
    // .then(e=>console.log(e)
    // ).catch(e=>console.log(e)
    // )
  };
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar></NavBar>
      <div className="flex-1">
        <div className="hero bg-base-200 min-h-screen">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleClick}>
                <h1 className="text-[22px] font-semibold mb-4">
                  Update Information
                </h1>
                <label className="label">Email</label>
                <input
                  type="text"
                  className="input bg-black/10 outline-0 "
                  name="text"
                  placeholder="your name"
                />
                <label className="label">Photo</label>
                <input
                  type="text"
                  className="input bg-black/10 outline-0 "
                  name="image"
                  placeholder="update image"
                />

                <button className="btn btn-primary mt-4 w-full">
                  Update Info
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default UpdateProfile;
