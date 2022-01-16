import React, { useState } from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import { database } from '../db/db';

const initialDB = database;

const CrudApp = () => {

  const [db, setDb] = useState(initialDB)
  const [dataToEdit, setDataToEdit] = useState(null)

  const createContact = (data) => {
    data.id = Date.now()
    setDb([...db, data])
  }

  const updateContact = (data) => {
    let newInfo = db.map((el) => el.id === data.id ? data : el)
    setDb(newInfo)
  }

  const deleteContact = (id) => {

  }

  return (
      <>
        <h2>Foreigners in Colombia</h2> 
        <CrudForm createContact={createContact} updateContact={updateContact} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
        <CrudTable data={db} deleteContact={deleteContact} setDataToEdit={setDataToEdit} />
      </>
  )
}

export default CrudApp
