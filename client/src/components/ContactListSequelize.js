import React, { Component } from 'react'
import API from '../utilities/API';
import './ContactList.css';
import ContactInfo from './ContactInfo'
import NewContactForm from './NewContactForm';

class ContactList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: []
    }
  }

  createContact = () => {
    API.getContacts()
      .then(res => {
        if (res.data === []) {
          API.saveContacts({
            name: name,
            address: address
          })
        }
      })
      .catch(error => console.log(error))
    console.log(res.data)
  }

  deleteContact = id => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter(contact => contact.id !== id)
    });
  }

  updateName = (id, updatedContact) => {
    const { contacts } = this.state;
    const updatedContacts = contacts.map(contact => {
      if (contact.id === id) {
        return { ...contact, name: updatedContact }
      }
      return contact;
    })
    this.setState({
      contacts: updatedContacts
    });
  }

  updateAddress = (id, updatedContact) => {
    const { contacts } = this.state;
    const updatedContacts = contacts.map(contact => {
      if (contact.id === id) {
        return { ...contact, address: updatedContact }
      }
      return contact;
    })
    this.setState({
      contacts: updatedContacts
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
          updateName={this.updateName}
          updateAddress={this.updateAddress}
          changeMyMind={this.changeMyMind}
        />
      )
    })
    return (
      <div className="container">
        <NewContactForm
          createContact={this.createContact}
          changeMyMind={this.changeMyMind}
        />
        <div className="contacts-container">
          {Contacts}
        </div>
      </div>
    )
  }
}

export default ContactList;


// ****************************************************************** //

  // const inventory = [
  //   {name: 'apples', quantity: 2},
  //   {name: 'bananas', quantity: 0},
  //   {name: 'cherries', quantity: 5}
  // ];

  // function isCherries(fruit) { 
  //   return fruit.name === 'cherries';
  // }

  // console.log(inventory.find(isCherries)); 
  // { name: 'cherries', quantity: 5 }

  // findContact = () => {
  //   const { contacts } = this.state;
  // }


