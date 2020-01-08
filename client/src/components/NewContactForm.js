import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

const NewContactForm = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Contact Name:</Label>
        <Input />
        <FormFeedback></FormFeedback>
        <FormText></FormText>
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Contact Address:</Label>
        <Input />
        <FormFeedback></FormFeedback>
        <FormText></FormText>
      </FormGroup>
    </Form>
  );
}

export default NewContactForm;