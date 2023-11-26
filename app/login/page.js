import Button from "../components/button"
import Input from "../components/textInput"
import Link from "next/link"




const Login = () => {
  return (
    <div className="bg-backgroundImage px-5 max-w-[40rem] m-auto mt-[5rem] gap-14 flex-col flex">

        <h1 className="text-center font-bold text-[1.75rem]">LOGIN</h1>

        <form className="flex flex-col gap-5">
            <Input placeholder="Enter username" type="text" name="username" />
            <Input placeholder="Password" type="text" name="password" />
        </form>

        <div className="flex flex-col gap-2">
          <Button name="Login" />
          <p className="text-xs text-right text-gray-500">
            Don't have an account? 
            <Link href="/signup" className="text-[#3FC2A3]"> Signup</Link> </p>
        </div>
    </div>
  )
}

export default Login