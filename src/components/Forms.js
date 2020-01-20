import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const ContactForm = props => {
  function handleClick(e) {
    console.log("link was clicked");
  }

  return (
    <Form>
      <h1>Contact Us</h1>
      <FormGroup>
        <Input type="name" name="name" id="formName" placeholder="Name" />
      </FormGroup>
      <FormGroup>
        {/* <Label for="formEmail">Email</Label> */}
        <Input type="email" name="email" id="formEmail" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        {/* <Label for="formSubject">Subject</Label> */}
        <Input
          type="subject"
          name="subject"
          id="formSubject"
          placeholder="Subject"
        />
      </FormGroup>
      <FormGroup>
        {/* <Label for="formText">Text Area</Label> */}
        <Input
          type="textarea"
          name="text"
          id="formText"
          placeholder="Message"
        />
      </FormGroup>
      <Button onClick={handleClick}>Submit</Button>
    </Form>
  );
};

export default ContactForm;
