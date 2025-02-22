import React, { useState, useEffect } from "react";
import wordsA1 from "./game";
import LoseModal from "../../components/Modal/LoseModal";
import { Pause } from "lucide-react";
import PauseModal from "../../components/Modal/PauseModal";
import WinModal from "../../components/Modal/WinModal"
import Idle from "../../../public/Idle.gif";
import BoarIdle from "../../../public/boaridle.gif";
import Attack from "../../../public/Attack-01.gif";
import Wrong from "../../../public/wrong.gif";
import BoarAtk from "../../../public/boaratk.gif";
import Dead from "../../../public/Dead.gif";
import MonsterHit from "../../../public/Hit.gif";
import Boardead from "../../../public/Boardead.gif";
import Heart3 from "../../../public/Heart.png"
import Heart2 from "../../../public/Heart-1.png"
import Heart1 from "../../../public/Heart-2.png"
import Heart0 from "../../../public/Heart-3.png"

export default function Game() {
  const [Random, setRandom] = useState(Math.floor(Math.random() * 2) + 1);
  const [Quest, setQuest] = useState(Math.floor(Math.random() * 896));
  const [ch1, setCh1] = useState(null);
  const [ch2, setCh2] = useState(null);
  const [humanImage, setHumanImage] = useState(Idle);
  const [monsterImage, setMonsterImage] = useState(BoarIdle);
  const [HeartImage, setHeartImage] = useState(Heart3);
  const [isend, setisend] = useState(true);
  const [isPause, setIsPause] = useState(true);
  const [IsWin,setisWin] = useState(true);
  const [Winstreak,setWinstreak] = useState(1);
  
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

  const handleSetting = () => {
    setIsPause(!isPause);
  };
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
    setHumanImage(Attack);
    setMonsterImage(MonsterHit);
    setWinstreak(Winstreak+1);
    if(Winstreak===10)
    {
      setisWin(false);
      setMonsterImage(Boardead);
      setHumanImage(Idle);
    }
    else{
    setTimeout(() => {
      setHumanImage(Idle);
      setMonsterImage(BoarIdle);
    }, 500);
  }
  };

  const WrongAnim = () => {
    Heartvalue -= 1;
    setHumanImage(Wrong);
    setMonsterImage(BoarAtk);
    if (HeartImage === Heart1) {
      setHumanImage(Dead);
      setMonsterImage(BoarIdle);
      setHeartImage(Heart0);
      setisend(false);
    } else {
      setTimeout(() => {
        setHumanImage(Idle);
        setMonsterImage(BoarIdle);
      }, 500);
      if (Heartvalue === 0) {
        if (HeartImage === Heart3) setHeartImage(Heart2);
        else if (HeartImage === Heart2) setHeartImage(Heart1);
      }
    }
  };

  return (
    <div className="grid bg-[url('/background-game_2.png')] bg-no-repeat bg-cover h-screen justify-center">
      {isend ? (
              <div
                onClick={handleSetting}
                className={`${
                  isPause
                    ? "left-[309px] top-[32px] absolute border-[3px] bg-[#E29F51] rounded-sm w-[48px] h-[48px] content-center justify-items-center"
                    : "hidden"
                }`}
              >
                <Pause size={37} />
              </div>
            ) : (
              <LoseModal />
            )}
            {IsWin ? null : (<WinModal/>)}
            {isPause ? "" : <PauseModal setIsPause={setIsPause} />}
             
      <div className='box1 h-[70vh] font-bold text-[#E29F51] font-[family-name:"Press Start 2P"]'>
        <div className="Heart-box justify-items-center w-full mt-[40px]">
          <img className="w-[134px] h-[36px]  " src={HeartImage} alt="Heart" />
        </div>
        <div className={`${isend&&isPause&&IsWin ? "" : "invisible"} font-game`}>
          <div className="mt-[60px] text-[32px]  text-center text-stroke-black">
            {wordsA1[Quest].word}
          </div>
        </div>
        <div className="gif_box pt-60 flex justify-center">
          <img
            className="w-[197px] h-[246px] pb-12"
            src={humanImage}
            alt="Human"
          />
          <div className="pt-14.5">
            <img
              className="w-[196px] h-[140px]"
              src={monsterImage}
              alt="Monster"
            />
          </div>
        </div>
      </div>
      <div className={`${isend&&isPause&&IsWin ? "" : "hidden"}`}>
        <div className="box2 h-[30vh]">
          <div className="w-full inline-flex gap-5 justify-center pt-5">
            {ch1 !== null && ch2 !== null && Quest !== null && (
              <>
                <button
                  onClick={() => Correctornot(ch1)}
                  className="w-[160px] h-[65px] bg-[#E29F51] text-center border-2 text-2xl"
                >
                  {wordsA1[ch1].answer}
                </button>
                <button
                  onClick={() => Correctornot(ch2)}
                  type="button"
                  className="w-[160px] h-[65px] bg-[#E29F51] text-center border-2 text-2xl"
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
