import Link from "next/link"
import Input from "../components/textInput"






const ForgotPassword = () => {
  return (
    <div className='flex flex-col items-center px-5 mt-[5rem] gap-10'>
        <div className="">
          <h1 className="text-xl font-bold text-center">Forgot Password</h1>
        </div>
        
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-5">
            <h2 className="text-sm font-bold">We will send the recovery code to your phone number.</h2>
            <p className="text-sm">Enter your phone number you registered with on this G7 Company.</p>
            <form className="">
              <Input type="number" placeholder="Enter phone number" name="phoneNumber" />
            </form>
            <Link href="/resetpassword" className="hover:bg-[#3FC2A3] text-center p-2 rounded w-full text-white bg-[#3FC2A3]">
              Request
            </Link>
          </div>
        </div>
    </div>
  )
}

export default ForgotPassword