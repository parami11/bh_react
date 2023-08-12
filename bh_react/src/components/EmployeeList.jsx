import { EmployeeItem } from "./EmployeeItem";
import React, { useState, useEffect } from 'react';

export function EmployeeList(){
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        var be_Url=window.location.href.replace('-fe-','-be-')+'api/Employee';
        //var be_Url='https://app-be-bhdemo-dev2.azurewebsites.net/api/Employee';

        fetch(be_Url)
           .then((response) => response.json())
           .then((data) => {
              setEmployees(data);
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);
     
    return(
        <div>
            <h4>Employee List</h4>
        <ul className="list">
            {
                employees.map(employee => {
                    return (
                        <EmployeeItem key={employee.id} {...employee} />
                    )
                })
            }
        </ul>
        </div>
    )
}