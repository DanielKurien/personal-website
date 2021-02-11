import styled from "styled-components";

export const Form = styled.form`
  background-color: #112240;
  width: 40vw;
  height: 80vh;
  padding: 2rem;
  border-radius: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const TextDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: space-betweeen;
`;

export const FormHeading = styled.h1``;

export const NameInput = styled.input`
  border: 2px solid #8892b0;
  border-radius: 3%;
  width: 12rem;
  font-size: 1.1rem;
  padding: 1rem;
  height: 2.5rem;
  color: #ccd6f6;
  background-color: #112240;
`;

export const EmailInput = styled.input`
  border: 2px solid #8892b0;
  padding: 1rem;
  border-radius: 5%;
  width: 12rem;
  font-size: 1.1rem;
  height: 2.5rem;
  color: #ccd6f6;
  background-color: #112240;
`;

export const TextInput = styled.textarea`
  resize: none;
  color: #ccd6f6;
  border: 3px solid #64ffda;
  padding: 1rem;
  border-radius: 2%;
  font-size: 1rem;
  background-color: #112240;
`;

export const Button = styled.button``;
