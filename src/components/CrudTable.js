import React from 'react'
import CrudContact from './CrudContact'

const CrudTable = ({data, setDataToEdit, deleteContact}) => {
    return (
        <>
            <h3>Data</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? <tr><td colSpan='3'>empty</td></tr> : data.map((el) => <CrudContact setDataToEdit={setDataToEdit} deleteContact={deleteContact}  key={el.id} contacto={el} />)}
                </tbody>
            </table>
        </>
    )
}

export default CrudTable
