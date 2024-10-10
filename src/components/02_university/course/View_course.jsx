import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './_view_course.css';

const courses = [
  {
    courseId: "CSE101",
    courseName: "Introduction to Computer Science",
    description: "A foundational course covering basic computer science concepts.",
    credits: 4,
    department: "Computer Science",
    semester: "Fall 2024",
    instructor: { name: "Dr. John Smith" },
    schedule: {
      days: "Mon, Wed, Fri",
      time: "10:00 AM - 11:30 AM",
      room: "Room 101"
    },
    enrollmentCap: 50,
  },
  {
    courseId: "ECE210",
    courseName: "Circuit Analysis",
    description: "Study of basic electrical circuit theory.",
    credits: 3,
    department: "Electrical Engineering",
    semester: "Spring 2025",
    instructor: { name: "Prof. Jane Doe" },
    schedule: {
      days: "Tue, Thu",
      time: "1:00 PM - 2:30 PM",
      room: "Room 202"
    },
    enrollmentCap: 40,
  },
  {
    courseId: "ECE213",
    courseName: "Analog Electronics",
    description: "Study of basic electrical circuit theory.",
    credits: 3,
    department: "Electrical Engineering",
    semester: "Spring 2025",
    instructor: { name: "Prof. Vuban Bam" },
    schedule: {
      days: "Tue, Thu",
      time: "1:00 PM - 2:30 PM",
      room: "Room 202"
    },
    enrollmentCap: 40,
  },
  // Add more courses here
];

const View_course = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');
  const [groupBy, setGroupBy] = useState('');
  const [expandedCourse, setExpandedCourse] = useState(null);

  // Search and Filter Logic
  const filteredCourses = courses
    .filter(course =>
      course.courseName.toLowerCase().includes(searchTerm.toLowerCase()) || 
      course.instructor.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(course => 
      !filter || course.department === filter || course.credits === Number(filter) || course.instructor.name === filter
    );

  // Grouping Logic
  const groupedCourses = groupBy
    ? filteredCourses.reduce((groups, course) => {
        const key = course[groupBy] || course.instructor.name; // Group by selected field
        if (!groups[key]) groups[key] = [];
        groups[key].push(course);
        return groups;
      }, {})
    : { 'All Courses': filteredCourses }; // Default if no grouping

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleGroupBy = (e) => {
    setGroupBy(e.target.value);
  };

  const handleCourseClick = (course) => {
    setExpandedCourse(course === expandedCourse ? null : course);
  };

  return (
    <div className="course-container">
      {/* Search Bar */}
      <input
        type="text"
        className="search-bar"
        placeholder="Search by course or instructor"
        value={searchTerm}
        onChange={handleSearch}
      />

      {/* Filter Section */}
      <select className="filter-section" onChange={handleFilter}>
        <option value="">Filter by Department, Credits or Instructor</option>
        <option value="Computer Science">Computer Science</option>
        <option value="Electrical Engineering">Electrical Engineering</option>
        <option value="4">4 Credits</option>
        <option value="3">3 Credits</option>
        <option value="Dr. John Smith">Dr. John Smith</option>
        <option value="Prof. Jane Doe">Prof. Jane Doe</option>
      </select>

      {/* Group By Section */}
      <select className="group-by-section" onChange={handleGroupBy}>
        <option value="">Group By</option>
        <option value="department">Department</option>
        <option value="credits">Credits</option>
        <option value="instructor">Instructor</option>
      </select>

      {/* Course List */}
      {Object.keys(groupedCourses).map(group => (
        <div key={group}>
          <h3 className="group-title">{group}</h3>
          <ul className="course-list">
            {groupedCourses[group].map(course => (
              <li key={course.courseId} className="course-item" onClick={() => handleCourseClick(course)}>
                <div>
                  <h4>{course.courseName}</h4>
                  <p>{course.instructor.name}</p>
                </div>

                {/* Course Details Expansion */}
                <AnimatePresence>
                  {expandedCourse === course && (
                    <motion.div
                      className="course-details"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p><strong>Course ID:</strong> {course.courseId}</p>
                      <p><strong>Description:</strong> {course.description}</p>
                      <p><strong>Credits:</strong> {course.credits}</p>
                      <p><strong>Semester:</strong> {course.semester}</p>
                      <p><strong>Schedule:</strong> {course.schedule.days} at {course.schedule.time}</p>
                      <p><strong>Room:</strong> {course.schedule.room}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default View_course;
