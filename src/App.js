import React from "react";
import Joke from "./components/Joke";

function App() {
  return (
    <div>
      <header className="header">Jokes</header>
      <Joke
        question="What's the best thing about Switzerland?"
        answer="I don't know, but the flag is a big plus."
      />
      <Joke question="I invented a new word!" answer="Plagiarism!" />
      <Joke answer="Did you hear about the semi-colon that broke the law? He was given two consecutive sentences." />
      <Joke answer="I got my daughter a fridge for her birthday. I can't wait to see her face light up when she opens it." />
      <Joke
        question="What do you get from a pampered cow?"
        answer="Spoiled milk"
      />
    </div>
  );
}

export default App;
