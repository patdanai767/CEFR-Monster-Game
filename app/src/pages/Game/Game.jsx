import React, { useState, useEffect } from 'react';
import wordsA1 from './game';
import {Pause} from "lucide-react"
export default function Game() {
    const [Random, setRandom] = useState(Math.floor(Math.random() * 2) + 1);
    const [Quest, setQuest] = useState(Math.floor(Math.random() * 896));
    const [ch1, setCh1] = useState(null);
    const [ch2, setCh2] = useState(null);
    const [humanImage, setHumanImage] = useState("Idle.gif");
    const [monsterImage, setMonsterImage] = useState("boaridle.gif");
    const [HeartImage, setHeartImage] = useState("Heart.png");
    const [isend,setisend] = useState(true)
    let Heartvalue = 1;

    useEffect(() => {
        if (Random === 1) {
            setCh1(Quest);
            setCh2(Math.floor(Math.random() * 896));
        } else if (Random === 2) {
            setCh2(Quest);
            setCh1(Math.floor(Math.random() * 896));
        }
    }, [Random, Quest]);

    const Next = () => {
        const newRandom = Math.floor(Math.random() * 2) + 1;
        const newQuest = Math.floor(Math.random() * 896);
        let newCh1, newCh2;

        if (newRandom === 1) {
            newCh1 = newQuest;
            newCh2 = Math.floor(Math.random() * 896);
        } else if (newRandom === 2) {
            newCh2 = newQuest;
            newCh1 = Math.floor(Math.random() * 896);
        }

        setRandom(newRandom);
        setQuest(newQuest);
        setCh1(newCh1);
        setCh2(newCh2);
    };

    const Correctornot = (choice) => {
        if (choice === Quest) {
            CorrectAnim();
            setTimeout(() => {
                Next();
            }, 500);
        } else {
            WrongAnim();
            setTimeout(() => {
                Next();
            }, 500);
        }
    };

    const CorrectAnim = () => {
        setHumanImage("Attack-01.gif");
        setMonsterImage("Hit.gif");

        setTimeout(() => {
            setHumanImage("Idle.gif");
            setMonsterImage("boaridle.gif");
        }, 500);
    };

    const WrongAnim = () => {

        Heartvalue -=1;
        setHumanImage("wrong.gif");
        setMonsterImage("boaratk.gif");
        if (HeartImage==="Heart-2.png")
          
        { setHumanImage("Dead.gif")
          setMonsterImage("boaridle.gif");
          setHeartImage("Heart-3.png")
          setisend(false)
        }
         
        else{
        setTimeout(() => {
            setHumanImage("Idle.gif");
            setMonsterImage("boaridle.gif");
        }, 500);
        if(Heartvalue===0)
        { 
          if(HeartImage==="Heart.png")
        setHeartImage("Heart-1.png")
      else if (HeartImage==="Heart-1.png")
          setHeartImage("Heart-2.png")
        }
      }
        
        
        
    };

    return (
        <div className="grid bg-[url('/background-game_2.png')] bg-no-repeat bg-cover h-screen justify-center">
            <div className='absolute w-[52px] h-[52px] bg-[#E29F51] left-[309px] top-[32px] content-center justify-items-center  '>
              <Pause width={36} height={36} strokeWidth={1}></Pause>
            </div>
            <div className='box1 h-[70vh] font-bold text-[#E29F51] font-[family-name:"Press Start 2P"]'>
            
            <div className='Heart-box justify-items-center w-full mt-[40px]'>
            <img
                        className="w-[134px] h-[36px]  "
                        src={HeartImage}
                        alt="Heart"
                    />
                    </div>
                    <div className={`${isend ? '' : 'invisible'}`}>    
                <div className='mt-[60px] text-[32px]  text-center font-game text-stroke-black'>{wordsA1[Quest].word}</div>
                </div>
                <div className="gif_box pt-60 flex justify-center">
                    <img
                        className="w-[197px] h-[246px] pb-12 object-cover"
                        src={humanImage}
                        alt="Human"
                    />
                    <div className='pt-14.5'>
                        <img
                            className="w-[196px] h-[140px]"
                            src={monsterImage}
                            alt="Monster"
                        />
                    </div>
                </div>
            </div>
            <div className={`${isend ? '' : 'hidden'}`}>
            <div className="box2 h-[30vh]">
                <div className='w-full inline-flex gap-5 justify-center pt-5 font-gameth'>
                    {ch1 !== null && ch2 !== null && Quest !== null && (
                        <>
                            <button
                                onClick={() => Correctornot(ch1)}
                                className='w-[160px] h-[65px] bg-[#E29F51] text-center border-2 text-2xl'
                            >
                                {wordsA1[ch1].answer}
                            </button>
                            <button
                                onClick={() => Correctornot(ch2)}
                                type="button"
                                className='w-[160px] h-[65px] bg-[#E29F51] text-center border-2 text-2xl'
                            >
                                {wordsA1[ch2].answer}
                            </button>
                        </>
                    )}
                </div>
                </div>
            </div>
        </div>
    );
}