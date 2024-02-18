function FilterOption({ title, options }: any) {
  console.log(title, options);

  return (
    <div className="m-5">
      <p className="mb-3 font-medium text-[#6B7280] text-base">{title}</p>
      <div className="flex gap-2">
        {options !== undefined
          ? options.map((option: string) => (
              <p className="grow text-center border-solid border-[1px] border-[#E5E7EB] p-2 rounded-lg font-semibold text-sm">
                {option}
              </p>
            ))
          : ""}
      </div>
    </div>
  );
}

export default FilterOption;
