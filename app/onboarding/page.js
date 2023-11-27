import Image from "next/image"
import onboard from "../data/onboarding"


console.log(onboard)

const Onboard = () => {
  return (
    <div className="">
      {onboard.map((item) => (
        <div className="flex flex-col w-auto gap-8 px-5 py-8 " key={item.id}>
          <div className="px-5">
              <Image src={item.image} alt="image" width={100} height={100} />
          </div>
          <div className="">
            <h1 className="text-center w-[15rem]">{item.header}</h1>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Onboard