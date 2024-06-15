import React, { useState } from "react";

const Authorization = () => {
  const [state, setState] = useState("login");

  const [signupDetails, setSignupDetails] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    nic: "",
    address: "",
    telephone: "",
  });

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleSignupChange = (e) => {
    setSignupDetails({ ...signupDetails, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const signup = async (e) => {
    e.preventDefault();
    try {
      let responseData;

      await fetch("http://localhost:4000/Signup", {
        method: "POST",
        headers: {
          Accept: "application/json", 
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupDetails),
      })
        .then((res) => res.json())
        .then((data) => (responseData = data));

      if (responseData.success) {
        if(responseData.role ==='admin'){
          window.location.replace("/admin");
        }

        if(responseData.role==='Head'){

          window.location.replace(`/orphanage/${responseData.orphanageId}`)

        }
       

      } else {
        alert(responseData.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      let responseData;

      await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginDetails),
      })
        .then((res) => res.json())
        .then((data) => (responseData = data));

      if (responseData.success) {
        if(responseData.role==='admin'){
          window.location.replace("/admin");

        }

        if(responseData.role==='Head'){
          window.location.replace(`/orphanage/${responseData.orphanageId}`)
        }
        
      } else {
        alert(responseData.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {state === "login" ? (
        <div className="mt-20">
          <h1 className="text-center text-lg font-bold text-primary mb-5">
            Log In
          </h1>

          <form onSubmit={login} className="flex flex-col gap-5 mx-20">
            <div className="flex flex-col w-full">
              <label className="text-md font-semibold mb-3" htmlFor="email">
                Email:
              </label>
              <input
                className="w-full bg-gray-100 h-[40px] rounded-md px-4 py-3 border-none focus-visible:ring-primary !important"
                type="email"
                onChange={handleLoginChange}
                id="email"
                name="email"
                value={loginDetails.email}
                required
              />
            </div>

            <div className="flex flex-col w-full">
              <label className="text-md font-semibold mb-3" htmlFor="password">
                Password:
              </label>
              <input
                className="w-full bg-gray-100 h-[40px] rounded-md px-4 py-3 border-none focus-visible:ring-primary !important"
                type="password"
                onChange={handleLoginChange}
                id="password"
                name="password"
                value={loginDetails.password}
                required
              />
            </div>

            <div className="flex justify-between ">
              <button
                type="submit"
                className="bg-primary text-white font-semibold mb-10 w-1/4 py-3 hover:bg-white hover:border-2 hover:border-primary hover:text-primary transition-all duration-300"
              >
                Log in
              </button>

              <div>
                Don't have an account?{" "}
                <span
                  onClick={() => setState("sign-up")}
                  className="text-primary underline cursor-pointer"
                >
                  Sign Up{" "}
                </span>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="mx-20 mt-10">
          <h1 className="text-center text-lg font-bold text-primary mb-5">
            Sign Up
          </h1>
          <form onSubmit={signup} className="flex flex-col gap-5">
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="flex flex-col w-full">
                <label className="text-md font-semibold mb-3" htmlFor="firstname">
                  First Name:
                </label>
                <input
                  className="w-full bg-gray-100 h-[40px] rounded-md px-4 py-3 border-none focus-visible:ring-primary !important"
                  type="text"
                  onChange={handleSignupChange}
                  id="firstname"
                  name="firstname"
                  value={signupDetails.firstname}
                  required
                />
              </div>

              <div className="flex flex-col w-full">
                <label className="text-md font-semibold mb-3" htmlFor="lastname">
                  Last Name:
                </label>
                <input
                  className="w-full bg-gray-100 h-[40px] rounded-md px-4 py-3 border-none focus-visible:ring-primary !important"
                  type="text"
                  onChange={handleSignupChange}
                  id="lastname"
                  name="lastname"
                  value={signupDetails.lastname}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-5 md:flex-row">
              <div className="flex flex-col w-full">
                <label className="text-md font-semibold mb-3" htmlFor="username">
                  Username:
                </label>
                <input
                  className="w-full bg-gray-100 h-[40px] rounded-md px-4 py-3 border-none focus-visible:ring-primary !important"
                  type="text"
                  onChange={handleSignupChange}
                  id="username"
                  name="username"
                  value={signupDetails.username}
                  required
                />
              </div>

              <div className="flex flex-col w-full">
                <label className="text-md font-semibold mb-3" htmlFor="email">
                  Email:
                </label>
                <input
                  className="w-full bg-gray-100 h-[40px] rounded-md px-4 py-3 border-none focus-visible:ring-primary !important"
                  type="email"
                  onChange={handleSignupChange}
                  id="email"
                  name="email"
                  value={signupDetails.email}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-5 md:flex-row">
              <div className="flex flex-col w-full">
                <label className="text-md font-semibold mb-3" htmlFor="password">
                  Password:
                </label>
                <input
                  className="w-full bg-gray-100 h-[40px] rounded-md px-4 py-3 border-none focus-visible:ring-primary !important"
                  type="password"
                  onChange={handleSignupChange}
                  id="password"
                  name="password"
                  value={signupDetails.password}
                  required
                />
              </div>

              <div className="flex flex-col w-full">
                <label className="text-md font-semibold mb-3" htmlFor="nic">
                  NIC:
                </label>
                <input
                  className="w-full bg-gray-100 h-[40px] rounded-md px-4 py-3 border-none focus-visible:ring-primary !important"
                  type="text"
                  onChange={handleSignupChange}
                  id="nic"
                  name="nic"
                  value={signupDetails.nic}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-5 md:flex-row">
              <div className="flex flex-col w-full">
                <label className="text-md font-semibold mb-3" htmlFor="address">
                  Address:
                </label>
                <input
                    className="w-full bg-gray-100 h-[40px] rounded-md px-4 py-3 border-none focus-visible:ring-primary !important"
                    type="text"
                    onChange={handleSignupChange}
                    id="address"
                    name="address"
                    value={signupDetails.address}
                    required
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label
                    className="text-md font-semibold mb-3"
                    htmlFor="telephone"
                  >
                    Telephone Number:
                  </label>
                  <input
                    className="w-full bg-gray-100 h-[40px] rounded-md px-4 py-3 border-none focus-visible:ring-primary !important"
                    type="tel"
                    onChange={handleSignupChange}
                    id="telephone"
                    name="telephone"
                    value={signupDetails.telephone}
                    required
                  />
                </div>
              </div>

              <div className="flex justify-between ">
                <button
                  type="submit"
                  className="bg-primary text-white font-semibold mb-10 w-1/4 py-3 hover:bg-white hover:border-2 hover:border-primary hover:text-primary transition-all duration-300"
                >
                  Sign Up
                </button>

                <div>
                  Already have an account?{" "}
                  <span
                    onClick={() => setState("login")}
                    className="text-primary underline cursor-pointer"
                  >
                    Log In{" "}
                  </span>
                </div>
              </div>
            </form>
          </div>
        )}
      </>
    );
  };


export default Authorization;
