// components/Header.js
import React from "react";
import LinkedInIcon from "../icons/LinkedInIcon.svg";
import TelegramIcon from "../icons/TelegramIcon.svg";
import EmailIcon from "../icons/EmailIcon.svg";

const Header = ({ lang, setLang }) => {
  const changeLanguage = (e) => {
    const language = e.target.value;
    setLang(language);
    // Добавьте свой код для переключения языков на основе выбора пользователя
  };

  return (
    <header className="header">
      <div className="header_link">
        <div className="header_title">Rustam Akhmadeev</div>
        <nav className="nav_item">
          <a href="#projects">{lang === "en" ? "Projects" : "Проекты"}</a>
          <a href="#about">{lang === "en" ? "About" : "Обо мне"}</a>
          <select id="language-select" value={lang} onChange={changeLanguage}>
            <option value="ru">Ru</option>
            <option value="en">En</option>
          </select>
          <a
            href="https://telegram.org/your_username"
            target="noopener noreferrer"
            rel="noreferrer"
          >
            <img src={TelegramIcon} alt="" />
          </a>
          <a
            href="mailto:your_email@example.com"
            target="noopener noreferrer"
            rel="noreferrer"
          >
            <img src={EmailIcon} alt="" />
          </a>
          <a
            href="https://linkedin.com/in/your_username"
            target="noopener noreferrer"
            rel="noreferrer"
          >
            <img src={LinkedInIcon} alt="" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
