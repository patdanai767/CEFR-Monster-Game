import React from 'react'

export default function LoseModal() {
  return (
    <div className="justify-items-center absolute top-[200px] w-full font-game">
      <div className="text-[32px] drop-shadow-2xl text-[#C76735] text-stroke-orange">
        YOU LOSE
      </div>
      <div className="rounded-sm w-3/4 border-3 grid text-[20px] overflow-hidden text-center px-8 py-7 gap-7 bg-[#C76735] border-[#862A00] text-[#E29F51] text-stroke-black">
        <div>Retry</div>
        <div>Back to Menu</div>
      </div>
    </div>
  )
}
