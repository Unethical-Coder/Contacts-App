import { useEffect, useState } from "react";
import axios from "axios";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = () => {
    axios.get("http://localhost:3000/get-contacts").then((res) => {
      setContacts(res.data.contacts);
    });
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <>
      <div>
        <button>Add Contact</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>

            <th>Number</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact, idx) => {
            return (
              <tr key={idx}>
                <td>{contact.name}</td>
                <td>{contact.number}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Contacts;
