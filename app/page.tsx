"use client";

import { useEffect, useState } from "react";
import { Dumbbell, Star, Puzzle, TreePalm, Calculator, ChefHat, Sandwich } from "lucide-react";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Hi! My name is Nupoor";

  useEffect(() => {
    let i = 0;
    const speed = 80; // typing speed in ms

    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) clearInterval(timer);
    }, speed);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 md:px-16 relative">
      
      {/* Header with typing animation */}
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center min-h-18">
        {text}
      </h1>

      <div className="hidden lg:block pointer-events-none">
      <StarIcon className="hidden md:block top-30 left-45 rotate-12" />
      <StarIcon className="hidden md:block top-50 right-75 -rotate-6" />
      <StarIcon className="hidden md:block bottom-32 left-90 rotate-45" />
      <StarIcon className="hidden md:block bottom-20 right-45 rotate-80" />
      <PuzzleIcon className="hidden md:block top-85 left-20" />
      <PuzzleIcon className="hidden md:block bottom-90 right-85 rotate-90" />
      <PuzzleIcon className="hidden md:block top-10 right-160 rotate-70" />
      <DumbbellIcon className="hidden md:block bottom-80 left-80" />
      <DumbbellIcon className="hidden md:block bottom-120 right-35 rotate-70" />
      <DumbbellIcon className="hidden md:block bottom-10 left-37 rotate-45" />
      <CalculatorIcon className="hidden md:block top-20 left-100 -rotate-35" />
      <CalculatorIcon className="hidden md:block bottom-45 right-110 rotate-45" />
      <TreePalmIcon className="hidden md:block top-40 left-155" />
      <TreePalmIcon className="hidden md:block bottom-60 right-25 rotate-45" />
      <TreePalmIcon className="hidden md:block bottom-1 right-90 -rotate-60" />
      <ChefHatIcon className="hidden md:block bottom-60 left-25 rotate-15" />
      <ChefHatIcon className="hidden md:block top-20 right-40 -rotate-20" />
      <ChefHatIcon className="hidden md:block bottom-5 left-150 rotate-20" />
      <SandwichIcon className="hidden md:block top-65 left-75 -rotate-30" />
      <SandwichIcon className="hidden md:block bottom-35 right-170 rotate-50" />
      <SandwichIcon className="hidden md:block top-35 right-125 -rotate-105" />
      </div>

      <p className="text-lg md:text-xl max-w-2xl text-center mb-8 text-gray-100">
        I'm a first year <span className="text-indigo-500 font-semibold">Computer Science</span> student at the <span className="text-indigo-500 font-semibold">University of Waterloo</span>.
      </p>
      <p className="text-lg md:text-xl max-w-2xl text-center mb-12 text-gray-100"> 
        I love solving complex problems, am passionate about using technology for good, and am interested in really almost <span className="text-yellow-400 font-semibold">everything</span>!
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/projects"
          className="border border-white px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 hover:bg-white hover:text-black"
        >
          Projects
        </a>
        <a
          href="/experience"
          className="border border-white px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 hover:bg-white hover:text-black"
        >
          Experience
        </a>
        <a
          href="./contact"
          className="border border-white px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 hover:bg-white hover:text-black"
        >
          Contact
        </a>
      </div>

    </div>
  );
  
function StarIcon({ className }: { className: string }) {
  return (
    <Star
      className={`absolute ${className} w-6 h-6 text-yellow-400 opacity-75
        transition-all duration-300
        hover:scale-125 hover:opacity-100 hover:fill-current`}
    />
  );
}
function PuzzleIcon({ className }: { className: string }) {
  return (
    <Puzzle
      className={`absolute ${className} w-6 h-6 text-blue-500 opacity-75
        transition-all duration-300
        hover:scale-125 hover:opacity-100 hover:fill-current`}
    />
  );
}
function DumbbellIcon({ className }: { className: string }) {
  return (
    <Dumbbell
      className={`absolute ${className} w-6 h-6 text-green-500 opacity-75
        transition-all duration-300
        hover:scale-125 hover:opacity-100 hover:fill-current`}
    />
  );
}
function TreePalmIcon({ className }: { className: string }) {
  return (
    <TreePalm
      className={`absolute ${className} w-6 h-6 text-violet-500 opacity-75
        transition-all duration-300
        hover:scale-125 hover:opacity-100 hover:fill-current`}
    />
  );
}
function CalculatorIcon({ className }: { className: string }) {
  return (
    <Calculator
      className={`absolute ${className} w-6 h-6 text-pink-500 opacity-75
        transition-all duration-300
        hover:scale-125 hover:opacity-100 hover:fill-current`}
    />
  );
}
function ChefHatIcon({ className }: { className: string }) {
  return (
    <ChefHat
      className={`absolute ${className} w-6 h-6 text-amber-500 opacity-75
        transition-all duration-300
        hover:scale-125 hover:opacity-100 hover:fill-current`}
    />
  );
}
function SandwichIcon({ className }: { className: string }) {
  return (
    <Sandwich
      className={`absolute ${className} w-6 h-6 text-orange-600 opacity-75
        transition-all duration-300
        hover:scale-125 hover:opacity-100 hover:fill-current`}
    />
  );
}
}
