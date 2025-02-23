"use client";
import Button from "@/components/Button";
import DensityChecker from "@/components/DensityChecker";
import Navbar from "@/components/Navbar";
import TextFieldComponent from "@/components/TextFieldComponent";
import { useState, useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  const [text, setText] = useState("");

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const handleSpacingCount = (newText) => {
    setText(newText);
  };
  const totalCharacters = text.length;
  const words = text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);
  const totalWords = words.length;
  const sentences = text
    .split(/[.!?]+/)
    .filter((sentence) => sentence.trim().length > 0);
  const totalSentences = sentences.length;

  return (
    <div
      className={`h-screen  pt-10  font-sans flex flex-col gap-10 px-4 md:px-8 md:mx-0 lg:px-56 lg:mx-0 pb-[32px] ${
        theme === "dark" ? "bg-[#12131A] text-white" : "bg-white text-black"
      }`}
    >
      <Navbar theme={theme} />
      <header className="">
        <h1 className="font-bold text-[40px] md:text-[64px] text-center leading-[1] tracking-[-1px]">
          Analyze your text in real-time.
        </h1>
      </header>
      <TextFieldComponent
        onTextChange={handleTextChange}
        onCheckBoxChange={handleSpacingCount}
      />
      <div className="flex flex-col gap-4 md:flex-row md:justify-around md:items-center">
        <Button
          color={"bg-[#D3A0FA]"}
          pattern={"character"}
          number={totalCharacters}
          text={"Total Characteres"}
        />
        <Button
          color={"bg-[#FF9F00]"}
          pattern={"word"}
          number={totalWords}
          text={"World Count"}
        />
        <Button
          color={"bg-[#FE8159]"}
          pattern={"sentence"}
          number={totalSentences}
          text={"Sentence Count"}
        />
      </div>
      <DensityChecker text={text} />
    </div>
  );
}
