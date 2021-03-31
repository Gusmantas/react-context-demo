import { useContext } from "react";
import { StudentContext } from "../../contexts/StudentContext";

const Math = () => {
  const { students } = useContext(StudentContext)

  return (
    <div>
      <h1>Math: </h1>
      <h3>Students: </h3>
      {students.map((student, id) => {
        return (
          <div className="studentCard" key={id}>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
          </div>
        )
      })}
    </div>
  );
}

export default Math;