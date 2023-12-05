import { useState } from "react";
import { HeroProps } from "../hero/Hero";
import engFlag from "../../assets/svg/gb.svg"
import deFlag from "../../assets/svg/de.svg"
import LanguageBtn from "./ui/LanguageBtn";

export default function LanguageSwitch({ changeLanguage }: HeroProps) {
  const [chosenLanguage, setChosenLanguage] = useState("en");

  const hangleLanguageChange = () => {
    setChosenLanguage(chosenLanguage === "en" ? "de" : "en");
    console.log(changeLanguage);
    changeLanguage(chosenLanguage);
  }

  return (
      <LanguageBtn changeLanguage={hangleLanguageChange}><div className=""><img src={chosenLanguage === "de" ? deFlag : engFlag} className="w-8 h-8" alt={chosenLanguage} /></div></LanguageBtn>)
}
