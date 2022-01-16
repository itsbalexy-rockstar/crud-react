import React, { useState, useEffect } from 'react'

const CrudForm = ({createContact, updateContact, dataToEdit, setDataToEdit}) => {

    const initialForm = {
        id: null,
        name: '',
        location: '',
        number: ''
    }

    const [form, setForm] = useState(initialForm)

    useEffect(() => {
        if(dataToEdit){
            setForm(dataToEdit)
        } else {
            setForm(initialForm)
        }
    }, [dataToEdit])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!form.name || !form.number){
            alert('All fields are required')
            return;
        }
        if(form.id === null){
            createContact(form)
        } else {
            updateContact(form)
        }
        handleReset()
    }
    const handleReset = (e) => {
        setForm(initialForm)
        setDataToEdit(null)
    }

    return (
        <div>
            <h3>{dataToEdit ? 'Editing a contact' : 'Creating a new contact'}</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type='text' name='name' placeholder='name' value={form.name}/>
                <input onChange={handleChange} type='text' name='number' placeholder='number' value={form.number}/>
                <select name='location' defaultValue='' onChange={handleChange}>
                    <option value=''>---</option>
                    <option value='colombia'>Colombia</option>
                    <option value='españa'>España</option>
                    <option value='mexico'>México</option>
                    <option value='india'>India</option>
                    <option value='venezuela'>Venezuela</option>
                    <option value='usa'>Estados Unidos</option>
                    <option value='canada'>Canadá</option>
                </select>
                <input type='submit' value='Send'/>
                <input type='reset' value='Reset' onClick={handleReset}/>
            </form>
        </div>
    )
}

export default CrudForm
