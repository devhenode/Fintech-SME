"use client";

import { useState } from "react";
import Button from "../components/button";
import Input from "../components/textInput";
import Link from "next/link";

const Login = () => {
  // const [loginData, setLoginData] = useState({
  //   username: "",
  //   password: ""
  // })

  // const handleChange = (event) => {
  //   const {username, password} = event.target
  //   setLoginData(prevLoginData => {
  //     return {
  //       ...prevLoginData,
  //       [event.target.name]: event.target.value
  //     }
  //   })
  // };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // loading state
  const [loading, setLoading] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    // console.log({ fullName, password, emailAddress, phoneNumber });
    try {
      setError(null);
      setSuccess(null);
      setLoading(true);
      const res = await fetch("https://k7-yd0x.onrender.com/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const loginState = await res.json();
      console.log(loginState);
      setLoading(false);
      if (!res.ok) {
        throw Error(loginState.error);
      }
      setSuccess("Logged in successfully")
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error.message);
    }
  };
  // TestPass!!@23
  // testmail@test.com

  return (
    <div className="bg-backgroundImage px-5 max-w-[40rem] m-auto mt-[5rem] gap-14 flex-col flex">
      <h1 className="text-center font-bold text-[1.75rem]">LOGIN</h1>

      <form onSubmit={(e) => submitForm(e)} className="flex flex-col gap-5">
        <div className="h-4">
          {success && <p className="text-green-600">{success}</p>}
          {error && <p className="text-red-600">{error}</p>}
        </div>
        <Input
          placeholder="Enter email"
          type="email"
          name="Email"
          onChange={(e) => setEmail(e.target.value)}
          // onChange={handleChange}
          // value={loginData.username}
        />
        <Input
          placeholder="Password"
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          // onChange={handleChange}
          // value={loginData.password}
        />

        <div className="flex flex-col gap-2">
          <Button name={loading ? "Logging In..." : "Log In"} />
          <div className="flex justify-between text-xs">
            <Link href="/forgotpassword" className="text-[#3FC2A3]">Forgot password?</Link>
            <p className="text-gray-500 ">
              Don't have an account?
              <Link href="/signup" className="text-[#3FC2A3]">
                {" "}
                Signup
              </Link>{" "}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
