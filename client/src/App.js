import React, { Component } from 'react';
import ModalExample from "./components/Modal"
import ContactList from './components/ContactList'

class App extends Component {
  render() {
    return (
      <div>
        <ModalExample />
        <ContactList />
      </div>
    )
  }
}

export default App;