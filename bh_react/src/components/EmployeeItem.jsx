export function EmployeeItem({id, firstName, lastName, description}){
    return(
        <li>
            {id} - {firstName} - {lastName} - {description}
        </li>
    )
}