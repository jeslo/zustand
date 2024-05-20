import React, { useState } from "react";
import useCourseStore from "../app/courseStore";
const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourses);
  const [courseTile, setCourseTitle] = useState("");
  console.log("COURSE FORM COMPONENT RENDERED");

  const handleCourseSubmit = () => {
    if (!courseTile) return alert("Course title is empty");
    addCourse({
      id: Math.ceil(Math.random() * 100000),
      tile: courseTile,
    });
  };
  return (
    <div className="forrm-container">
      <input
        type="text"
        value={courseTile}
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
