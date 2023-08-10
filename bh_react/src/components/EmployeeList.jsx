import { EmployeeItem } from "./EmployeeItem";

export function EmployeeList({employeeList}){
    return(
        <div>
            <h4>Employee List</h4>
        <ul className="list">
            {
                employeeList.map(employee => {
                    return (
                        <EmployeeItem key={employee.id} {...employee} />
                    )
                })
            }
        </ul>
        </div>
    )
}