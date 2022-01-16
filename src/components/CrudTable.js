import React from 'react'
import CrudShift from './CrudShift'

const CrudTable = ({data}) => {
    console.log(data)
    return (
        <>
            <h3>Data</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Shift</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? <tr><td colSpan='3'>empty</td></tr> : data.map((el) => <CrudShift key={el.id} shift={el} />)}
                </tbody>
            </table>
        </>
    )
}

export default CrudTable
