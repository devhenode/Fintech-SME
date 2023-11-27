import Link from "next/link"
import Input from "../components/textInput"
import Timer from "../components/timer"





const ResetPassword = () => {
  return (
    <div className='flex flex-col items-center px-5 mt-[2rem] gap-5'>
        <div className="">
          <h1 className="text-xl font-bold text-center">Forgot Password</h1>
        </div>
        
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-5">
            <h2 className="text-sm font-bold">We will send the recovery code to your phone number.</h2>
            <p className="text-sm">Enter the four digits code sent to your phone number to receive your password</p>
            <form className="flex flex-col gap-2 text-sm font-bold">
                <label htmlFor="resetPassword">Enter the code you received </label>
                <div className="flex justify-center gap-5">
                    {Array(4).fill("").map((e, index) => (
                        <input className="w-10 text-center p-2 text-sm border-2 rounded border-[#3FC2A3]" placeholder="-" name="resetPassword" />
                    ))}
                </div>
            </form>
            <Timer />
            <button className="hover:bg-[#3FC2A3] text-center p-2 rounded w-full text-white bg-[#3FC2A3]">
              Send
            </button>
          </div>
          <div className="text-xs text-right">
            <p className="text-gray-500">
              Didn’t receive the code?
              <a href="#" className="text-[#3FC2A3]"> Resend</a>  
            </p>
          </div>
        </div>
    </div>
  )
}

export default ResetPassword