import { useState } from "react";
import FiltersLogo from "../../assets/Filters.svg";
import Search from "../../assets/Search.svg";
import Filters from "../Filters";

function SearchBox() {
  const [filtersModal, setFiltersModal] = useState<boolean>(false);

  const closingFiltersModal = (closeModal: boolean) => {
    setFiltersModal(closeModal);
  };

  return (
    <div className="flex py-2 rounded-lg bg-[#F3F4F6]">
      <img src={Search} alt="Search" className="flex-none mx-4" />
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search or filter results"
        className="grow bg-[#F3F4F6] placeholder-[#6B7280] font-medium text-sm focus:outline-none"
      />
      <img
        src={FiltersLogo}
        alt="Filters"
        className="flex-none mx-4 cursor-pointer"
        onClick={() => setFiltersModal(true)}
      />
      {filtersModal && <Filters closingFiltersModal={closingFiltersModal} />}
    </div>
  );
}

export default SearchBox;
