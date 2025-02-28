import React, { useState, useEffect } from "react";
import wordsA1 from "./gameA1";
import wordsA2 from "./gameA2";
import wordsB1 from "./gameB1";
import wordsB2 from "./gameB2";
import LoseModal from "../../components/Modal/LoseModal";
import { Pause } from "lucide-react";
import PauseModal from "../../components/Modal/PauseModal";
import WinModal from "../../components/Modal/WinModal";
import Idle from "/Idle.gif";
import BoarIdle from "/boaridle.gif";
import Attack from "/Attack-01.gif";
import Wrong from "/wrong.gif";
import BoarAtk from "/boaratk.gif";
import Dead from "/Dead.gif";
import BoarHit from "/Hit.gif";
import Boardead from "/Boardead.gif";
import SnailIdle from "/snailIdle.gif"
import SnailHit from "/snailHit.gif"
import Snaildead from "/snailDead.gif"
import SnailAtk from "/snailAttack.gif"
import Heart3 from "/Heart.png";
import Heart2 from "/Heart-1.png";
import Heart1 from "/Heart-2.png";
import Heart0 from "/Heart-3.png";
import Slashsound from "/Swordslash.mp3";
import { backgrounds } from "../../constants/background";
import Homemu from "/Homemu.wav";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie"

export default function Game() {
  const [ch1, setCh1] = useState(null);
  const [ch2, setCh2] = useState(null);
  const [wordLevel,setwordLevel] = useState(wordsA1);
  const [Random, setRandom] = useState(Math.floor(Math.random() * 2) + 1);
  const [Quest, setQuest] = useState(Math.floor(Math.random() * wordLevel.length));
  const [humanImage, setHumanImage] = useState(Idle);
  const [monsterImage, setMonsterImage] = useState(null);
  const [HeartImage, setHeartImage] = useState(Heart3);
  const [isend, setisend] = useState(true);
  const [isPause, setIsPause] = useState(true);
  const [isWin, setIsWin] = useState(true);
  const [Winstreak, setWinstreak] = useState(1);
  const params = useParams();
  const router = useNavigate();
  const pathname = location.pathname.split("/")[1];
  const savedlevel = JSON.parse(Cookies.get("hmlevel"));
  const bgImage = backgrounds.find((bg) => bg.id === Number(params.id))?.bg;
  let Heartvalue = 1;

  useEffect(() => {
    
    if (Random === 1) {
      setCh1(Quest);
      setCh2(Math.floor(Math.random() * wordLevel.length));
    } else if (Random === 2) {
      setCh2(Quest);
      setCh1(Math.floor(Math.random() * wordLevel.length));
    }
    if(Number(params.id) <= 2)
      {
        setwordLevel(wordsA1);
        if(Winstreak===4)
        {
          setMonsterImage(Boardead);
        }
        else
        {
          setMonsterImage(BoarIdle);
        }
        
      }
      else if(Number(params.id) <= 4)
        {
          setwordLevel(wordsA2);
          if(Winstreak===4)
            {
              setMonsterImage(Snaildead);
            }
            else
            {
              setMonsterImage(SnailIdle);
            }
        
        }
        else if(Number(params.id) <= 6)
          {
            setwordLevel(wordsB1);
          }
          else if(Number(params.id) <= 9)
            {
              setwordLevel(wordsB2);
            }
      
    if (
      (Number(params.id) > 10 && pathname === "gametime") ||
      (savedlevel[params.id - 1].isOpen === false && pathname === "gametime")
    ) {
      router("/tmlevel");
    } else if (
      (Number(params.id) > 10 && pathname === "game") ||
      (savedlevel[params.id - 1].isOpen === false && pathname === "game")
    ) {
      router("/hmlevel");
    }

  }, [Random, Quest ,wordLevel]);
 
  const handleSetting = () => {
    setIsPause(!isPause);
  };
  
  function slash() {
    new Audio(Slashsound).play();
  }

  const Next = () => {
    const newRandom = Math.floor(Math.random() * 2) + 1;
    const newQuest = Math.floor(Math.random() * wordLevel.length);
    let newCh1, newCh2;

    if (newRandom === 1) {
      newCh1 = newQuest;
      newCh2 = Math.floor(Math.random() * wordLevel.length);
    } else if (newRandom === 2) {
      newCh2 = newQuest;
      newCh1 = Math.floor(Math.random() * wordLevel.length);
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
    slash();
    if(Number(params.id) <= 2)
    {
    setMonsterImage(BoarHit);
    }
    else if(Number(params.id) <= 4)
      {
      setMonsterImage(SnailHit);
      }
    setWinstreak(Winstreak + 1);
    if (Winstreak === 3) {
      setIsWin(false);
      const updatedHm = savedlevel.map((level) =>
        level.id === Number(params.id) + 1 ? { ...level, isOpen: true } : level
      );
      Cookies.set("hmlevel", JSON.stringify(updatedHm));
      if(Number(params.id) <= 2)
        {
        setMonsterImage(Boardead);
        }
        else if(Number(params.id) <= 4)
          {
          setMonsterImage(Snaildead);
          }
      setHumanImage(Attack);
      setTimeout(() => {
        setHumanImage(Idle);
      }, 500);
    } else {
      setTimeout(() => {
        setHumanImage(Idle);
        if(Number(params.id) <= 2)
          {
            setMonsterImage(BoarIdle);
          }
          else if(Number(params.id) <= 4)
            {
              setMonsterImage(SnailIdle);
            }
      }, 500);
    }
  };

  const WrongAnim = () => {
    Heartvalue -= 1;
    setHumanImage(Wrong);
    if(Number(params.id) <= 2)
      {
        setMonsterImage(BoarAtk);
      }
      else if(Number(params.id) <= 4)
        {

          setMonsterImage(SnailAtk);
        
        }
    
    
    
    if (HeartImage === Heart1) {
      setHumanImage(Dead);
      if(Number(params.id) <= 2)
        {
          setMonsterImage(BoarAtk);
        }
        else if(Number(params.id) <= 4)
          {
            setMonsterImage(SnailAtk);
          }
      setHeartImage(Heart0);
      setisend(false);
    } else {
      setTimeout(() => {
        setHumanImage(Idle);
        if(Number(params.id) <= 2)
          {
            setMonsterImage(BoarIdle);
          }
          else if(Number(params.id) <= 4)
            {
              setMonsterImage(SnailIdle);
            }
      }, 500);
      if (Heartvalue === 0) {
        if (HeartImage === Heart3) setHeartImage(Heart2);
        else if (HeartImage === Heart2) setHeartImage(Heart1);
      }
    }
  };

  return (
    <div
      className="grid bg-no-repeat bg-cover bg-center h-screen justify-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {isend ? (
        <div
          onClick={handleSetting}
          className={`${
            isPause && isWin
              ? "left-[80%] top-[4%] absolute border-[3px] bg-[#E29F51] rounded-sm w-[48px] h-[48px] content-center justify-items-center"
              : "hidden"
          }`}
        >
          <Pause size={37} />
        </div>
      ) : (
        <LoseModal />
      )}
      {isWin ? null : <WinModal />}
      {isPause ? "" : <PauseModal setIsPause={setIsPause} />}

      <div className="h-[70vh] font-bold text-[#E29F51] font-game">
        <div className="w-full  flex justify-center p-[90px] right-[0.5px] h-[10px]">
          <img className="w-[134px] h-[36px]" src={HeartImage} alt="Heart" />
        </div>
        <div
          className={`${
            isend && isPause && isWin ? "" : "invisible"
          } font-game`}
        >
          <div className="mt-[9px] text-[32px]  text-center text-stroke-black">
            {wordLevel[Quest].word}
          </div>
        </div>
        <div className="absolute left-[5vw] top-[40%]">
          <img
            className="h-[30vh] w-[55vw] object-cover"
            src={humanImage}
            alt="Human"
          />
        </div>
        <div className="absolute left-[50vw] top-[55%]">
          <img className="h-[15vh] w-[50vw]" src={monsterImage} alt="Monster" />
        </div>
      </div>
      <div className={`${isend && isPause && isWin ? "" : "hidden"}`}>
        <div className="box2 h-[30vh]">
          <div className="w-full inline-flex gap-5 justify-center pt-5">
            {ch1 !== null && ch2 !== null && Quest !== null && (
              <>
                <button
                  onClick={() => Correctornot(ch1)}
                  className="w-[160px] h-[65px] bg-[#E29F51] text-center border-2 text-2xl"
                >
                  {wordLevel[ch1].answer}
                </button>
                <button
                  onClick={() => Correctornot(ch2)}
                  type="button"
                  className="w-[160px] h-[65px] bg-[#E29F51] text-center border-2 text-2xl"
                >
                  {wordLevel[ch2].answer}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
