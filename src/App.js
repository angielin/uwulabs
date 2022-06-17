import React, { useState } from "react";
import EmotionsList from "./EmotionsList";

function App() {
  const [emotions, setEmotions] = useState(["Todo1", "Todo2"]);
  return (
    <>
      <EmotionsList emotions={emotions} />
      <h1>In one word, tell me how you're feeling today?</h1>
      <input type="test" />
      <button> Submit </button>
    </>
  );
}

export default App;
