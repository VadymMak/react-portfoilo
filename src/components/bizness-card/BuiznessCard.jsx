import React from "react";

import styled from "./BuiznessCard.module.scss";

const BuiznessCard = () => {
  return (
    <div className={styled.container}>
      <p>Phone: +38099909999</p>
      <p>Mail: mail@mail.com</p>
    </div>
  );
};

export default BuiznessCard;
