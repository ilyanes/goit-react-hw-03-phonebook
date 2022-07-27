import PropTypes from 'prop-types';

function ContactListItem({ name, number, id, deleteContact }) {
  return (
    <li key={id}>
      <p>Name: {name}</p>
      <p>Number: {number}</p>
      <button type="button" id={id} onClick={deleteContact}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
