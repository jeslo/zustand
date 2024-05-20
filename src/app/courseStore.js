import create from "zustand";
import { devtools, persist } from "zustand/middleware";
const courseStore = (set) => ({
  courses: [],
  addCourses: (courses) => {
    set((state) => ({
      courses: [courses, ...state.courses],
    }));
  },
  removeCourses: (coursesId) => {
    set((state) => ({
      courses: state.courses.filter((c) => c.id !== coursesId),
    }));
  },
  toggleCourseState: (coursesId) => {
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === coursesId
          ? { ...course, completed: !course.completed }
          : course
      ),
    }));
  },
});
const useCourseStore = create(
  devtools(
    persist(courseStore, {
      name: "courses",
    })
  )
);
export default useCourseStore;
