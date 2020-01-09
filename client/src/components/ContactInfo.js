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

  handleDelete = () => {
    const { deleteContact, id } = this.props;
    deleteContact(id);
  }

  render() {
    const { name, address } = this.props;
    return (
      <div>
        <div>
          <Card>
            <CardImg top width="100%" src="" alt="" />
            <CardBody>
              <CardTitle> {name}</CardTitle>
              <CardSubtitle>{address}</CardSubtitle>
              <CardText></CardText>
              <Button>
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
}

export default ContactInfo;