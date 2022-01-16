import React from "react";

const CrudContact = ({contacto, setDataToEdit, deleteContact}) => {
  
  let {name, number, location, id} = contacto

  return (
    <tr>
      <td>{name}</td>
      <td>{location}</td>
      <td>{number}</td>
      <td>
        <button onClick={() => setDataToEdit(contacto)}>Edit</button>
        <button onClick={() => deleteContact(id)}>Remove</button>
      </td>
    </tr>
  );
};

export default CrudContact;
