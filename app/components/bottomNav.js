import Image from "next/image"
import Link from "next/link"
import Home from "/public/vectors/svgs/Notification.svg"




const BottomNav = () => {
  return (
    <div className="fixed bottom-0 flex items-center justify-between w-full px-8 py-4 bg-white max-w-[40rem]">
        <Link href="#" className="flex flex-col items-center gap-1 text-xs">
            <Image src={Home} alt="home_icon" width={15} />
            <p className="">Home</p>
        </Link>
        <Link href="#" className="flex flex-col items-center gap-1 text-xs">
            <Image src={Home} alt="home_icon" width={15} />
            <p className="">Home</p>
        </Link>
        <Link href="#" className="flex flex-col items-center gap-1 text-xs">
            <Image src={Home} alt="home_icon" width={15} />
            <p className="">Home</p>
        </Link>
        <Link href="#" className="flex flex-col items-center gap-1 text-xs">
            <Image src={Home} alt="home_icon" width={15} />
            <p className="">Home</p>
        </Link>
    </div>
  )
}

export default BottomNav