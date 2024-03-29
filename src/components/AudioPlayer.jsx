import {
  ArrowDownTrayIcon,
  PauseIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";

export default function AudioPlayer({ className }) {
  const audioPlayer = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isPlaying) {
        setTimer();
      }
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [isPlaying]);

  function setTimer() {
    if (audioPlayer.current) {
      console.log(audioPlayer.current.duration);
      const _duration = Math.floor(audioPlayer.current.duration);
      const _elapsed = Math.floor(audioPlayer.current.currentTime);
      setDuration(_duration);
      setElapsed(_elapsed);

      if (_duration === _elapsed) {
        setElapsed(0);
        setIsPlaying(false);
        audioPlayer.current.pause();
        audioPlayer.current.currentTime = 0;
      }
    }
  }

  function formatTime(time) {
    if (time && !isNaN(time)) {
      const minutes =
        Math.floor(time / 60) < 10
          ? `0${Math.floor(time / 60)}`
          : Math.floor(time / 60);
      const seconds =
        Math.floor(time % 60) < 10
          ? `0${Math.floor(time % 60)}`
          : Math.floor(time % 60);

      return `${minutes}:${seconds}`;
    }
    return "00:00";
  }

  const togglePlay = () => {
    if (!isPlaying && audioPlayer.current) {
      audioPlayer.current.play();
    } else if (audioPlayer.current) {
      audioPlayer.current.pause();
    }
    setIsPlaying((prev) => !prev);
  };

  const toggleForward = () => {
    if (audioPlayer.current) {
      audioPlayer.current.play();
      setIsPlaying(true);
      audioPlayer.current.currentTime += 15;
    }
  };

  const toggleBackward = () => {
    if (audioPlayer.current) {
      audioPlayer.current.play();
      setIsPlaying(true);
      audioPlayer.current.currentTime -= 15;
    }
  };

  return (
    <>
      <audio
        src="https://api.m1a.dev/media/c6118f28-3998-42a1-992f-33f89e54b677.mp3"
        ref={audioPlayer}
        className="hidden"
      />
      <div
        className={`flex w-full flex-col rounded-lg bg-white shadow-black/5 ring-1 ring-slate-700/10 md:flex-row ${className}`}
      >
        <div className="flex items-center justify-between space-x-4 py-4 px-6 md:justify-start">
          <button onClick={toggleBackward}>
            <svg className="h-6 w-6 flex-none" fill="none">
              <path
                d="M6.22 11.03a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM3 6.75l-.53-.53a.75.75 0 0 0 0 1.06L3 6.75Zm4.28-3.22a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM13.5 18a.75.75 0 0 0 0 1.5V18ZM7.28 9.97 3.53 6.22 2.47 7.28l3.75 3.75 1.06-1.06ZM3.53 7.28l3.75-3.75-1.06-1.06-3.75 3.75 1.06 1.06Zm16.72 5.47c0 2.9-2.35 5.25-5.25 5.25v1.5a6.75 6.75 0 0 0 6.75-6.75h-1.5ZM15 7.5c2.9 0 5.25 2.35 5.25 5.25h1.5A6.75 6.75 0 0 0 15 6v1.5ZM15 6H3v1.5h12V6Zm0 12h-1.5v1.5H15V18Z"
                fill="#64748B"
              ></path>
              <path
                d="M3 15.75h.75V21"
                stroke="#64748B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M9 16.5A.75.75 0 0 0 9 15v1.5Zm-2.25-.75V15a.75.75 0 0 0-.75.75h.75Zm0 2.25H6c0 .414.336.75.75.75V18Zm0 2.25a.75.75 0 0 0 0 1.5v-1.5ZM9 15H6.75v1.5H9V15Zm-3 .75V18h1.5v-2.25H6Zm.75 3h1.5v-1.5h-1.5v1.5Zm1.5 1.5h-1.5v1.5h1.5v-1.5ZM9 19.5a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25H9Zm-.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Z"
                fill="#64748B"
              ></path>
            </svg>
          </button>
          <button onClick={togglePlay}>
            {isPlaying ? (
              <PauseIcon className="h-8 w-8" />
            ) : (
              <PlayIcon className="h-8 w-8" />
            )}
          </button>
          <button onClick={toggleForward}>
            <svg className="h-6 w-6 flex-none" fill="none">
              <path
                d="M16.72 9.97a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM21 6.75l.53.53a.75.75 0 0 0 0-1.06l-.53.53Zm-3.22-4.28a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM10.5 19.5a.75.75 0 0 0 0-1.5v1.5Zm3.75-4.5a.75.75 0 0 0 0 1.5V15Zm.75.75h.75A.75.75 0 0 0 15 15v.75ZM14.25 21a.75.75 0 0 0 1.5 0h-1.5Zm6-4.5a.75.75 0 0 0 0-1.5v1.5ZM18 15.75V15a.75.75 0 0 0-.75.75H18ZM18 18h-.75c0 .414.336.75.75.75V18Zm0 2.25a.75.75 0 0 0 0 1.5v-1.5Zm-.22-9.22 3.75-3.75-1.06-1.06-3.75 3.75 1.06 1.06Zm3.75-4.81-3.75-3.75-1.06 1.06 3.75 3.75 1.06-1.06ZM2.25 12.75A6.75 6.75 0 0 0 9 19.5V18a5.25 5.25 0 0 1-5.25-5.25h-1.5ZM9 6a6.75 6.75 0 0 0-6.75 6.75h1.5C3.75 9.85 6.1 7.5 9 7.5V6Zm0 1.5h12V6H9v1.5Zm0 12h1.5V18H9v1.5Zm5.25-3H15V15h-.75v1.5Zm0-.75V21h1.5v-5.25h-1.5Zm6-.75H18v1.5h2.25V15Zm-3 .75V18h1.5v-2.25h-1.5Zm.75 3h1.5v-1.5H18v1.5Zm1.5 1.5H18v1.5h1.5v-1.5Zm.75-.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Z"
                fill="#64748B"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-auto items-center border-l border-slate-200/60 pr-4 pl-6 pb-6 text-[0.8125rem] leading-5 text-slate-700 md:pb-0">
          <div>{formatTime(elapsed)}</div>
          <div className="ml-4 flex flex-auto rounded-full bg-slate-100">
            <div
              style={{ width: `${(elapsed / duration) * 100}%` }}
              className="h-2 flex-none rounded-l-full rounded-r-[1px] bg-blue-600"
            ></div>
            <div className="-my-[0.3125rem] ml-0.5 h-[1.125rem] w-1 rounded-full bg-blue-600"></div>
          </div>
          <div className="ml-4">{formatTime(duration)}</div>
        </div>
        <div className="hidden items-center justify-center border-l border-slate-200/60 px-6 md:flex">
          <a
            href="https://api.m1a.dev/media/c6118f28-3998-42a1-992f-33f89e54b677.mp3"
            download
          >
            <ArrowDownTrayIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </>
  );
}
