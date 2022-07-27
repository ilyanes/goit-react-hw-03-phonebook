import { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter/';
import filter from './data/filter';
import shortid from 'shortid';
import { Container } from './App.styled.jsx';
import Header from './Header/Header';
import Section from './Section/Section';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handelAddContact = contact => {
    this.state.contacts.some(user => user.name === contact.name)
      ? alert('Stop')
      : this.setState(prevstate => ({
          contacts: [
            ...prevstate.contacts,
            { id: shortid.generate(), ...contact },
          ],
        }));
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    this.setState({ contacts: contacts ?? this.state.contacts });
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  deleteContact = ({ target: { id } }) => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    return (
      <Container
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 14,
          color: 'blue',
        }}
      >
        <Header title={'PhoneBook'}>
          <ContactForm handelAddContact={this.handelAddContact} />
        </Header>
        <Section title={'Contacts'}>
          <Filter
            filter={this.state.filter}
            handleChangeFilter={this.handleChangeFilter}
          />
          <ContactList
            contacts={filter(this.state.contacts, this.state.filter)}
            deleteContact={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
