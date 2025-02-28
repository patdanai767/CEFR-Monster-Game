import React, { useState, useEffect } from "react";
import wordsA1 from "./gameA1";
import wordsA2 from "./gameA2";
import wordsB1 from "./gameB1";
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
import MonsterHit from "/Hit.gif";
import Boardead from "/Boardead.gif";
import Heart3 from "/Heart.png";
import Heart2 from "/Heart-1.png";
import Heart1 from "/Heart-2.png";
import Heart0 from "/Heart-3.png";
import Slashsound from "/Swordslash.mp3";
import { backgrounds } from "../../constants/background";
import Homemu from "/Homemu.wav";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { motion } from "framer-motion";

export default function Game() {
  const [Random, setRandom] = useState(Math.floor(Math.random() * 2) + 1);
  const [Quest, setQuest] = useState(Math.floor(Math.random() * 896));
  const [ch1, setCh1] = useState(null);
  const [ch2, setCh2] = useState(null);
  const [wordLevel, setwordLevel] = useState(wordsA1);
  const [humanImage, setHumanImage] = useState(Idle);
  const [monsterImage, setMonsterImage] = useState(BoarIdle);
  const [HeartImage, setHeartImage] = useState(Heart3);
  const [isend, setisend] = useState(true);
  const [isPause, setIsPause] = useState(true);
  const [isWin, setIsWin] = useState(true);
  const [isNext, setIsNext] = useState(false);
  const [Winstreak, setWinstreak] = useState(1);
  const params = useParams();
  const router = useNavigate();
  const pathname = location.pathname.split("/")[1];
  const savedlevel = JSON.parse(Cookies.get("hmlevel"));
  const bgImage = backgrounds.find((bg) => bg.id === Number(params.id))?.bg;
  const [nextBgImage, setNextBgImage] = useState(null);
  const [changeBg, setChangeBg] = useState(false);

  let Heartvalue = 1;

  useEffect(() => {
    if (Random === 1) {
      setCh1(Quest);
      setCh2(Math.floor(Math.random() * 896));
    } else if (Random === 2) {
      setCh2(Quest);
      setCh1(Math.floor(Math.random() * 896));
    }
    if (Number(params.id) <= 3) {
      setwordLevel(wordsA1);
    } else if (Number(params.id) <= 6) {
      setwordLevel(wordsA2);
    } else if (Number(params.id) <= 8) {
      setwordLevel(wordsB1);
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
  }, [Random, Quest, wordLevel]);

  const handleSetting = () => {
    setIsPause(!isPause);
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

  function slash() {
    new Audio(Slashsound).play();
  }

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
    slash();
    setMonsterImage(MonsterHit);
    setWinstreak(Winstreak + 1);
    if (Winstreak === 3) {
      setIsWin(false);
      const updatedHm = savedlevel.map((level) =>
        level.id === Number(params.id) + 1 ? { ...level, isOpen: true } : level
      );
      Cookies.set("hmlevel", JSON.stringify(updatedHm));
      setMonsterImage(Boardead);
      setHumanImage(Attack);
      setTimeout(() => {
        setHumanImage(Idle);
      }, 500);
    } else {
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
    <div
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
        className="grid bg-no-repeat bg-cover bg-center h-screen justify-center relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      {isend ? (
        <motion.div
          whileTap={{ scale: 0.9 }}
          onClick={handleSetting}
          className={`${
            isPause && isWin
              ? "left-[80%] top-[4%] absolute border-[3px] bg-yellow rounded-sm w-[48px] h-[48px] content-center justify-items-center"
              : "hidden"
          }`}
        >
          <Pause size={37} />
        </motion.div>
      ) : (
        <LoseModal />
      )}
      {isWin ? null : <WinModal onNext={handleNextLevel} />}
      {isPause ? "" : <PauseModal setIsPause={setIsPause} />}

      <motion.div className="h-[70vh] font-bold text-[#E29F51] font-game">
        <motion.div
          initial={{ x: 0, y: "-100vh", opacity: 1 }}
          animate={{
            x: 0,
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="w-full  flex justify-center p-[90px] right-[0.5px] h-[10px]"
        >
          <img className="w-[134px] h-[36px]" src={HeartImage} alt="Heart" />
        </motion.div>
        <div
          className={`${
            isend && isPause && isWin ? "" : "invisible"
          } font-game`}
        >
          <div className="mt-[9px] text-[32px]  text-center text-stroke-black">
            {wordLevel[Quest].word}
          </div>
        </div>
        <motion.div
          nitial={{ x: "-100vw", y: 0, opacity: 1 }}
          animate={{
            x: 0,
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute sm:-left-[3%] sm:top-[45%] left-[5vw] top-[40%]"
        >
          <img
            className="sm:h-[25vh] sm:w-fit h-[30vh] w-[55vw] object-cover"
            src={humanImage}
            alt="Human"
          />
        </motion.div>
        <motion.div
          initial={{ x: "-100vw", y: 0, opacity: 1 }}
          animate={{
            x: 0,
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute sm:left-[50%] sm:top-[55%] left-[50vw] top-[55%]"
        >
          <img
            className="sm:h-[15vh] sm:w-fit h-[15vh] w-[50vw]"
            src={monsterImage}
            alt="Monster"
          />
        </motion.div>
      </motion.div>
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
                  {wordLevel[ch1].answer}
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => Correctornot(ch2)}
                  type="button"
                  className="w-[160px] h-[65px] bg-[#E29F51] text-center border-2 text-2xl"
                >
                  {wordLevel[ch2].answer}
                </motion.button>
              </>
            )}
          </div>
        </div>
      </div>
      <motion.div />
    </div>
  );
}
