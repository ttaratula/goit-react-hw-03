import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm";
import SearchBox from "./components/SearchBox";
import ContactList from "./components/ContactList";
import "./App.css";

export default function App() {
  const initialContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  // const [contacts, setContacts] = useState(initialContacts);
  
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem('contacts');
    return saved ? JSON.parse(saved) : initialContacts;
  });
  
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    setContacts((prev) => [...prev, newContact]);
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  return (
    <div className="phonebook-container">
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox filter={filter} onFilterChange={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
