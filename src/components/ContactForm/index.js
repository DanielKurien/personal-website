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
    <form name="contact" action="/contact" method="POST">
      <input type="hidden" name="form-name" value="contact" />
      <input required name="name" type="text" placeholder="name" />
      <input required name="email" type="text" placeholder="email" />
      <textarea
        required
        name="message"
        cols="10"
        rows="10"
        type="text"
        placeholder="Message Here"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
