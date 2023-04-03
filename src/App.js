// App.js
import React, { createContext, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import "./styles.css";
import Banner from "./components/ProgramLoyalty";

export const ThemeLang = createContext("en");

function App() {
  const [lang, setLang] = useState("en");

  return (
    <BrowserRouter>
      <ThemeLang.Provider value={lang}>
        <Header lang={lang} setLang={setLang} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ProgramLoyalty" element={<Banner />} />
        </Routes>
      </ThemeLang.Provider>
    </BrowserRouter>
  );
}

export default App;
