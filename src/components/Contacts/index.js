import { useState, useEffect } from "react";
import List from "./Lists";
import Form from "./Form";
import "./contacts.css";

function Contacts() {
  const [contact, setContact] = useState([
    {
      fullname: "Adem",
      phoneNumber: "531 555 55 55",
    },
    {
      fullname: "Ahmet",
      phoneNumber: "555 555 55 55",
    },
    {
      fullname: "Buket",
      phoneNumber: "539 555 55 55",
    },
    {
      fullname: "Mehmet",
      phoneNumber: "538 555 55 55",
    },
    {
      fullname: "Mehmet",
      phoneNumber: "538 555 55 55",
    },
    {
      fullname: "Mehmet",
      phoneNumber: "538 555 55 55",
    },
  ]);
  useEffect(() => {
    console.log(contact);
  }, [contact]);
  return (
    <div id="contacts-app">
      <div className="creator">  
        <a target="_blank" href="https://github.com/ademalkan">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/adem-alkan-47a207211/">
          Linkedin
        </a>
      </div>
      <div target="_blank" className="app-title">
        <h1>Contacts App</h1>
      </div>
      <List contacts={contact} />
      <Form addForm={setContact} contact={contact} />
    </div>
  );
}

export default Contacts;
