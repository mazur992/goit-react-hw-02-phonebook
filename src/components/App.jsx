import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  handleNameChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleBtnNameSubmit = event => {
    event.preventDefault();

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { name: this.state.name, id: nanoid(), number: this.state.number },
      ],
    }));
    this.setState({ name: '', number: '' });
  };
  getVisibleName = () => {
    const normilizeFilter = this.state.filter.toLocaleLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normilizeFilter)
    );
  };
  render() {
    const { name, number, filter } = this.state;
    const visibleName = this.getVisibleName();
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <h1>Phonebook</h1>
          <form onSubmit={this.handleBtnNameSubmit}>
            <label htmlFor={nanoid()}>
              Name
              <input
                id={nanoid()}
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handleNameChange}
              />
            </label>
            <label htmlFor={nanoid()}>
              Number
              <input
                id={nanoid()}
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handleNameChange}
              />
            </label>
            <button
              style={{
                height: '25px',
                width: '100px',
              }}
              type="submit"
            >
              Add contact
            </button>
          </form>
          {/* <ContactForm /> */}
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.handleNameChange} />
          {/* <ContactList /> */}
          <ul>
            {visibleName.map(contact => {
              return (
                <li key={contact.id}>
                  {contact.name}: {contact.number}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
