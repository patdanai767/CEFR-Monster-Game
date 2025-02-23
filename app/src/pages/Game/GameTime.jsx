import React, { useEffect, useState } from "react";
import wordsA1 from "./gameA1";
import LoseModal from "../../components/Modal/LoseModal";
import { Pause } from "lucide-react";
import PauseModal from "../../components/Modal/PauseModal";
import WinModal from "../../components/Modal/WinModal";
import Idle from "../../../public/Idle.gif";
import BoarIdle from "../../../public/boaridle.gif";
import Attack from "../../../public/Attack-01.gif";
import Wrong from "../../../public/wrong.gif";
import BoarAtk from "../../../public/boaratk.gif";
import Dead from "../../../public/Dead.gif";
import MonsterHit from "../../../public/Hit.gif";

export default function GameTime() {
  const [Random, setRandom] = useState(Math.floor(Math.random() * 2) + 1);
  const [Quest, setQuest] = useState(Math.floor(Math.random() * 896));
  const [ch1, setCh1] = useState(null);
  const [ch2, setCh2] = useState(null);
  const [humanImage, setHumanImage] = useState(Idle);
  const [monsterImage, setMonsterImage] = useState(BoarIdle);
  const [isend, setisend] = useState(true);
  const [time, setTime] = useState(60);
  const [isPause, setIsPause] = useState(true);
  const [isRunning, setIsRunning] = useState(true);
  const [counts, setCounts] = useState(0);
  const [isWin, setIsWin] = useState(true);
  var timer = time;
  if (time < 0) {
    timer = 0;
  }

  const picture = [];

  useEffect(() => {
    if (Random === 1) {
      setCh1(Quest);
      setCh2(Math.floor(Math.random() * 896));
    } else if (Random === 2) {
      setCh2(Quest);
      setCh1(Math.floor(Math.random() * 896));
    }
    let interval = null;

    if (time && isRunning > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
        timer = timer - 1;
        checkTime(timer);
      }, 1000);
      console.log(counts);
    }
    checkTime(timer);

    return () => {
      clearInterval(interval);
    };
  }, [Random, Quest, isRunning]);

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
    setMonsterImage(MonsterHit);
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
    <div className="grid bg-[url('/background-game_2.png')] bg-no-repeat bg-cover h-screen justify-center">
      {}
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
      <div className={`${isend && isPause && isWin ? "" : "hidden"}`}>
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
