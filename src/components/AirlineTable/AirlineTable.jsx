function AirlineTable({ listOfAirlines }) {
  return (
    <>
      {listOfAirlines.map((airline, index) => {
        return (
          <tr key={index}>
            <td>{airline.name}</td>
            <td>{airline.number}</td>
          </tr>
        );
      })}
    </>
  );
}

export default AirlineTable;
