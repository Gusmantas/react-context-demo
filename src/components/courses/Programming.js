import { useContext } from "react";
import { StudentContext } from "../../contexts/StudentContext";

const Programming = () => {
  // Getting both students and removeStudent from context
  const { students, removeStudent } = useContext(StudentContext)
  
  return (
    <div>
      <h1>Programming: </h1>
      <h3>Students: </h3>
      {students.map((student, id) => {
        return (
          <div className="studentCard" key={id}>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <button className="remove-btn" onClick={() => removeStudent(id)}>Delete</button>
          </div>
        )
      })}
    </div>
  );
}

export default Programming;