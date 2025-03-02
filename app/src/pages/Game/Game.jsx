import React, { useState, useEffect } from "react";
import wordsA1 from "./gameA1";
import wordsA2 from "./gameA2";
import wordsB1 from "./gameB1";
import wordsB2 from "./gameB2";
import wordsC1 from "./gameC1";
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
import SnailIdle from "/snailIdle.gif";
import SnailHit from "/snailHit.gif";
import Snaildead from "/snailDead.gif";
import SnailAtk from "/snailAttack.gif";
import BeeIdle from "/bee_idle.gif";
import BeeHit from "/bee_hit.gif";
import Beedead from "/bee_dead.gif";
import BeeAtk from "/bee_attack.gif";
import BatIdle from "/bat_idle.gif";
import BatHit from "/bat_hit.gif";
import Batdead from "/bat_death2.gif";
import BatAtk from "/bat_attack.gif";
import BossIdle from "/Toad_Idle.gif";
import BossHit from "/Toad_Damage.gif";
import Bossdead from "/Toad_Death.gif";
import BossAtk from "/Toad_Attack.gif";
import Heart3 from "/Heart.png";
import Heart2 from "/Heart-1.png";
import Heart1 from "/Heart-2.png";
import Heart0 from "/Heart-3.png";
import Slashsound from "/Swordslash.mp3";
import DeadHuman from "/Humandead.mp3";
import Damaged from "/Damaged.mp3";
import { backgrounds } from "../../constants/background";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Cookies from "js-cookie";

export default function Game() {
  const [ch1, setCh1] = useState(null);
  const [ch2, setCh2] = useState(null);
  const [wordLevel, setwordLevel] = useState(wordsA1);
  const [Random, setRandom] = useState(Math.floor(Math.random() * 2) + 1);
  const [Quest, setQuest] = useState(
    Math.floor(Math.random() * (wordLevel.length - 1))
  );
  const [humanImage, setHumanImage] = useState(Idle);
  const [monsterImage, setMonsterImage] = useState(null);
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
    if (
      (Number(params.id) > 10 && pathname === "gametime") ||
      (savedlevel[params.id - 1]?.isOpen === false && pathname === "gametime")
    ) {
      router("/tmlevel");
    } else if (
      (Number(params.id) > 10 && pathname === "game") ||
      (savedlevel[params.id - 1]?.isOpen === false && pathname === "game")
    ) {
      router("/hmlevel");
    }

    if (
      Cookies.get("hmlevel") === undefined ||
      Cookies.get("tmlevel") === undefined
    ) {
      router("/");
    }

    if (Random === 1) {
      setCh1(Quest);
      let tempCh2;
      do {
        tempCh2 = Math.floor(Math.random() * (wordLevel.length - 1));
      } while (wordLevel[tempCh2].answer === wordLevel[Quest].answer);
      setCh2(tempCh2);
    } else if (Random === 2) {
      setCh2(Quest);
      let tempCh1;
      do {
        tempCh1 = Math.floor(Math.random() * (wordLevel.length - 1));
      } while (wordLevel[tempCh1].answer === wordLevel[Quest].answer);
      setCh1(tempCh1);
    }

    console.log(wordLevel.length - 1);

    if (Number(params.id) <= 2 && Number(params.id) >= 0) {
      setwordLevel(wordsA1);
      if (Winstreak === 11) {
        setMonsterImage(Boardead);
      } else {
        setMonsterImage(BoarIdle);
      }
    } else if (Number(params.id) <= 4 && Number(params.id) >= 3) {
      setwordLevel(wordsA2);
      if (Winstreak === 11) {
        setMonsterImage(Snaildead);
      } else {
        setMonsterImage(SnailIdle);
      }
    } else if (Number(params.id) <= 6 && Number(params.id) >= 5) {
      setwordLevel(wordsB1);
      if (Winstreak === 11) {
        setMonsterImage(Beedead);
      } else {
        setMonsterImage(BeeIdle);
      }
    } else if (Number(params.id) <= 9 && Number(params.id) >= 7) {
      setwordLevel(wordsB2);
      if (Winstreak === 11) {
        setMonsterImage(Batdead);
      } else {
        setMonsterImage(BatIdle);
      }
    } else if (Number(params.id) <= 10 && Number(params.id) >= 9) {
      setwordLevel(wordsC1);
      if (Winstreak === 4) {
        setMonsterImage(Bossdead);
      } else {
        setMonsterImage(BossIdle);
      }
    }

    if (isNext) {
      setTimeout(() => {}, 500);
    }

    if (isWin && !changeBg) {
      const nextLevel = Number(params.id) + 1;
      const nextBg = backgrounds.find((bg) => bg.id === nextLevel)?.bg;
      setNextBgImage(nextBg);
    }
  }, [Random, Quest, isNext, isWin, params.id, changeBg]);

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
  function damaged() {
    new Audio(Damaged).play();
  }
  function Hdead() {
    new Audio(DeadHuman).play();
  }
  const Next = () => {
    const newRandom = Math.floor(Math.random() * 2) + 1;
    const newQuest = Math.floor(Math.random() * (wordLevel.length - 1));
    let newCh1, newCh2;

    if (newRandom === 1) {
      setCh1(newQuest);
      do {
        newCh2 = Math.floor(Math.random() * (wordLevel.length - 1));
      } while (wordLevel[newCh2].answer === wordLevel[newQuest].answer);
      setCh2(newCh2);
    } else if (newRandom === 2) {
      setCh2(newQuest);
      do {
        newCh1 = Math.floor(Math.random() * (wordLevel.length - 1));
      } while (wordLevel[newCh1].answer === wordLevel[newQuest].answer);
      setCh1(newCh1);
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

    if (Number(params.id) <= 2) {
      setMonsterImage(BoarHit);
    } else if (Number(params.id) <= 4) {
      setMonsterImage(SnailHit);
    } else if (Number(params.id) <= 6) {
      setMonsterImage(BeeHit);
    } else if (Number(params.id) <= 9) {
      setMonsterImage(BatHit);
    } else if (Number(params.id) <= 10) {
      setMonsterImage(BossHit);
    }
    setWinstreak(Winstreak + 1);
    if (Winstreak === 10) {
      setIsWin(false);
      const updatedHm = savedlevel.map((level) =>
        level.id === Number(params.id)
          ? { ...level, isWin: true }
          : level.id === Number(params.id) + 1
          ? { ...level, isOpen: true }
          : level
      );
      Cookies.set("hmlevel", JSON.stringify(updatedHm));

      if (Number(params.id) <= 2) {
        setMonsterImage(Boardead);
      } else if (Number(params.id) <= 4) {
        setMonsterImage(Snaildead);
      } else if (Number(params.id) <= 6) {
        setMonsterImage(Beedead);
      } else if (Number(params.id) <= 9) {
        setMonsterImage(Batdead);
      } else if (Number(params.id) <= 10) {
        setMonsterImage(Bossdead);
      }
      setHumanImage(Attack);
      setTimeout(() => {
        setHumanImage(Idle);
      }, 500);
    } else {
      setTimeout(() => {
        setHumanImage(Idle);
        if (Number(params.id) <= 2) {
          setMonsterImage(BoarIdle);
        } else if (Number(params.id) <= 4) {
          setMonsterImage(SnailIdle);
        } else if (Number(params.id) <= 6) {
          setMonsterImage(BeeIdle);
        } else if (Number(params.id) <= 9) {
          setMonsterImage(BatlIdle);
        } else if (Number(params.id) <= 10) {
          setMonsterImage(BossIdle);
        }
      }, 500);
    }
  };

  const WrongAnim = () => {
    Heartvalue -= 1;
    if (HeartImage === Heart3 || HeartImage === Heart2) {
      damaged();
    } else if (HeartImage === Heart1) {
      Hdead();
    }

    setHumanImage(Wrong);
    if (Number(params.id) <= 2) {
      setMonsterImage(BoarAtk);
    } else if (Number(params.id) <= 4) {
      setMonsterImage(SnailAtk);
    } else if (Number(params.id) <= 6) {
      setMonsterImage(BeeAtk);
    } else if (Number(params.id) <= 9) {
      setMonsterImage(BatAtk);
    } else if (Number(params.id) <= 10) {
      setMonsterImage(BossAtk);
    }

    if (HeartImage === Heart1) {
      setHumanImage(Dead);
      if (Number(params.id) <= 2) {
        setMonsterImage(BoarAtk);
      } else if (Number(params.id) <= 4) {
        setMonsterImage(SnailAtk);
      } else if (Number(params.id) <= 6) {
        setMonsterImage(BeeAtk);
      } else if (Number(params.id) <= 9) {
        setMonsterImage(BatAtk);
      } else if (Number(params.id) <= 10) {
        setMonsterImage(BossAtk);
      }
      setHeartImage(Heart0);
      setisend(false);
    } else {
      setTimeout(() => {
        setHumanImage(Idle);
        if (Number(params.id) <= 2) {
          setMonsterImage(BoarIdle);
        } else if (Number(params.id) <= 4) {
          setMonsterImage(SnailIdle);
        } else if (Number(params.id) <= 6) {
          setMonsterImage(BeeIdle);
        } else if (Number(params.id) <= 9) {
          setMonsterImage(BatIdle);
        } else if (Number(params.id) <= 10) {
          setMonsterImage(BossIdle);
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
      className=" bg-no-repeat bg-cover bg-center h-screen justify-center relative overflow-hidden"
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
      >
        {isend ? (
          <motion.div
            whileTap={{ scale: 0.9 }}
            onClick={handleSetting}
            className={`${
              isPause && isWin
                ? "left-[80%] top-[4%] absolute border-[2px] bg-yellow rounded-sm w-[48px] h-[48px]"
                : "hidden"
            }`}
          >
            <Pause strokeWidth={1} size={44} />
          </motion.div>
        ) : (
          <LoseModal />
        )}
        {isWin ? null : <WinModal onNext={handleNextLevel} />}
        {isPause ? "" : <PauseModal setIsPause={setIsPause} />}

        <div className="h-[70vh] font-bold text-[#E29F51] font-game">
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
            <img
              className={isWin ? `w-[134px] h-[36px]` : "hidden"}
              src={HeartImage}
              alt="Heart"
            />
          </motion.div>
          <div
            className={`${
              isend && isPause && isWin ? "" : "invisible"
            } font-game`}
          >
            <div className="mt-[9px] text-[32px]  text-center text-stroke-black">
              {wordLevel[Quest]?.word}
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
            className="absolute sm:-left-[3%] sm:top-[45%] left-[5vw] top-[40%]"
          >
            <img
              className="sm:h-[25vh] sm:w-fit h-[30vh] w-[55vw] object-cover"
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
            className="absolute sm:left-[50%] sm:top-[55%] left-[50vw] top-[55%]"
          >
            <img
              className="sm:h-[15vh] sm:w-fit h-[15vh] w-[50vw]"
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
                    className="w-[160px] h-[65px] bg-yellow text-center border-2 text-2xl"
                  >
                    {wordLevel[ch1]?.answer}
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => Correctornot(ch2)}
                    type="button"
                    className="w-[160px] h-[65px] bg-yellow text-center border-2 text-2xl"
                  >
                    {wordLevel[ch2]?.answer}
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
