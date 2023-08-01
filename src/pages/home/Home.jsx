import React from "react";

import styled from "./Home.module.scss";
import BuiznessCard from "../../components/bizness-card/BuiznessCard";

const Home = () => {
  return (
    <div className={styled.container}>
      <BuiznessCard />

      <div className={styled.container__box}>
        <div className={styled["container__box-logo"]}>
          <h1>Logo</h1>
        </div>
        <div className={styled["container__box-card"]}>
          <h3>HELP IN SK</h3>
          <span></span>
          <p>
            Я пропоную консультації з міграційно-візових питань, отримання ВНЖ,
            ПМЖ та працевлаштування на території Словацької Республіки.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
