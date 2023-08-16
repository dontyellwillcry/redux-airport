function AirlineForm({handleSubmit, addNewAirline, newAirline}) {
  return (
    <>
      <h1>Redux Airport</h1>
      <form style={{marginTop: '20px'}} onSubmit={handleSubmit}>
        <input 
        placeholder="Airline Name"
        type="text"
        value={newAirline}
        onChange={event => addNewAirline(event.target.value)} />
        <button type="submit">Add Airline</button>
      </form>
    </>
  );
}

export default AirlineForm;
