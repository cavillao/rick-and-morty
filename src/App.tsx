import React, { useState } from "react";
import Home from "./pages/Home";
import CharacterInfo from "./pages/CharacterInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [characterName, setCharacterName] = useState<any>("");
  console.log("En app", characterName);

  const getCharacterName = (characterName: any) => {
    setCharacterName(characterName);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home getCharacterName={getCharacterName} />}
        />
        <Route
          path={characterName.name}
          element={<CharacterInfo characterName={characterName} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
