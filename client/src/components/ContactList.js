import React, { Component } from 'react'
import uuid from "uuid/v4";
import ContactInfo from './ContactInfo'

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


  render() {
    const { contacts, contact } = this.state;
    const Contacts = contacts.map(contact => {
      return (
        <ContactInfo
          name={contact.name}
          address={contact.address}
          id={contact.id}
          key={contact.key}
        />
      )
    })
    return (
      <div>
        {Contacts}
      </div>
    )
  }
}

export default ContactList;
