import React, { createContext, useContext, useState, useEffect } from "react";
import Howler from "react-howler";
import Cookies from "js-cookie";

// Create a context for global music control
const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const volumeCookie = Cookies.get("volume") === "true";
  const [isVolumeOn, setIsVolumeOn] = useState(volumeCookie);
  const [playing, setPlaying] = useState(true); // Keeps track of playing state
  const [music, setMusic] = useState("/music/farmmusic.mp3");
  const pathname = location.pathname.split("/")[1];

  useEffect(() => {
    if (pathname === "game" || pathname === "gametime") {
      setMusic("/music/lingjunk.wav");
    } else if (
      pathname === "" ||
      pathname === "mode" ||
      pathname === "hmlevel" ||
      pathname === "tmlevel" ||
      pathname === "member" ||
      pathname === "Word"
    ) {
      setMusic("/music/Homemu.wav");
    }
    Cookies.set("volume", isVolumeOn);
    console.log(isVolumeOn);
  }, [isVolumeOn]);

  return (
    <MusicContext.Provider
      value={{ isVolumeOn, setIsVolumeOn, playing, setPlaying }}
    >
      <Howler
        src={music} // Replace with your file
        playing={playing}
        loop={true}
        mute={!isVolumeOn}
        volume={0.5}
      />
      {children}
    </MusicContext.Provider>
  );
};

// Custom hook for using music state
export const useMusic = () => useContext(MusicContext);
