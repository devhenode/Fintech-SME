'use client'
import { useState } from "react"






const Stepper = () => {
  const [active, setActive] = useState(false)
  
  const handleActive = () => {
    setActive(prevActive => !prevActive)
  }
  
  return (
    <div className="flex items-center justify-between px-5">
        <div className="flex gap-2">
             {Array(3).fill("").map((eve, index) => (
              <span className={`p-2 rounded-full ${active? "bg-[#3FC2A3]":"bg-[#E0F4F3]"}`}></span>
             ))}
        </div>
        <button className="" onClick={handleActive}>{Array === 3? "Get Started": "Next"}</button>
    </div>
  )
}

export default Stepper