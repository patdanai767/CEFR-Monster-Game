import React from 'react'
import EnemyCard from '../../components/EnemyCard/EnemyCard'
import {ChevronLeft,Volume2,Search} from "lucide-react"

function WordIndex() {
  return (
    <div className='bg-[url(/src/backgrounds/bg-map.jpg)] h-[100vh] bg-cover p-4 flex flex-col justify-between'>
      <div className='h-[48px] w-[48px] border-[3px] rounded-[2px]  bg-[#E29F51] grid place-items-center'>
        <ChevronLeft className='h-[40px] w-[40px]'/>
      </div>
      <div>
        <div className='text-[30px] flex justify-center mt-4'>EnemyIndex</div>
          <div className='border-2 h-[30px] rounded-[12px] m-4 bg-black/50'>
            <div className='grid place-items-end mx-[2px]'><Search className='text-white'/></div>
          </div>
        <div className='grid grid-cols-2 place-items-center'>
          <EnemyCard/>
          <EnemyCard/>
          <EnemyCard/>
          <EnemyCard/>
        </div>
      </div>
      <div>
        <div className='text-white'>Pagination</div>
      </div>
      <div className='h-[56px] w-[56px] border-[2px] bg-[#E29F51] rounded-full grid place-items-center'>
        <Volume2/>
      </div>
    </div>
  )
}

export default WordIndex