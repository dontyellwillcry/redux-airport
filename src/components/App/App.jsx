import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AirlineForm from "../AirlineForm/AirlineForm";
import AirlineTable from "../AirlineTable/AirlineTable";
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


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
      <Table striped bordered hover variant="dark">
      <thead>
    <tr>
      <th>Airline</th>
      <th>Planes Available</th>
    </tr>
  </thead>
        <tbody>
          <AirlineTable listOfAirlines={listOfAirlines} dispatch={dispatch} />
        </tbody>
      </Table>
    </div>
  );
}

export default App;
