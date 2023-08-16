import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
  
    
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
