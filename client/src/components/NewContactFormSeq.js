import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import { WOW } from 'wowjs/dist/wow';
import uuid from "uuid/v4";
import API from '../utilities/API';
import './NewContactForm.css';

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
    event.preventDefault();
    const { showData } = this.props;
    const { name, address } = this.state;
    if (name && address) {
      API.saveContacts({
        name: name,
        address: address
      })
        .then(res => this.showData())
        .catch(error => console.log(error));
    }
  }

  // handleClick = event => {
  //   const { createContact } = this.props;
  //   const newContact = {
  //     ...this.state,
  //     key: uuid(),
  //     id: uuid(),
  //   };
  //   event.preventDefault();
  //   createContact(newContact);
  //   this.setState({
  //     isEditing: false,
  //     name: "",
  //     address: ""
  //   });
  // }

  handleMyModalWorkAround = () => {
    const { isEditing } = this.state;
    console.log("clicked");
    this.setState({
      isEditing: true,
    });
  }

  changeMyMind = () => {
    const { changeMyMind } = this.props;
    const { isEditing } = this.state;
    this.setState({
      isEditing: false
    });
  }

  render() {
    const { name, address, isEditing } = this.state;
    let result;
    if (isEditing) {
      result = (
        <div className="wow zoomIn slow">
          <div className="card-area">
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
              <Button
                color="danger"
                onClick={this.handleClick}>
                Submit
              </Button><span> </span>
              <Button
                onClick={this.changeMyMind}>
                Cancel
              </Button>
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