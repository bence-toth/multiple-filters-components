import { useState, useEffect } from "react";

import CategoryFilters from "./CategoryFilters";
import NumberOfParticipantsFilters from "./NumberOfParticipantsFilters";
import TimeFrameFilters from "./TimeFrameFilters";

const App = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [numberOfParticipantsFilter, setNumberOfParticipantsFilter] =
    useState("");
  const [timeFrameFilter, setTimeFrameFilter] = useState("");

  useEffect(() => {
    console.log(
      `https://my.server/activities?category=${categoryFilter}&particpants=${numberOfParticipantsFilter}&timeframe=${timeFrameFilter}`
    );
  }, [categoryFilter, numberOfParticipantsFilter, timeFrameFilter]);

  return (
    <div>
      <CategoryFilters
        selectedValue={categoryFilter}
        setSelectedValue={setCategoryFilter}
      />
      <NumberOfParticipantsFilters
        selectedValue={numberOfParticipantsFilter}
        setSelectedValue={setNumberOfParticipantsFilter}
      />
      <TimeFrameFilters
        selectedValue={timeFrameFilter}
        setSelectedValue={setTimeFrameFilter}
      />
    </div>
  );
};

export default App;
