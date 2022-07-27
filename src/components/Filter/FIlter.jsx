import PropTypes from 'prop-types';
function Filter({ filter, handleChangeFilter }) {
  return (
    <label>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChangeFilter}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
