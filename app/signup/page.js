import Link from "next/link"
import Button from "../components/button"
import Input from "../components/textInput"




const Signup = () => {
  return (
    <div className="bg-backgroundImage px-5 max-w-[40rem] m-auto mt-[2rem] gap-5 flex-col flex">

        <h1 className="text-center font-bold text-[1.75rem]">Create Account</h1>

        <form className="flex flex-col gap-5">
            <Input placeholder="Company Name" type="text" name="companyName" />
            <Input placeholder="Full Name" type="text" name="fullname" />
            <Input placeholder="Email" type="text" name="email" />
            <Input placeholder="Password" type="text" name="password" />
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