const NumberOfParticipantsFilters = ({ selectedValue, setSelectedValue }) => {
  return (
    <div className="filterButtons">
      <button
        className={`${selectedValue === "" ? "selected" : ""}`}
        onClick={() => {
          setSelectedValue("");
        }}
      >
        Show all
      </button>
      <button
        className={`${selectedValue === "1-5" ? "selected" : ""}`}
        onClick={() => {
          setSelectedValue("1-5");
        }}
      >
        1-5 people
      </button>
      <button
        className={`${selectedValue === "6-10" ? "selected" : ""}`}
        onClick={() => {
          setSelectedValue("6-10");
        }}
      >
        6-10 people
      </button>
      <button
        className={`${selectedValue === "11-15" ? "selected" : ""}`}
        onClick={() => {
          setSelectedValue("11-15");
        }}
      >
        11-15 people
      </button>
    </div>
  );
};

export default NumberOfParticipantsFilters;
