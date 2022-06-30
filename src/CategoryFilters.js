const CategoryFilters = ({ selectedValue, setSelectedValue }) => {
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
        className={`${selectedValue === "pet" ? "selected" : ""}`}
        onClick={() => {
          setSelectedValue("pet");
        }}
      >
        Pet
      </button>
      <button
        className={`${selectedValue === "clothing" ? "selected" : ""}`}
        onClick={() => {
          setSelectedValue("clothing");
        }}
      >
        Clothing
      </button>
      <button
        className={`${selectedValue === "furniture" ? "selected" : ""}`}
        onClick={() => {
          setSelectedValue("furniture");
        }}
      >
        Furniture
      </button>
      <button
        className={`${selectedValue === "vehicles" ? "selected" : ""}`}
        onClick={() => {
          setSelectedValue("vehicles");
        }}
      >
        Vehicles
      </button>
    </div>
  );
};

export default CategoryFilters;
