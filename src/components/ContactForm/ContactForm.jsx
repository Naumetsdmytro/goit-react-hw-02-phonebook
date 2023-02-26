import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
  };

  nameInputId = nanoid();

  handleChange = evt => {
    console.log(evt);
    const { name, value } = evt.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.formReset();
  };

  formReset = () => {
    this.setState({
      name: '',
    });
  };

  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            id={this.nameInputId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
