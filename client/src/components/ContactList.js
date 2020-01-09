import React, { Component } from 'react'
import uuid from "uuid/v4";
import ContactInfo from './ContactInfo'
import NewContactForm from './NewContactForm';

class ContactList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [
        {
          name: "Oliver Sun",
          address: "260 Clara Street",
          key: uuid(),
          id: uuid()
        },
        {
          name: "Krazy Kitty",
          address: "5 Goodwin Court",
          key: uuid(),
          id: uuid()
        }
      ]
    }
  }

  createContact = (newContact) => {
    const { contacts } = this.state;
    this.setState({
      contacts: [...contacts, newContact]
    });
  }

  deleteContact = id => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter(contact => contact.id !== id)
    });
  }


  render() {
    const { contacts, contact } = this.state;
    const Contacts = contacts.map(contact => {
      return (
        <ContactInfo
          name={contact.name}
          address={contact.address}
          id={contact.id}
          key={contact.key}
          deleteContact={this.deleteContact}
        />
      )
    })
    return (
      <div className="container">
        <NewContactForm
          createContact={this.createContact}
        />
        {Contacts}
      </div>
    )
  }
}

export default ContactList;