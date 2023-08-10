import { EmployeeItem } from "./EmployeeItem";
import React, { useState, useEffect } from 'react';

export function EmployeeList(){
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
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