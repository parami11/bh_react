import './App.css';
import { NewEmployee } from "./components/NewEmployee";
import { EmployeeList } from "./components/EmployeeList";

function App() {
  return (
    <div className="App">
          <NewEmployee />
          <EmployeeList/>
    </div>
  );
}

export default App;
