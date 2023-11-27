import Image from "next/image"
import Hamburger from "/public/vectors/svgs/bx_menu.svg"
import Notification from "/public/vectors/svgs/Notification.svg"
import Tranx from "/public/vectors/svgs/Notification.svg"
import BottomNav from "../components/bottomNav"





const Homepage = () => {
  return (
    <div className='w-auto max-w-[40rem] flex flex-col gap-3'>
        <div className='flex items-center justify-between p-3'>
          <div className="cursor-pointer">
            <Image src={Hamburger} alt="hamburger" width={30} />
          </div>
          <h2 className="text-sm">Home</h2>
          <div className="relative">
            <Image src={Notification} alt="notification" width={20} />
            <span className="absolute top-0 right-0 p-1 bg-red-500 rounded-full"></span>
          </div>
        </div>
        
        <div className="flex justify-between p-3">
          <h2 className="text-xs">Welcome</h2>
          <p className="text-xs text-[#3FC2A3]">July, 2023</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 p-2 basis-1">
          {Array(4).fill("").map((e,index) => (
            <div key={index} className="flex flex-col gap-2 p-2 shadow-md bg-[#F9F9F9] rounded-xl w-[7rem]">
              <div className="flex flex-col gap-1">
                <Image src={Tranx} alt="transacton_icon" />
                <p className="text-xs">Wallet balance</p>
              </div>
              <p className="text-sm">₦ 0</p>
              <div className="flex items-center gap-1 text-sm">
                <p className="text-[#FD4D1E]">0</p>
                <p className="">Expenses</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between p-3 my-5 text-xs font-semibold text-center">
          <span className="cursor-pointer text-[#3FC2A3] py-3 shadow-md rounded px-4">New Invoice</span>
          <span className="cursor-pointer text-[#3FC2A3] py-3 shadow-md rounded px-4 bg-[#F1FEF2]">Add Client</span>
          <span className="py-3 px-4 rounded shadow-md cursor-pointer bg-[#F9F9F9]">Draft</span>
        </div>
        
        <div className="flex items-center justify-center gap-4 px-2">
          <div className="flex flex-col items-center gap-1">
            <span className="bg-[#F1FEF2] rounded-full border-4 border-[#3FC2A3] p-4"></span>
            <p className="text-xs">Recharge</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="bg-[#F1FEF2] rounded-full border-4 border-[#3FC2A3] p-4"></span>
            <p className="text-xs">Transfer</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="bg-[#F1FEF2] rounded-full border-4 border-[#3FC2A3] p-4"></span>
            <p className="text-xs">Utility</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="bg-[#F1FEF2] rounded-full border-4 border-[#3FC2A3] p-4"></span>
            <p className="text-xs">Tax</p>
          </div>
        </div>

        <div className="">
          <h2 className="text-sm bg-[#F9F9F9] p-2 my-5">Recent Transactions</h2>
        </div>

        <div className="flex flex-col items-center justify-center">
         <div className="flex flex-col gap-2 text-center">
          <p className="text-xs font-semibold">No Recent Transactions</p>
          <p className="text-xs">Any transaction made would be saved here automatically</p>
         </div>
        </div>

        <BottomNav />
    </div>
  )
}

export default Homepage