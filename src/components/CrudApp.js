import React, { useState } from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import { database } from '../db/db';

const initialDB = database;

const CrudApp = () => {

  const [db, Setdb] = useState(initialDB)

  return (
      <>
        <h2>Shifts - Bry EPS</h2> 
        <CrudForm />
        <CrudTable data={db}/>
      </>
  )
}

export default CrudApp
