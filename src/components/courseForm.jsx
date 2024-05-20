import React, { useState } from "react";
import useCourseStore from "../app/courseStore";
const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourses);
  const [courseTitle, setCourseTitle] = useState("");
  console.log("COURSE FORM COMPONENT RENDERED");

  const handleCourseSubmit = () => {
    if (!courseTitle) return alert("Course title is empty");
    addCourse({
      id: Math.ceil(Math.random() * 100000),
      title: courseTitle,
    });
  };
  return (
    <div className="forrm-container">
      <input
        type="text"
        value={courseTitle}
        onChange={(e) => {
          setCourseTitle(e.target.value);
        }}
        className="form-input"
      />
      <button
        onClick={() => {
          handleCourseSubmit();
        }}
        className="form-submit-btn"
      >
        Add course
      </button>
    </div>
  );
};

export default CourseForm;
