import React, { useState, useEffect } from 'react'

const CrudForm = () => {

    const initialForm = {
        id: null,
        name: '',
        location: '',
        turn: ''
    }

    const [form, setForm] = useState(initialForm)

    const handleChange = (e) => {
        
    }
    const handleSubmit = (e) => {
        
    }
    const handleReset = (e) => {
        
    }
    const handleChecked = (e) => {
        
    }

    return (
        <div>
            <h3>Add New Person</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type='text' name='name' placeholder='name' value={form.name}/>
                <select name='location' defaultValue=''>
                    <option value=''>---</option>
                    <option value='CO'>Colombia</option>
                    <option value='ESP'>España</option>
                    <option value='MEX'>México</option>
                    <option value='IN'>India</option>
                    <option value='VEN'>Venezuela</option>
                    <option value='USA'>Estados Unidos</option>
                    <option value='CA'>Canadá</option>
                </select>
                <label htmlFor='terminos'>Acepto términos y condiciones</label>
                <input type='checkbox' id='terminos' name='terminos' onChange={handleChecked}/>
                <input type='submit' value='Send'/>
                <input type='reset' value='Reset' onClick={handleReset}/>
            </form>
        </div>
    )
}

export default CrudForm
