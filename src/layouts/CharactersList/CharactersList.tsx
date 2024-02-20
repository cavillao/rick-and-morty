import { useQuery, gql } from "@apollo/react-hooks";
import StarredEmpty from "../../assets/StarredEmpty.svg";
import StarredFull from "../../assets/StarredFull.svg";
import { Characters } from "../../interfaces/characters";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

const OBTENER_DATOS = gql`
  query {
    characters(page: 1) {
      results {
        id
        name
        image
        species
        status
      }
    }
  }
`;

function CharactersList({ getCharacterNameOnList }: any) {
  const [favCharacters, setFavCharacters] = useState<any>(null);
  const [cleanedArray, setCleanedArray] = useState<any>(null);
  console.log("esto?", cleanedArray);
  console.log("favArray", favCharacters);

  const { loading, error, data } = useQuery(OBTENER_DATOS);
  const onlyData = data?.characters.results;
  //setCleanedArray(data);

  const openCharacter: any = (characterName: any) => {
    getCharacterNameOnList(characterName);
  };

  const isFavCharacter: any = (characterInfo: any) => {
    let storedData = localStorage.getItem("StarredCharacters");
    let objetosEnLocalStorage: string[] = [];

    if (storedData !== null) {
      objetosEnLocalStorage = JSON.parse(storedData);

      if (!Array.isArray(objetosEnLocalStorage)) {
        console.error(
          "El valor almacenado no es un array válido. Reseteando a un array vacío."
        );
        objetosEnLocalStorage = [];
      }
    }

    const characInfo = Array.isArray(characterInfo)
      ? characterInfo
      : [characterInfo];

    objetosEnLocalStorage.push(...characInfo);
    localStorage.setItem(
      "StarredCharacters",
      JSON.stringify(objetosEnLocalStorage)
    );

    cleaningArray();
  };

  const cleaningArray = useCallback(() => {
    const arraySinDuplicado = onlyData?.filter(
      (fullData: any) =>
        !favCharacters?.some((favs: any) => fullData.name === favs.name)
    );
    setCleanedArray(arraySinDuplicado);
  }, [favCharacters, onlyData]);

  useEffect(() => {
    const json = localStorage.getItem("StarredCharacters");
    if (json !== null) {
      const jsonConverted = JSON.parse(json);
      setFavCharacters(jsonConverted);
    }
    favCharacters === null
      ? setCleanedArray(data?.characters.results)
      : cleaningArray();
  }, [data?.characters.results, cleaningArray, favCharacters, cleanedArray]);

  if (loading) return <p>Loading...</p>;
  if (error) return <pre>{error.message}</pre>;

  return (
    <>
      <div>
        <p className="my-5 text-[#6B7280] font-semibold text-xs/[16px] tracking-[1px]">
          {`STARRED CHARACTERS (${favCharacters?.length})`}
        </p>
        <div>
          <ul>
            {favCharacters !== null
              ? favCharacters.map((fav: any, index: number) => (
                  <li key={index}>
                    <Link
                      to={fav.name}
                      className="flex py-4 border-t-[1px] border-[#E5E7EB]"
                    >
                      <img
                        src={fav.image}
                        alt={`${fav.name}`}
                        className="flex-none w-8 h-8 self-center rounded-full mr-4"
                      />
                      <div className="grow" onClick={() => openCharacter(fav)}>
                        <p className="text-base/[20.85px]	font-semibold text-[#111827] h-[21px]">
                          {fav.name}
                        </p>
                        <p className="text-base/[20.85px] font-normal text-[#6B7280] h-[21px]">
                          {fav.species}
                        </p>
                      </div>
                      <div onClick={cleaningArray}>
                        <img
                          src={StarredFull}
                          alt="Full"
                          className="flex-none mr-[7px]"
                        />
                      </div>
                    </Link>
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>
      <div>
        <p className="my-5 text-[#6B7280] font-semibold text-xs/[16px] tracking-[1px]">
          {`CHARACTERS (${cleanedArray?.length})`}
        </p>
        <div>
          <ul>
            {cleanedArray?.map((character: Characters, index: number) => (
              <li key={index}>
                <div className="flex py-4 border-t-[1px] border-[#E5E7EB]">
                  <Link to={character.name} className="flex grow">
                    <img
                      src={character.image}
                      alt={`${character.name}`}
                      className="flex-none w-8 h-8 self-center rounded-full mr-4"
                      onClick={() => openCharacter(character)}
                    />
                    <div
                      className="grow"
                      onClick={() => openCharacter(character)}
                    >
                      <p className="text-base/[20.85px]	font-semibold text-[#111827] h-[21px]">
                        {character.name}
                      </p>
                      <p className="text-base/[20.85px] font-normal text-[#6B7280] h-[21px]">
                        {character.species}
                      </p>
                    </div>
                  </Link>
                  <img
                    src={StarredEmpty}
                    alt="Empty"
                    className="flex-none mr-[7px] cursor-pointer"
                    onClick={() => isFavCharacter(character)}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CharactersList;
