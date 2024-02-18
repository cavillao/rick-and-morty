import Back from "../../assets/Back.svg";
import FilterOption from "../FilterOption";
function Filters({ closingFiltersModal }: any) {
  return (
    <div className="z-[2] absolute w-full h-full top-0 left-0 bg-white">
      <div className="flex mx-5 my-7">
        <img
          src={Back}
          alt="Back"
          className="flex-none cursor-pointer"
          onClick={() => closingFiltersModal(false)}
        />
        <p className="grow text-center font-semibold text-[#111827]">Filters</p>
      </div>
      <FilterOption
        title={"Characters"}
        options={["All", "Starred", "Others"]}
      />
      <FilterOption title={"Specie"} />
      <div className="text-center absolute bottom-0 w-full mb-5 px-5">
        <button className="w-full bg-[#F3F4F6] rounded-lg py-2 text-[#6B7280] font-medium text-sm cursor-pointer">
          Filter
        </button>
      </div>
    </div>
  );
}

export default Filters;
