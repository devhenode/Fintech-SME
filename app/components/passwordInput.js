import Image from "next/image"
import Blind from "@/public/vectors/svgs/Finance-Icons.svg"




const Input = (props) => {
    return (
      
          <div className="">
            <input type={props.type} name={props.name} placeholder={props.placeholder} className="border border-gray-300 p-2 text-sm rounded relative"/>
            <Image src={Blind} alt="blind_password" className="absolute"/>
          </div>
      
    )
  }
  
  export default Input