import './App.css';
import { NewEmployee } from "./components/NewEmployee";
import { EmployeeList } from "./components/EmployeeList";

const initialArr = [{id:'1', firstName:'parami', lastName:'modarage', description:'test1'}, {id:'2', firstName:'malin', lastName:'desilva', description:'test2'}];

function App() {
  return (
    <div className="App">
          <NewEmployee />
    <EmployeeList employeeList={initialArr} />
    </div>
  );
}

export default App;
