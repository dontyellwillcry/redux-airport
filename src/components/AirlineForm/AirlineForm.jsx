import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';




function AirlineForm({
  handleSubmit,
  addNewAirline,
  newAirline,
  numberOfPlanes,
  addNumberOfPlanes,
}) {
  return (
    <>
      <h1>Redux Airport</h1>
      <form style={{ marginTop: "20px" }} onSubmit={handleSubmit}>
        <input
          placeholder="Airline Name"
          type="text"
          value={newAirline}
          onChange={(event) => addNewAirline(event.target.value)}
        />
        <input
          placeholder="Number of Planes"
          type="text"
          value={numberOfPlanes}
          onChange={(event) => addNumberOfPlanes(event.target.value)}
        />
        <Button variant="outline-dark" type="submit">Add Plane</Button>
      </form>
    </>
  );
}

export default AirlineForm;
