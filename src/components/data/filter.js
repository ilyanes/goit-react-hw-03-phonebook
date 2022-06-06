function filter(contacts, filter) {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.trim().toLowerCase())
  );
}

export default filter;
