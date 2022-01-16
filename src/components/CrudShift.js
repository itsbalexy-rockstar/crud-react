import React from "react";

const CrudShift = ({shift}) => {
  return (
    <tr>
      <td>{shift.name}</td>
      <td>{shift.location}</td>
      <td>{shift.number}</td>
      <td>
        <button>Edit</button>
        <button>Remove</button>
      </td>
    </tr>
  );
};

export default CrudShift;
