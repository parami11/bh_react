import React, { useState } from 'react';

export function NewEmployee(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [description, setDescription] = useState('');

    const addEmployee = async (firstName,lastName, description) => {
        var be_Url=window.location.href.replace('-fe-','-be-')+'api/Employee';
        //var be_Url='https://app-be-bhdemo-dev2.azurewebsites.net/api/Employee';

        await fetch(be_Url, {
           method: 'POST',
           body: JSON.stringify({
            id:'1',
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
              //window.location.reload();
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
            <h4>Add New Employee</h4>
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