import React from "react";

const CrudContact = ({contacto, setDataToEdit, deleteContact}) => {
  
  let {name, number, location, id} = contacto

  return (
    <tr>
      <td>{name}</td>
      <td>{location}</td>
      <td>{number}</td>
      <td>
        <button className="edit" onClick={() => setDataToEdit(contacto)}>Edit</button>
        <button className="remove" onClick={() => deleteContact(id)}>Remove</button>
      </td>
    </tr>
  );
};

export default CrudContact;
