import React from "react";
import { ContactContainer, ContactImage } from "./ContactElements";
import ContactForm from "../ContactForm";
import contactImg from "../../images/contact.svg";
const ContactSection = () => {
  return (
    <ContactContainer id="contact">
      <ContactImage src={contactImg} />
      <ContactForm />
    </ContactContainer>
  );
};

export default ContactSection;
