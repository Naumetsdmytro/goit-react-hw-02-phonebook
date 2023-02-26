import React, { Component } from 'react';

import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
// import { FilterContactForm } from 'components/FilterContactForm';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div
        style={{
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        {/* <FilterContactForm /> */}
        <ContactList />
      </div>
    );
  }
}
