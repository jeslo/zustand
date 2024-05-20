import logo from "./logo.svg";
import "./App.css";
import CourseForm from "./components/courseForm";
import CourseList from "./components/courseList";
import Counter from "./components/counter";
function App() {
  return (
    <div className="main-container">
      <CourseForm />
      <CourseList />
      <Counter />
    </div>
  );
}

export default App;
