import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import StudentContext from './contexts/StudentContext';
import About from './pages/About';
import Home from './pages/Home'
import StudentForm from './pages/StudentForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* Wrapping components with <StudentContextProvider>
          we wish to have access to context hooks/functions/variables */}
        <StudentContext>
          <Route exact path="/" component={Home} />
          <Route exact path="/add-student" component={StudentForm} />
        </StudentContext>
        <Route exact path="/about" component={About} />
      </Router>
    </div>
  );
}

export default App;
