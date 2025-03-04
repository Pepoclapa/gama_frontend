"use client";

import { useEffect, useState } from "react";

export default function MainPage() {
  const [winnerText, setWinnerText] = useState<string>("KC je pobjedio");

  function handleOnClick() {
    setWinnerText("Pobjednik je KC");
  }

  useEffect(() => {
    console.log("MainPage mounted");
  }, []);

  useEffect(() => {
    console.log("Use effect log");
  }, [winnerText]);

  return (
    <div className="flex flex-col w-full h-screen">
      <header className="bg-red-400 h-10">Header content</header>

      <div className="flex flex-grow justify-center items-center">
        <div className="flex flex-col">
          <div className="mb-10">{winnerText}</div>
          <button
            onClick={handleOnClick}
            className="bg-slate-500 hover:bg-slate-400 h-[50px] w-[100px] rounded-lg text-xs border-pink-700 border-2"
          >
            Hello pepega
          </button>
        </div>
      </div>

      <footer className="bg-red-400 h-10">Footer content</footer>
    </div>
  );
}
