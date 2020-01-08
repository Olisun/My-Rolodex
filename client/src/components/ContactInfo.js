import React, { Component } from 'react'

class ContactInfo extends Component {
  constructor(props) {
    super(props)
    const { name, address } = this.props;
    this.state = {
      isEditing: false,
      name: name,
      address: address
    }
  }

  render() {
    const { name, address } = this.props;
    return (
      <div>
        {name}
        {address}
      </div>
    )
  }
}

export default ContactInfo;
