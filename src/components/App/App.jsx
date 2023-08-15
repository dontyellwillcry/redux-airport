import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AirlineForm from '../AirlineForm/AirlineForm';
import AirlineTable from '../AirlineTable/AirlineTable';


function App() {
  const [newAirline, addNewAirline] = useState('')

  const listOfAirlines = useSelector(store => store.listOfAirlines)
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("inside handleSubmit", newAirline)
    dispatch({
      type: 'ADD_AIRLINE',
      payload: newAirline
    })
  }

  return (
    <div>
      <AirlineForm
      handleSubmit={handleSubmit}
      addNewAirline={addNewAirline}
      
      />  
      <table>
        <tbody>
        
      <AirlineTable
      listOfAirlines={listOfAirlines}
      dispatch={dispatch}
        />
        
        </tbody>
        </table>
    </div>
  );
}

export default App;
