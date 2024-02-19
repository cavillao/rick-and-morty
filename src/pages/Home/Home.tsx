import { useState } from "react";
import SearchBox from "../../components/SearchBox";
import Filters from "../../components/Filters";
import CharactersList from "../../layouts/CharactersList";

function Home({ getCharacterName }: any) {
  const getCharacterNameOnList = (characterName: any) => {
    getCharacterName(characterName);
  };
  return (
    <div className="m-5">
      <h1 className="font-bold text-2xl py-5">Rick and Morty list</h1>
      <SearchBox />
      <CharactersList getCharacterNameOnList={getCharacterNameOnList} />
    </div>
  );
}

export default Home;
