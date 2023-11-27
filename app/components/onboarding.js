'use client'
import Image from "next/image"
import {onboard} from "../data/onboarding"
import { useState } from "react"
import Link from "next/link"



const Onboard = () => {

  const [currentStep, setCurrentStep] = useState(0);
  
  const onNextClick = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  
  return (
    <div className="">
      <div className="flex justify-end mt-8 mr-5">
        <Link href="/login" className="bg-[#FFEEEC] text-center p-1 px-3 rounded-xl text-[#FF553E] text-xs">Skip</Link>
      </div>
      
      <div className="">
        {onboard[currentStep] && (
          <div className="flex flex-col items-center w-auto gap-8 px-5 py-8">
            <div className="px-5">
              <Image
                src={onboard[currentStep].image}
                alt="image"
                width={200}
                height={100}
              />
            </div>
            <div>
              <h1 className="text-center w-[15rem]">{onboard[currentStep].header}</h1>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between px-5">
        <div className="flex gap-2">
          {onboard.map((_, index) => (
            <span
              key={index}
              className={`p-2 rounded-full ${
                index === currentStep ? 'bg-[#3FC2A3]' : 'bg-[#E0F4F3]'
              }`}
            ></span>
          ))}
        </div>
        <button onClick={onNextClick} className="bg-[#3FC2A3] py-1 px-3 rounded text-white text-sm" >{currentStep === onboard.length - 1 ? <Link href="/signup" alt="signup">Get Started</Link> : 'Next'}</button>
      </div>
    </div>
  )
}

export default Onboard