import { useQuery, gql } from "@apollo/react-hooks";
import Back from "../../assets/Back.svg";
import StarredEmpty from "../../assets/StarredEmpty.svg";
import { Link } from "react-router-dom";

interface CharacterInfoProps {
  characterName: string;
}

const OBTENER_PERSONAJE = gql`
  query {
    characters(filter: { name: $characterName }) {
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

function CharacterInfo({ characterName }: any) {
  //   const { loading, error, data } = useQuery(OBTENER_PERSONAJE, {
  //     variables: { characterName },
  //   });
  console.log("esta vaina", characterName);

  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <pre>{error.message}</pre>;

  return (
    <div className="m-6">
      <Link to="/">
        <img src={Back} alt="back-logo" className="my-7 ml-[2px]" />
      </Link>
      <div className="flex mb-2">
        <img
          src={characterName.image}
          alt={characterName.name}
          className="w-[75px] h-[75px] rounded-full"
        />
        <div className="p-[5px] rounded-full self-end bg-white absolute left-20">
          <img src={StarredEmpty} alt="Starred-Empty" />
        </div>
      </div>
      <p className="text-2xl leading-8 font-bold text-[#111827] mb-4">
        {characterName.name}
      </p>
      <div className="py-4">
        <p className="text-base leading-[21px] font-semibold text-gray-900">
          Specie
        </p>
        <p className="text-base leading-[21px] font-medium text-gray-500">
          {characterName.species}
        </p>
      </div>
      <div className="py-4 border-t-[1px] border-[#E5E7EB]">
        <p className="text-base leading-[21px] font-semibold text-gray-900">
          Status
        </p>
        <p className="text-base leading-[21px] font-medium text-gray-500">
          {characterName.status}
        </p>
      </div>
      <div className="py-4 border-t-[1px] border-[#E5E7EB]">
        <p className="text-base leading-[21px] font-semibold text-gray-900">
          Ocuppation
        </p>
        <p className="text-base leading-[21px] font-medium text-gray-500">
          ...
        </p>
      </div>
    </div>
  );
}

export default CharacterInfo;
