import React from 'react'
import Boar_Idle from "../../assets/Boar_Idle.gif"

function EnemyCard({id,word,answer}) {
  return (
    <div className='bg-[url(/src/assets/Scroll.png)] bg-cover h-[235px] w-[180px] m-4' >
        <div className='flex flex-col justify-center items-center h-full w-[180px]'>
          <div className='h-[80px] w-[80px]'><img src={Boar_Idle} alt="enemy" /></div>
          <div className='break-words w-[140px] text-center text-[14px]'>{word}</div>
        </div>
    </div>
  ) 
}

export default EnemyCard