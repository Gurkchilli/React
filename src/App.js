import React from "react";
import Joke from "./components/Joke";
import jokesData from "./jokesData";

function App() {
  const jokeComponent = jokesData.map((joke) => {
    return <Joke key={joke.id} question={joke.question} answer={joke.answer} />;
  });

  return (
    <div>
      <header className="header">Jokes</header>
      {jokeComponent}
    </div>
  );
}

export default App;
