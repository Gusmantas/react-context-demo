import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { StudentContext } from "../contexts/StudentContext";

const StudentForm = () => {
  // useContext() lets us grab values from context. Within parenthesis we pass
  // in the name of the context we wish to use.
  //  From StudentContext we are only grabbing one function, which is then passed
  // to <form> element. This function takes is an "event" - to stop hard refresh upon
  // clicking "Add" button. "name", and "age" - to create an object of new student.
  // history - so we are able to change route dynamically after new student is added. 
  const { addStudent } = useContext(StudentContext)
  const [name, setName] = useState()
  const [age, setAge] = useState()

  // Importing history here so we can pass it to addStudent() method.
  // This way we can push "Home" route after clicking add student button.
  const history = useHistory()

  return (
    // Event is needed to stop hard refreshes on a page.
    // Note! This function is located in StudentContext
    <form onSubmit={(event) => addStudent(event, name, age, history)}>
      <label htmlFor="name">Student Name</label>
      <input
        type="text"
        id="name"
        placeholder="Enter name here.."
        required
        // Here we use Two-Way binding on an input and a hook we created above.
        // We simply set the name hook via setter which is defined in the "name" hook
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="age">Student Age</label>
      <input
        type="number"
        id="age"
        placeholder="Enter age here.."
        required
        onChange={(event) => setAge(event.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default StudentForm;