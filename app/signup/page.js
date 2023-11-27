"use client"

import Link from "next/link"
import Button from "../components/button"
import Input from "../components/textInput"
import { useState } from "react"



const Signup = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    password: ""
  });

  const handleChange = (event) => {
    const {companyName,fullname, email, phoneNumber, password} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData, 
        [event.target.name]: event.target.value
      }
    })
  };
  
  return (
    <div className="bg-backgroundImage px-5 max-w-[40rem] m-auto mt-[2rem] gap-5 flex-col flex">

        <h1 className="text-center font-bold text-[1.75rem]">Create Account</h1>

        <form className="flex flex-col gap-5">
            <Input placeholder="Company Name" type="text" name="companyName" onChange={handleChange} value={formData.companyName} />
            <Input placeholder="Full Name" type="text" name="fullname" onChange={handleChange} value={formData.fullname} />
            <Input placeholder="Email" type="text" name="email" onChange={handleChange} value={formData.email} />
            <Input placeholder="Phone Number" type="number" name="phoneNumber" onChange={handleChange} value={formData.phoneNumber} />
            <Input placeholder="Password" type="text" name="password" onChange={handleChange} value={formData.password} />
        </form>

        <div className="flex flex-col gap-2">
          <Button name="Create Account" />
          <p className="text-xs text-right text-gray-500">
            Already have an account? 
            <Link href="/login" className="text-[#3FC2A3]"> Login</Link> </p>
        </div>
        
    </div>
  )
}

export default Signup