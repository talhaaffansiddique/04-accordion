import { useState } from "react";
import data from "./data";
import { Questions } from "./Questions";

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveID] = useState(null);

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveID(newActiveId);
  };
  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  );
};
export default App;
