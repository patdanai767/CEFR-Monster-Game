import React from 'react'

export default function TmLevel() {
  return (

    <div className="relative w-screen h-screen bg-cover bg-center" style={{ backgroundImage: "url('/background-game_2.png')" }} >
        <botton className = " absolute top-6 left-6 bg-amber-600 w-[48px] h-[48px] rounded-[4px] bg-center border-[2px]" 
        style = {{
            backgroundImage: "url('/right-arrow.png')",
            backgroundSize: "30px 30px",
            backgroundRepeat: "no-repeat",
            transform: "scaleX(-1)"

        }}   
        >        
        </botton>
    </div>
  )
}
