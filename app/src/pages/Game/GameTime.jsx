import React, { useEffect, useState } from "react";
import wordsA1 from "./gameA1";
import LoseModal from "../../components/Modal/LoseModal";
import { Pause } from "lucide-react";
import PauseModal from "../../components/Modal/PauseModal";
import WinModal from "../../components/Modal/WinModal";
import Idle from "/Idle.gif";
import BoarIdle from "/boaridle.gif";
import Attack from "/Attack-01.gif";
import Wrong from "/wrong.gif";
import BoarAtk from "/boaratk.gif";
import SnailIdle from "/snailIdle.gif"
import SnailHit from "/snailHit.gif"
import Snaildead from "/snailDead.gif"
import SnailAtk from "/snailAttack.gif"
import Dead from "/Dead.gif";
import BoarHit from "/Hit.gif";
import { backgrounds } from "../../constants/background";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie"
import { motion } from "framer-motion";

export default function GameTime() {
  const [wordLevel,setwordLevel] = useState(wordsA1);
  const [Random, setRandom] = useState(Math.floor(Math.random() * 2) + 1);
  const [Quest, setQuest] = useState(Math.floor(Math.random() * wordLevel.length));
  const [ch1, setCh1] = useState(null);
  const [ch2, setCh2] = useState(null);
  const [humanImage, setHumanImage] = useState(Idle);
  const [monsterImage, setMonsterImage] = useState(null);
  const [isend, setisend] = useState(true);
  const [time, setTime] = useState(60);
  const [isPause, setIsPause] = useState(true);
  const [isRunning, setIsRunning] = useState(true);
  const [counts, setCounts] = useState(0);
  const [isWin, setIsWin] = useState(true);
  const [isNext, setIsNext] = useState(false);
  const params = useParams();
  const router = useNavigate();
  const pathname = location.pathname.split("/")[1];
  const bgImage = backgrounds.find((bg) => bg.id === Number(params.id))?.bg;
  const savedlevel = JSON.parse(localStorage.getItem("tmlevel"));
  const [nextBgImage, setNextBgImage] = useState(null);
  const [changeBg, setChangeBg] = useState(false);
  var timer = time;
  if (time < 0) {
    timer = 0;
  }

  useEffect(() => {
    if (Random === 1) {
      setCh1(Quest);
      setCh2(Math.floor(Math.random() * wordLevel.length));
    } else if (Random === 2) {
      setCh2(Quest);
      setCh1(Math.floor(Math.random() * wordLevel.length));
    }
    let interval = null;

    if (time && isRunning > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
        timer = timer - 1;
        checkTime(timer);
      }, 1000);
    }
    checkTime(timer);
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
    if (Number(params.id) > 10 && pathname === "gametime") {
      router("/tmlevel");
    } else if (Number(params.id) > 10 && pathname === "game") {
      router("/hmlevel");
    }

    if (isWin && !changeBg) {
      const nextLevel = Number(params.id) + 1;
      const nextBg = backgrounds.find((bg) => bg.id === nextLevel)?.bg;
      setNextBgImage(nextBg);
    }

    if (isWin == false) {
      const updatedTm = savedlevel.map((level) =>
        level.id === Number(params.id) + 1 ? { ...level, isOpen: true } : level
      );
      localStorage.setItem("tmlevel", JSON.stringify(updatedTm));
    }

    return () => {
      clearInterval(interval);
    };
  }, [Random, Quest, isRunning,wordLevel, isWin, params.id, changeBg]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    if (seconds > 0) {
      return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
        .toString()
        .padStart(2, "0")}`;
    } else {
      return "00:00";
    }
  };

  const handleNextLevel = () => {
    setChangeBg(true);
    setIsNext(true);
    setTimeout(() => {
      router(
        pathname === "gametime"
          ? `/gametime/${Number(params.id) + 1}`
          : `/game/${Number(params.id) + 1}`
      );
      setChangeBg(false);
    }, 400);
  };

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
      setCounts(counts + 1);
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
    if(Number(params.id) <= 2)
        {
        setMonsterImage(BoarHit);
        }
        else if(Number(params.id) <= 4)
          {
          setMonsterImage(SnailHit);
          }
    if (counts == 2) {
      setIsWin(false);
      setIsRunning(false);
    }
    setTimeout(() => {
      setHumanImage(Idle);
      setMonsterImage(BoarIdle);
    }, 500);
  };

  const WrongAnim = () => {
    if (time > 0) {
      setTime((prevTime) => prevTime - 5);
    } else {
      timer = 0;
    }
    setHumanImage(Wrong);
    setMonsterImage(BoarAtk);
    setTimeout(() => {
      setHumanImage(Idle);
      setMonsterImage(BoarIdle);
    }, 500);
  };

  const checkTime = (timer) => {
    if (timer == 0) {
      setisend(false);
      setHumanImage(Dead);
    }
  };

  const handleSetting = () => {
    setIsPause(!isPause);
    setIsRunning(!isRunning);
  };

  return (
    <div
      className={`grid bg-no-repeat bg-cover h-screen justify-center`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {isend ? (
        <div
          onClick={handleSetting}
          className={`${
            isPause && isWin
              ? "left-[309px] top-[32px] absolute border-[3px] bg-[#E29F51] rounded-sm w-[48px] h-[48px] content-center justify-items-center"
              : "hidden"
          }`}
        >
          <Pause size={37} />
        </div>
      ) : (
        <LoseModal />
      )}
      {isPause ? (
        ""
      ) : (
        <PauseModal setIsPause={setIsPause} setIsRunning={setIsRunning} />
      )}
      className=" bg-no-repeat bg-cover bg-center h-screen justify-center relative"
      style={{ backgroundImage: `url(${isNext ? nextBgImage : bgImage})` }}
    >
      <motion.div
        initial={{ x: 0, y: 0, opacity: 1 }}
        animate={
          isNext
            ? {
                x: "-100vw",
                y: 0,
                opacity: 1,
                transition: { duration: 0.4 },
              }
            : { x: 0, y: 0, opacity: 1 }
        }
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`grid bg-no-repeat bg-cover bg-center h-screen justify-center relative`}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {isend ? (
          <motion.div
            whileTap={{ scale: 0.9 }}
            onClick={handleSetting}
            className={`${
              isPause && isWin
                ? "left-[80%] top-[4%] absolute border-[3px] bg-[#E29F51] rounded-sm w-[48px] h-[48px] content-center justify-items-center"
                : "hidden"
            }`}
          >
            <Pause size={37} />
          </motion.div>
        ) : (
          <LoseModal />
        )}
        {isPause ? (
          ""
        ) : (
          <PauseModal setIsPause={setIsPause} setIsRunning={setIsRunning} />
        )}

      {isWin ? "" : <WinModal />}
      <div className="box1 h-[70vh] font-bold text-[#E29F51] font-game text-stroke-black">
        {time >= 10 ? (
          <div className="Heart-box text-center w-full mt-[80px] text-[32px] text-[#C8EDE0]">
            {formatTime(time)}
          </div>
        ) : (
          <div className="Heart-box text-center w-full mt-[80px] text-[32px]">
            {formatTime(time)}
          </div>
        )}
        <div
          className={`${
            isend && isPause && isWin ? "" : "invisible"
          } font-game`}
        >
          <div className="mt-[9px] text-[32px]  text-center text-stroke-black">
            {wordLevel[Quest].word}
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
        {isWin ? "" : <WinModal onNext={handleNextLevel} />}
        <div className="box1 h-[70vh] font-bold text-yellow font-game text-stroke-black">
          {time > 10 ? (
            <motion.div
              initial={{ x: 0, y: "-100vh", opacity: 1 }}
              animate={{
                x: 0,
                y: 0,
                opacity: 1,
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="Heart-box text-center w-full mt-[80px] text-[32px] text-mint"
            >
              {formatTime(time)}
            </motion.div>
          ) : (
            <div className="Heart-box text-center w-full mt-[80px] text-[32px] text-orange">
              {formatTime(time)}
            </div>
          )}
          <div
            className={`${
              isend && isPause && isWin ? "" : "invisible"
            } font-game`}
          >
            <div className="mt-[9px] text-[32px]  text-center text-stroke-black">
              {wordsA1[Quest].word}
            </div>
          </div>
          <motion.div
            initial={{ x: "-100vw", y: 0, opacity: 1 }}
            animate={{
              x: 0,
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute left-[5vw] top-[40%]"
          >
            <img
              className="h-[30vh] w-[55vw] object-cover"
              src={humanImage}
              alt="Human"
            />
          </motion.div>
          <motion.div
            initial={{ x: "100vw", y: 0, opacity: 1 }}
            animate={{
              x: 0,
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute left-[50vw] top-[55%]"
          >
            <img
              className=" h-[15vh] w-[50vw]"
              src={monsterImage}
              alt="Monster"
            />
          </motion.div>
        </div>
        <div className={`${isend && isPause && isWin ? "" : "hidden"}`}>
          <div className="box2 h-[30vh]">
            <div className="w-full inline-flex gap-5 justify-center pt-5">
              {ch1 !== null && ch2 !== null && Quest !== null && (
                <>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => Correctornot(ch1)}
                    className="w-[160px] h-[65px] bg-[#E29F51] text-center border-2 text-2xl"
                  >
                    {wordsA1[ch1].answer}
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => Correctornot(ch2)}
                    type="button"
                    className="w-[160px] h-[65px] bg-[#E29F51] text-center border-2 text-2xl"
                  >
                    {wordsA1[ch2].answer}
                  </motion.button>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
