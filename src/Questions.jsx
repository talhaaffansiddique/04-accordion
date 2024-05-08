import React from "react";
import { SingleQuestion } from "./SingleQuestion";

export const Questions = ({ questions }) => {
  return (
    <section className="container">
      <h1>questions</h1>
      {questions.map((question) => {
        return <SingleQuestion key={question.id} {...question} />;
      })}
    </section>
  );
};
