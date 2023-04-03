// UserInfo.js
import React, { useContext } from "react";
import { ThemeLang } from "../../App";
import AutoScalingText from "../AutoScalingText/index";

const UserInfo = () => {
  const introEn =
    "Hi, I'm Rustam Akhmadeev, a product designer with over 5 years of experience. Let's create something amazing together";
  const introRu =
    "Привет, я Рустам Ахмадеев, продуктовый дизайнер с опытом работы более 5 лет. Давайте вместе создадим нечто удивительное.";

  const infoEn = "Scroll to see recently posted work ↓";
  const infoRu = "Проскроль, чтобы увидеть мои работы";

  const lang = useContext(ThemeLang);

  return (
    <div className="userInfo_container">
      <AutoScalingText
        className="userInfo_title"
        content={lang === "en" ? introEn : introRu}
      />
      <div className="userInfo_info">{lang === "en" ? infoEn : infoRu}</div>
    </div>
  );
};

export default UserInfo;
