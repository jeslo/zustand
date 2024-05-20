import React from "react";
import useCourseStore from "../app/courseStore";

const CourseList = () => {
  const { courses, removeCourses, toggleCourseState } = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourses: state.removeCourses,
      toggleCourseState: state.toggleCourseState,
    })
  );
  console.log("COURSED", courses);
  return (
    <>
      <ul>
        {courses.map((course, i) => {
          return (
            <React.Fragment key={i}>
              <li
                className="course-item"
                style={{
                  backgroundColor: course.complted ? "grey" : "white",
                }}
              >
                <span className="course-item-col-1">
                  <input
                    type="checkbox"
                    checked={course.checked}
                    onChange={(e) => {
                      toggleCourseState(course.id);
                    }}
                  />
                </span>
                <span style={{ color: "black" }}>{course?.title}</span>
                <button
                  onClick={() => {
                    removeCourses(course.id);
                  }}
                  className="delete btn"
                >
                  Delete
                </button>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default CourseList;
