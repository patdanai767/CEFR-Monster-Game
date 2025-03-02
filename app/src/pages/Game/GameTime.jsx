import React, { useEffect, useState } from "react";
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
import Slashsound from "/Swordslash.mp3";
import DeadHuman from "/Humandead.mp3";
import Damaged from "/Damaged.mp3";
import { backgrounds } from "../../constants/background";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { motion } from "framer-motion";

export default function GameTime() {
  const [ch1, setCh1] = useState(null);
  const [ch2, setCh2] = useState(null);
  const [wordLevel, setwordLevel] = useState(wordsA1);
  const [Random, setRandom] = useState(Math.floor(Math.random() * 2) + 1);
  const [Quest, setQuest] = useState(
    Math.floor(Math.random() * (wordLevel.length - 1))
  );
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
  const savedlevel = JSON.parse(Cookies.get("tmlevel"));
  const [nextBgImage, setNextBgImage] = useState(null);
  const [changeBg, setChangeBg] = useState(false);
  var timer = time;
  if (time < 0) {
    timer = 0;
  }

  useEffect(() => {
    console.log(counts);
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

    if (Number(params.id) <= 2) {
      setwordLevel(wordsA1);
      if (counts === 3) {
        setMonsterImage(Boardead);
      } else {
        setMonsterImage(BoarIdle);
      }
    } else if (Number(params.id) <= 4) {
      setwordLevel(wordsA2);
      if (counts === 3) {
        setMonsterImage(Snaildead);
      } else {
        setMonsterImage(SnailIdle);
      }
    } else if (Number(params.id) <= 6) {
      setwordLevel(wordsB1);
      if (counts === 3) {
        setMonsterImage(Beedead);
      } else {
        setMonsterImage(BeeIdle);
      }
    } else if (Number(params.id) <= 9) {
      setwordLevel(wordsB2);
      if (counts === 3) {
        setMonsterImage(Batdead);
      } else {
        setMonsterImage(BatIdle);
      }
    } else if (Number(params.id) <= 10) {
      setwordLevel(wordsC1);
      if (counts === 3) {
        setMonsterImage(Bossdead);
      } else {
        setMonsterImage(BossIdle);
      }
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

    if (isWin) {
      const nextLevel = Number(params.id) + 1;
      const nextBg = backgrounds.find((bg) => bg.id === nextLevel)?.bg;
      setNextBgImage(nextBg);
    }

    if (isWin == false) {
      const updatedTm = savedlevel.map((level) =>
        level.id === Number(params.id) + 1 ? { ...level, isOpen: true } : level
      );
      Cookies.set("tmlevel", JSON.stringify(updatedTm));
    }

    return () => {
      clearInterval(interval);
    };
  }, [Random, Quest, isRunning, isWin, params.id, changeBg]);

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
    setRandom(newRandom);
    setQuest(newQuest);
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
    setCounts(counts + 1);

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

    if (counts === 2) {
      setIsWin(false);
      setIsRunning(false);
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
    if (time > 0) {
      setTime((prevTime) => prevTime - 5);
      damaged();
    } else {
      timer = 0;
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
  };

  const checkTime = (timer) => {
    if (timer == 0) {
      setisend(false);
      setHumanImage(Dead);
      Hdead();
    }
  };

  const handleSetting = () => {
    setIsPause(!isPause);
    setIsRunning(!isRunning);
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

        {isWin ? "" : <WinModal onNext={handleNextLevel} />}
        <div className="box1 h-[70vh] font-bold text-[#E29F51] font-game text-stroke-black">
          {time >= 10 ? (
            <motion.div
              initial={{ x: 0, y: "-100vh", opacity: 1 }}
              animate={{
                x: 0,
                y: 0,
                opacity: 1,
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="Heart-box text-center w-full mt-[80px] text-[32px] text-[#C8EDE0]"
            >
              {formatTime(time)}
            </motion.div>
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
        </div>
        <div className={`${isend && isPause && isWin ? "" : "hidden"}`}>
          <div className="box2 h-[30vh]">
            <div className="w-full inline-flex gap-5 justify-center pt-5">
              {ch1 !== null && ch2 !== null && Quest !== null && (
                <>
                  <motion.button
                    onClick={() => Correctornot(ch1)}
                    className="w-[160px] h-[65px] bg-[#E29F51] text-center border-2 text-2xl"
                  >
                    {wordLevel[ch1]?.answer}
                  </motion.button>
                  <motion.button
                    onClick={() => Correctornot(ch2)}
                    type="button"
                    className="w-[160px] h-[65px] bg-[#E29F51] text-center border-2 text-2xl"
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
