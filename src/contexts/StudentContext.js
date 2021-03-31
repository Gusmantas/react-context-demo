import { createContext, useEffect, useState } from 'react'

// Creating new Context, which is then rendered in StudentContextProvider component
export const StudentContext = createContext()

// Since StudentContextProvider is wrapping all Routes that uses hooks created in this
// component, we need to re-render these routes by using props.
const StudentContextProvider = (props) => {
  // If there is data with key 'students' - we get it from local storage and use it as "students"
  // list. Else we take the two student objects and use them as a list.
  const [students, setStudents] = useState(JSON.parse(localStorage.getItem('students')) || [
    {
      name: 'Marcus',
      age: 25
    },
    {
      name: 'Jane',
      age: 19
    },
  ])
  
  // Boolean hook used to determine if useEffect should run or not.
  const [isStudentsChanged, setStudentsChanged] = useState(false)

  useEffect(() => {
    // If isStudentsChanged === true, we save our 'students' list to local storage
    if(isStudentsChanged){
      localStorage.setItem('students', JSON.stringify(students))
    }

    // Also, set isStudentsChanged back to false.
    setStudentsChanged(false)
    
    // useEffect hook runs only if we isStudentsChanged variable is set to true.
  }, [isStudentsChanged])

  // This function is used in "Programming.js" component
  const removeStudent = (studentToRemoveId) =>{
    const updatedStudents = students.filter(student => students.indexOf(student) !== studentToRemoveId)
    setStudents(updatedStudents)

    // SetStudentsChanged is equal to true, since we want the new list to be saved in localStorage
    // This runs useEffect hook
    setStudentsChanged(true)
  }

  // This function is used in StudentForm
  const addStudent = (event, name, age, history) =>{
    event.preventDefault()
    const newStudent = {
      name,
      age
    }

    setStudents([newStudent, ...students])

    // Setting "setStudentsChanged" to true so we can save "students" list to local storage
    // after adding new user
    setStudentsChanged(true)
    history.push('/')
  }

  return (
    // StudentContext is defined at the top of this file! Do not mix it with StudentContextProvider
    // value property tells the children of StudentContextProvider (the one wrapping Route components
    // in App.js) what hooks/variables/functions are available for the children components (Those
    // Route components)
    <StudentContext.Provider value={{students, removeStudent, addStudent}}>
      {/* props.children - helps react to render all child components of StudentContextProvider
      (again, those from the App.js, that StudentContextProvider is wrapping.) */}
      {props.children}
    </StudentContext.Provider>
  );
}
 
export default StudentContextProvider;