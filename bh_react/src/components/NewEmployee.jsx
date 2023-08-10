import React, { useState } from 'react';

export function NewEmployee(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [description, setDescription] = useState('');

    const addEmployee = async (firstName,lastName, description) => {
        await fetch('https://jsonplaceholder.typicode.com/posts', {
           method: 'POST',
           body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            description: description
           }),
           headers: {
              'Content-type': 'application/json; charset=UTF-8',
           },
        })
           .then((response) => response.json())
           .then((data) => {
              console.log(data)
              setFirstName('');
              setLastName('');
              setDescription('');
           })
           .catch((err) => {
              console.log(err.message);
           });
     };

     const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(firstName, lastName,description);
     }; 

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <h2>Add New Employee</h2>
          <div className="form-row">
            <table>
                <tbody>
                <tr>
                    <td>First Name</td>
                    <td><input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} /></td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td><input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} /></td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td><input type="text" value={description} onChange={(e) => setDescription(e.target.value)} /></td>
                </tr>
                <tr>
                    <td colSpan='2' >
                        <button className="btn" type='submit'>Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
          </div>
        </form>
      )
}