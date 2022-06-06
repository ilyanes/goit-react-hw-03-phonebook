function Filter({ filter, handleChangeFilter }) {
  return (
    <>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChangeFilter}
      />
    </>
  );
}

export default Filter;
