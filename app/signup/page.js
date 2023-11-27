"use client";

import Link from "next/link";
import Button from "../components/button";
import Input from "../components/textInput";
import { useState } from "react";

const Signup = () => {
  // const [formData, setFormData] = useState({
  //   companyName: "",
  //   fullName: "",
  //   emailAddress: "",
  //   phoneNumber: "",
  //   password: "",
  // });

  // const handleChange = (event) => {
  //   const { companyName, fullName, email, phoneNumber, password } =
  //     event.target;
  //   setFormData((prevFormData) => {
  //     return {
  //       ...prevFormData,
  //       [event.target.name]: event.target.value,
  //     };
  //   });
  // };

  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);

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
      const res = await fetch("https://k7-yd0x.onrender.com/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          password,
          email: emailAddress,
          phoneNumber: phoneNumber.toString(),
        }),
      });
      const newAccount = await res.json();
      console.log(newAccount);
      setLoading(false);
      if (!res.ok) {
        throw Error(newAccount.error);
      }
      setSuccess("Account created successfully")

    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error.message);

    }
  };

  return (
    <div className="bg-backgroundImage px-5 max-w-[40rem] m-auto mt-[2rem] flex-col flex">
      <h1 className="text-center font-bold text-[1.75rem]">Create Account</h1>

      <form onSubmit={(e) => submitForm(e)} className="flex flex-col gap-5">
      <div className="h-8">
          {success && <p className="text-green-600">{success}</p>}
          {error && <p className="text-red-600">{error}</p>}
        </div>
        <Input
          placeholder="Company Name"
          type="text"
          name="companyName"
          // onChange={handleChange}
          // value={formData.companyName}
        />
        <Input
          placeholder="Full Name"
          type="text"
          name="fullname"
          // onChange={handleChange}
          // value={formData.fullname}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          placeholder="Email"
          type="text"
          name="email"
          // onChange={handleChange}
          // value={formData.email}
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
        />
        <Input
          placeholder="Phone Number"
          type="number"
          name="phoneNumber"
          // onChange={handleChange}
          // value={formData.phoneNumber}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          name="password"
          // onChange={handleChange}
          // value={formData.password}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex flex-col gap-2">
          <Button
            name={`${loading ? "Creating an account ..." : "Create Account"}`}
          />
          <div className="flex justify-between text-xs">
            <Link href="/forgotpassword" className="text-[#3FC2A3]">Forgot password?</Link>
            <p className="text-gray-500 ">
              Already have an account?
              <Link href="/login" className="text-[#3FC2A3]">
                {" "}
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
