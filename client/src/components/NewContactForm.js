import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import { WOW } from 'wowjs/dist/wow';
import uuid from "uuid/v4";

class NewContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      name: "",
      address: ""
    };
  }

  componentDidMount() {
    new WOW().init()
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
      isEditing: false,
      name: "",
      address: ""
    });
  }

  handleMyModalWorkAround = () => {
    const { isEditing } = this.state;
    this.setState({
      isEditing: true,
    });
  }

  render() {
    const { name, address } = this.state;
    const { isEditing } = this.state;
    let result;
    if (isEditing) {
      result = (
        <div className="wow zoomIn slow">
          <div>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Contact Name:</Label>
                <Input
                  type="text"
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
        </div>
      )
    } else {
      result = (
        <div className="wow zoomIn slow">
          <div>
            <Button
              onClick={this.handleMyModalWorkAround}>
              Add Contact
          </Button>
          </div>
        </div>
      )
    }
    return result;
  }
}

export default NewContactForm;