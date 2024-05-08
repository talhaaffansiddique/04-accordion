import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import React, { useState } from "react";

export const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
      </header>
      <p>{info}</p>
    </article>
  );
};