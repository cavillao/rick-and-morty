import { useQuery, gql } from "@apollo/react-hooks";
import StarredEmpty from "../../assets/StarredEmpty.svg";
import { Characters } from "../../interfaces/characters";
import { Link } from "react-router-dom";

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
  const { loading, error, data } = useQuery(OBTENER_DATOS);
  console.log("esta vaina", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <pre>{error.message}</pre>;

  const openCharacter = (characterName: any) => {
    getCharacterNameOnList(characterName);
  };

  return (
    <>
      <p className="my-5 text-[#6B7280] font-semibold text-xs/[16px] tracking-[1px]">
        {`CHARACTERS (${data.characters.results.length})`}
      </p>
      <div>
        <ul>
          {data.characters.results.map(
            (character: Characters, index: number) => (
              <li key={index}>
                <Link
                  to={character.name}
                  className="flex py-4 border-t-[1px] border-[#E5E7EB]"
                  onClick={() => openCharacter(character)}
                >
                  <img
                    src={character.image}
                    alt={`${character.name}`}
                    className="flex-none w-8 h-8 self-center rounded-full mr-4"
                  />
                  <div className="grow">
                    <p className="text-base/[20.85px]	font-semibold text-[#111827] h-[21px]">
                      {character.name}
                    </p>
                    <p className="text-base/[20.85px] font-normal text-[#6B7280] h-[21px]">
                      {character.species}
                    </p>
                  </div>
                  <img
                    src={StarredEmpty}
                    alt="Empty"
                    className="flex-none mr-[7px]"
                  />
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
}

export default CharactersList;
