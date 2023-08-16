import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AirlineForm from "../AirlineForm/AirlineForm";
import AirlineTable from "../AirlineTable/AirlineTable";

function App() {
  const [newAirline, addNewAirline] = useState("");
  const [numberOfPlanes, addNumberOfPlanes] = useState("");

  const listOfAirlines = useSelector((store) => store.listOfAirlines);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_AIRLINE",
      payload: { name: newAirline, number: numberOfPlanes },
    });
    addNewAirline("");
    addNumberOfPlanes("");
  };

  return (
    <div>
      <AirlineForm
        handleSubmit={handleSubmit}
        addNewAirline={addNewAirline}
        newAirline={newAirline}
        numberOfPlanes={numberOfPlanes}
        addNumberOfPlanes={addNumberOfPlanes}
      />
      <table>
        <tbody>
          <AirlineTable listOfAirlines={listOfAirlines} dispatch={dispatch} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
