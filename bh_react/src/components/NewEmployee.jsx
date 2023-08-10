export function NewEmployee(){
    return (
        <form className="new-item-form">
          <div className="form-row">
            <label htmlFor="item">New Employee</label>
            <input
              type="text"
              id="item"
            />
          </div>
          <button className="btn">Add</button>
        </form>
      )
}