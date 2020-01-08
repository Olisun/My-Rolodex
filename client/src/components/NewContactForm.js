import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import uuid from "uuid/v4";

class NewContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      address: ""
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleClick = event => {
    const { createContact } = this.props;
    const newContact = {
      ...this.state,
      key: uuid(),
      id: uuid(),
    };
    event.preventDefault();
    createContact(newContact);
    this.setState({
      name: "",
      address: ""
    })
  }

  render() {
    const { name, address } = this.state;
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Contact Name:</Label>
            <Input
              // type="text"
              id="name"
              name="name"
              value={name}
              onChange={this.handleInputChange}
            />
            <FormFeedback></FormFeedback>
            <FormText></FormText>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Contact Address:</Label>
            <Input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={this.handleInputChange}
            />
            <FormFeedback></FormFeedback>
            <FormText></FormText>
          </FormGroup>
          <Button color="danger" onClick={this.handleClick}>Submit</Button>

        </Form>

      </div>
    )
  }
}

export default NewContactForm;