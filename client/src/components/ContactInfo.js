import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleDelete = () => {
    const { deleteContact, id } = this.props;
    deleteContact(id);
  }

  handleEdit = () => {
    const { isEditing } = this.state;
    this.setState({
      isEditing: true
    });
  }

  handleNameUpdate = event => {
    const { updateName, id } = this.props;
    const { name } = this.state;
    event.preventDefault();
    updateName(id, name);
    this.setState({
      isEditing: false
    });
  }

  handleAddressUpdate = event => {
    const { updateAddress, id } = this.props;
    const { address } = this.state;
    event.preventDefault();
    updateAddress(id, address);
    this.setState({
      isEditing: false
    });
  }

  render() {
    const { name, address } = this.props;
    const { isEditing } = this.state;
    let result;
    if (isEditing) {
      result = (
        <div>
          <form>
            <input
              type="text"
              name="name"
              value={this.state.name}  // <-- can't destruct this because it's already being destructed by this.props.
              onChange={this.handleInputChange}
            />
            <Button
              onClick={this.handleNameUpdate}>
              Update
            </Button>
          </form>
          <form>
            <input
              type="text"
              name="address"
              value={this.state.address}  // <-- can't destruct this because it's already being destructed by this.props.
              onChange={this.handleInputChange}
            />
            <Button
              onClick={this.handleAddressUpdate}>
              Update
            </Button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <div>
            <Card>
              <CardImg top width="100%" src="" alt="" />
              <CardBody>
                <CardTitle> {name}</CardTitle>
                <CardSubtitle>{address}</CardSubtitle>
                <CardText></CardText>
                <Button
                  onClick={this.handleEdit}>
                  Edit
              </Button><span> </span>
                <Button
                  onClick={this.handleDelete}>
                  Delete
            </Button>
              </CardBody>
            </Card>
          </div>
        </div>
      )
    }
    return result;
  }
}

export default ContactInfo;