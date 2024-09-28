import React, { useEffect, useState } from "react";
import FacultySidebar from "../../../partials/FacultySidebar";
import Header from "../../../partials/Header";
import AttendanceTable from "../../../partials/attendance/AttendanceTable";
import {
  getAllBatchsForTeacher,
  getAllCoursesForTeacher,
  getAllSubjectForTeacher,
  getClassRoomsForTeachers,
  getSectionForTeacher,
} from "../../../apis/teacher/conductLecture";
import { getClassRoomDetails } from "../../../apis/admin/classRoom";
import { conductLectureAPI } from "../../../apis/teacher/conductLecture"; // Import your API function for the POST request
import { useSelector } from "react-redux";

function ConductLecture() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { username, role, id } = useSelector((store) => store.userDetailStore);

  // States for each field
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [batches, setBatches] = useState([]);
  const [selectedBatch, setSelectedBatch] = useState("");
  const [sections, setSections] = useState([]);
  const [selectedSection, setSelectedSection] = useState("");
  const [classrooms, setClassrooms] = useState([]);
  const [selectedClassroom, setSelectedClassroom] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(""); // Replace with actual teacher ID from your context or auth state
  // Fetch courses (example function, replace with actual API call)
  const fetchCourses = async () => {
    const response = await getAllCoursesForTeacher();
    console.log(response.body.course);
    // Set the courses state with the fetched data
    setCourses(response.body.course || []);
  };

  // Example fetch functions for other fields (implement actual logic as needed)
  const fetchBatches = async (courseId) => {
    // Fetch batches based on selected course
    const response = await getAllBatchsForTeacher({ id: courseId });
    console.log(response);
    setBatches(response.body);
  };

  const fetchSections = async (batchId) => {
    const response = await getSectionForTeacher({ id: batchId });
    console.log(response);
    setSections(response.body);
  };

  const fetchClassrooms = async () => {
    const response = await getClassRoomsForTeachers();
    console.log(response);
    setClassrooms(response.body.classRoomList);
  };

  const fetchSubjects = async (sectionId) => {
    const response = await getAllSubjectForTeacher({ id: sectionId });
    console.log(response, "subjects");
    setSubjects(response.body.subjectList);
  };

  // Fetch courses on component mount
  useEffect(() => {
    fetchCourses();
    fetchClassrooms();
  }, []);

  // Handlers for onChange events
  const handleCourseChange = (event) => {
    const courseId = event.target.value;
    setSelectedCourse(courseId);
    fetchBatches(courseId);
    fetchSubjects(courseId); // Fetch batches when course changes
  };

  const handleBatchChange = (event) => {
    const batchId = event.target.value;
    setSelectedBatch(batchId);
    fetchSections(batchId); // Fetch sections when batch changes
  };

  const handleSectionChange = (event) => {
    const sectionId = event.target.value;
    setSelectedSection(sectionId);
    // Fetch subjects when section changes
  };

  const handleClassroomChange = (event) => {
    setSelectedClassroom(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  // Conduct Lecture POST method
  const conductLecture = async () => {
    // Construct the DTO object based on your selected values and teacher ID
    const lectureDTO = {
      courseId: selectedCourse, // Selected Course ID
      batchId: selectedBatch, // Selected Batch ID
      sectionId: selectedSection, // Selected Section ID
      teacherId: id, // Current Teacher ID
      classRoomId: selectedClassroom, // Selected Classroom ID
    };

    console.log(lectureDTO);
    try {
      // Make the POST request to your API endpoint
      const response = await conductLectureAPI(lectureDTO);

      if (response.ok) {
        // Handle success (optional)
        console.log("Lecture conducted successfully!");
      } else {
        // Handle error (optional)
        console.error("Error conducting lecture:", response.statusText);
      }
    } catch (error) {
      console.error("API call failed:", error);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* FacultySidebar */}
      <FacultySidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="gap-4" style={{ width: "700px" }}>
              <h1 className="text-2xl font-semibold">Conduct Lecture</h1>
              <div className="flex flex-col gap-4 justify-between mt-10">
                {/* Select Course */}
                <div className="gap-2">
                  <h1
                    className="font-bold text-xl"
                    style={{ fontSize: "1.5rem", color: "#6366F1" }}
                  >
                    Select Course
                  </h1>
                  <select
                    value={selectedCourse}
                    onChange={handleCourseChange}
                    className="border border-gray-300 w-full rounded-md p-2"
                  >
                    <option value="">Select Course</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.courseName}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Select Batch */}
                <div className="gap-2">
                  <h1
                    className="font-bold text-xl"
                    style={{ fontSize: "1.5rem", color: "#6366F1" }}
                  >
                    Select Batch
                  </h1>
                  <select
                    value={selectedBatch}
                    onChange={handleBatchChange}
                    className="border border-gray-300 w-full rounded-md p-2"
                  >
                    <option value="">Select Batch</option>
                    {batches.map((batch) => (
                      <option key={batch.id} value={batch.id}>
                        {batch.batchName}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Select Section */}
                <div className="gap-2">
                  <h1
                    className="font-bold text-xl"
                    style={{ fontSize: "1.5rem", color: "#6366F1" }}
                  >
                    Select Section
                  </h1>
                  <select
                    value={selectedSection}
                    onChange={handleSectionChange}
                    className="border border-gray-300 w-full rounded-md p-2"
                  >
                    <option value="">Select Section</option>
                    {sections.map((section) => (
                      <option key={section.id} value={section.id}>
                        {section.sectionName}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Select Classroom */}
                <div className="gap-2">
                  <h1
                    className="font-bold text-xl"
                    style={{ fontSize: "1.5rem", color: "#6366F1" }}
                  >
                    Select Classroom
                  </h1>
                  <select
                    value={selectedClassroom}
                    onChange={handleClassroomChange}
                    className="border border-gray-300 w-full rounded-md p-2"
                  >
                    <option value="">Select Classroom</option>
                    {classrooms.map((classroom) => (
                      <option key={classroom.id} value={classroom.id}>
                        {classroom.classRoomNumber}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Select Subject */}
                <div className="gap-2">
                  <h1
                    className="font-bold text-xl"
                    style={{ fontSize: "1.5rem", color: "#6366F1" }}
                  >
                    Select Subject
                  </h1>
                  <select
                    value={selectedSubject}
                    onChange={handleSubjectChange}
                    className="border border-gray-300 w-full rounded-md p-2"
                  >
                    <option value="">Select Subject</option>
                    {subjects.map((subject) => (
                      <option key={subject.id} value={subject.id}>
                        {subject.subjectName}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Button to Conduct Lecture */}
                <button
                  onClick={conductLecture}
                  className="mt-4 bg-blue-600 text-white rounded-md p-2"
                >
                  Conduct Lecture
                </button>
              </div>
            </div>
<<<<<<< HEAD
=======
            <div className="flex justify-center items-center">
              <button
                className="text-white px-4 py-2 rounded-md"
                style={{
                  backgroundColor: '#6366F1',
                  fontSize: '1.2rem',
                  position: 'absolute',
                  bottom: '20px',
                  left: '900px',
                }}
                onClick={() => {
                  window.location.href = '/faculty/conducting-lecture';
                }}
              >
                Conduct Lecture
              </button>
            </div>
>>>>>>> f3dade8cf9a46485e8c6aed5d26f5ffe59b030ae
          </div>
        </main>
      </div>
    </div>
  );
}

export default ConductLecture;
