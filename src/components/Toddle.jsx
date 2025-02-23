import { useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";
export default function ThemeToggleButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  
  return (
    <button className={`h-8 w-8 display: flex justify-center items-center bg-[#2A2B37] rounded-[6px]  ${theme == "light" ? "bg-slate-300" : null}`} onClick={toggleTheme}>
    <img src={theme == "dark" ? "/assets/images/icon-sun.svg" : "/assets/images/icon-moon.svg"} alt="icon-toddle"  className='h-5 w-5 '/>
</button>
  )
}
