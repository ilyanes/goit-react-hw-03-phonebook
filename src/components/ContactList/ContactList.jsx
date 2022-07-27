import ContactListItem from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';

function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
