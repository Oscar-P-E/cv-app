import "./App.css";

// function EditBtn() {
//   return <button>Edit</button>;
// }

// function DeleteBtn() {
//   return <button>Delete</button>;
// }

function App() {
  return (
    <div className="prose">
      <div>
        <h2>General Info</h2>
        <h3>Name</h3>
        <h3>Email</h3>
        <h3>Phone</h3>
      </div>
      <hr />
      <div>
        <h2>Education</h2>
        <h3>University</h3>
        <h3>Major</h3>
        <h3>Graduation Date</h3>
      </div>
      <hr />

      <div>
        <h2>Experience</h2>
        <h3>Company</h3>
        <h3>Position</h3>
        <h3>Start Date</h3>
        <h3>End Date</h3>
      </div>
    </div>
  );
}

export default App;
