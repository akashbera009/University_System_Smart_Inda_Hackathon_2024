import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { saveAs } from 'file-saver'; // For downloading data
import * as XLSX from 'xlsx'; // For CSV/Excel download
import './_certificate_record.css';

const initialStudents = [
  { id: 1, name: "John Doe", enroll: "CSE120", year: "2024", grade: "A", verified: true },
  { id: 2, name: "Jane Smith", enroll: "ECE210", year: "2023", grade: "B", verified: false },
  { id: 3, name: "Bob Johnson", enroll: "MECH310", year: "2022", grade: "A+", verified: true },
  { id: 4, name: "Bob Keplar", enroll: "MECH310", year: "2021", grade: "B+", verified: false },
  { id: 5, name: "Alice Brown", enroll: "CIV220", year: "2021", grade: "B+", verified: false },
];

function Certificate_records() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('name');
  // const [darkMode, setDarkMode] = useState(true);
  const [students, setStudents] = useState(initialStudents);
  const [groupedStudents, setGroupedStudents] = useState({}); // Grouped by criteria

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true); // Set a loading state
        const response = await fetch('api_endpoint'); // Replace with your API endpoint
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setLoading(false); // Reset loading state
      }
    };
    
    fetchStudents();
  }, []);
  

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedStudent(null);
  };

  // Handle sorting
  const handleSort = (e) => {
    const sortBy = e.target.value;
    const sorted = [...filteredStudents].sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'year') return a.year - b.year;
      if (sortBy === 'enroll') return a.enroll.localeCompare(b.enroll);
      return 0;
    });
    setStudents(sorted);
  };

  // Handle grouping
  const handleGroupBy = (e) => {
    const groupBy = e.target.value;
    let grouped = {};

    if (groupBy === 'year') {
      grouped = filteredStudents.reduce((acc, student) => {
        (acc[student.year] = acc[student.year] || []).push(student);
        return acc;
      }, {});
    }

    setGroupedStudents(grouped);
  };

// Export filtered students list as CSV
  const downloadCSV = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredStudents); // Converts filtered students data to a worksheet
    const workbook = XLSX.utils.book_new(); // Creates a new workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students"); // Adds the worksheet to the workbook
    XLSX.writeFile(workbook, "students_list.xlsx"); // Triggers the download
  };

  return (
    <div >
      <header className="header">
        {/* <h1>Student List</h1> */}
        <div className="searchbar" style={{width:'100%', margin:'0 auto', alignSelf:'left',}}>
        <input
          id="searchText"
          type="text"
          placeholder="Search Students"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
          <button id="searchBtn" >
            <img
              id="search-icon"
              src="/src/assets/search-solid (1).svg"
              alt="Button Icon"
              width="24"
              height="24"
            />
          </button>
        </div>
        
      </header>
      <div className="sorting-section">
        {/* Sort By Section */}
        <div className="sorting">
          <label htmlFor="sort">Sort By:</label>
          <select id="sort" onChange={handleSort}>
            <option value="name">Name</option>
            <option value="year">Graduation Year</option>
            <option value="enroll">Enrollment No</option>
          </select>
        </div>

        {/* Group By Section */}
        <div className="grouping">
          <label htmlFor="group">Group By:</label>
          <select id="group" onChange={handleGroupBy}>
            <option value="none">None</option>
            <option value="year">Graduation Year</option>
          </select>
        </div> 
        
      </div>
     <button className='download-csv' onClick={downloadCSV}>Download List</button>
      <ul className="student-list-container">
        {Object.keys(groupedStudents).length > 0 ? (
          Object.entries(groupedStudents).map(([key, group]) => (
            <div key={key}>
              <h2>{key}</h2>
              {group.map(student => (
                <li
                  key={student.id}
                  className="student-item"
                  onClick={() => handleStudentClick(student)}
                >
                  <p className="student-name">
                    {student.name}
                    {student.verified && <span className="verified-badge">✔ Verified</span>}
                  </p>
                  <p className="student-enroll">{student.enroll}</p>
                </li>
              ))}
            </div>
          ))
        ) : (
          filteredStudents.map(student => (
            <li
              key={student.id}
              className="student-item"
              onClick={() => handleStudentClick(student)}
            >
              <p className="student-name">
                {student.name}
                {student.verified && <span className="verified-badge">✔ Verified</span>}
              </p>
              <p className="student-enroll">{student.enroll}</p>
            </li>
          ))
        )}
      </ul>

      {/* Popup for showing individual student details */}
      <AnimatePresence>
        {showPopup && selectedStudent && (
          <motion.div
            className="popup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div className="popup-content"
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "-100vh" }}
            >
              <button className="close-btn" onClick={closePopup}>
                X
              </button>
              <img className="stu_img" src="/path/to/student-image" alt={selectedStudent.name} />
              <h2>{selectedStudent.name} {selectedStudent.verified && <span className="verified-badge">✔ Verified</span>}</h2>
              <p>Enrollment No: {selectedStudent.enroll}</p>
              <p>Year: {selectedStudent.year}</p>
              <p>Grade: {selectedStudent.grade}</p>
              <button className="go-back" onClick={closePopup}>Go Back</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Certificate_records;
