function AirlineTable({ listOfAirlines }) {
  return (
    <>
      {listOfAirlines.map((airline, index) => {
        return (
          <tr key={index}>
            <td>{airline}</td>
          </tr>
        );
      })}
    </>
  );
}

export default AirlineTable;
