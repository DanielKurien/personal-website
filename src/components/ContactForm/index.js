import React from "react";
import {
  Form,
  NameInput,
  EmailInput,
  TextInput,
  FormHeading,
  TextDiv,
  Button,
} from "./ContactFormElements";
const ContactForm = () => {
  return (
    <Form action="post" data-netlify="true">
      <FormHeading>Contact Me</FormHeading>
      <TextDiv>
        <NameInput
          placeholder="Type Full Name"
          type="text"
          name="name"
          id="name"
          required="true"
        />
        <EmailInput
          placeholder="Type Email"
          type="email"
          name="email"
          id="email"
          required="true"
        />
      </TextDiv>
      <TextInput
        id="message"
        name="message"
        required="true"
        rows="6"
        cols="40"
      ></TextInput>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default ContactForm;
