import React,{useState} from 'react'
import Boar_Idle from "../../assets/Boar_Idle.gif"
import SkullA1 from "../../assets/SkullA1.gif"

function EnemyCard({id,word,answer}) {
  const [isOpen1, setIsOpen1] = useState(false);
  const toggleCard = () => {setIsOpen1(!isOpen1);};

  return (
    <div onClick={toggleCard} className='bg-[url(/src/assets/Scroll.png)] bg-cover h-[235px] w-[180px] m-4' >
        <div className='flex flex-col justify-center items-center h-full w-[180px]'>
          <div className='h-[100px] w-[100px]'><img src={SkullA1} alt="enemy" /></div>
          <div className={`break-words w-[140px] text-center text-[14px] ${isOpen1 ? 'hidden' : ''}`}>{word}</div>
          {isOpen1 && (
              <div onClick={toggleCard}>{answer}</div>     
                )}
        </div>
    </div>
  ) 
}

export default EnemyCard