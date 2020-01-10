import React, { Component } from 'react';
import './App.css';
import ContactList from './components/ContactList';

class App extends Component {
  render() {
    return (
      <div>
        <ContactList />
      </div>
    )
  }
}

export default App;