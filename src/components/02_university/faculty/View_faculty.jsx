import React, { useState ,useEffect} from 'react';
import '../student/_view_student_02.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';  

function View_faculty() {
  const faculty_details = [
    { 
      basic_details: {
        name: "Dipto Mukharjee",
        dob: "1990-12-10", 
        gender: "Male",
        local_address: "123 Main St, Cityville",
      },
      contact_details: {
        mobile: "9233439927",
        email: "dipto.mukharjee@college.edu",
      },
      institution_details: {
        img: "../src/assets/85kb.jpg",
        emp_id: "EMP12022001070", 
        year_attended: 2012,
        specialization: "IT",
        emp_type: "Full-time",
      },
      academic_responsibility: {
        courses_taught: ["Computer Science 101", "Data Structures"],
        administrative_role: "Warden",
      }
    },
    { 
      basic_details: {
        name: "Suman Chatterjee",
        dob: "1985-05-22",
        gender: "Female",
        local_address: "45 College Road, Townsville",
      },
      contact_details: {
        mobile: "9123456789",
        email: "suman.chatterjee@college.edu",
      },
      institution_details: {
        img: "/src/assets/suman.jpg",
        emp_id: "EMP12022001071", 
        year_attended: 2010,
        specialization: "Mechanical Engineering",
        emp_type: "Part-time",
      },
      academic_responsibility: {
        courses_taught: ["Thermodynamics", "Fluid Mechanics"],
        administrative_role: "Head of Mechanical Department",
      }
    },
    { 
      basic_details: {
        name: "Arindam Dutta",
        dob: "1992-08-15",
        gender: "Male",
        local_address: "78 Industrial Ave, TechCity",
      },
      contact_details: {
        mobile: "9988776655",
        email: "arindam.dutta@college.edu",
      },
      institution_details: {
        img: "/src/assets/arindam.jpg",
        emp_id: "EMP12022001072", 
        year_attended: 2015,
        specialization: "Artificial Intelligence & Machine Learning",
        emp_type: "Full-time",
      },
      academic_responsibility: {
        courses_taught: ["AI Fundamentals", "Machine Learning Algorithms"],
        administrative_role: "Research Coordinator",
      }
    },
    { 
      basic_details: {
        name: "Subhayan Kapas",
        dob: "1988-03-10",
        gender: "Male",
        local_address: "202 Riverbend Dr, CivilCity",
      },
      contact_details: {
        mobile: "9876543210",
        email: "subhayan.kapas@college.edu",
      },
      institution_details: {
        img: "/src/assets/subhayan.jpg",
        emp_id: "EMP12022001073", 
        year_attended: 2011,
        specialization: "Civil Engineering",
        emp_type: "Adjunct",
      },
      academic_responsibility: {
        courses_taught: ["Structural Analysis", "Construction Management"],
        administrative_role: "Curriculum Developer",
      }
    }
  ];
  
  
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [selectedForEdit, setSelectForEdit] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); // Store the search input
  const [filteredFacultys, setFilteredFacultys] = useState(faculty_details); // Store the filtered lis
  const [loading, setLoading] = useState(false);

    // Function to filter Facultys based on search term (either name or emp_idment)
    const handleSearch = () => {
      const filtered = faculty_details.filter((faculty) =>
        faculty.basic_details.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faculty.institution_details.emp_id.toString().includes(searchTerm)
      );
      
      if (filtered.length > 0) {
        setFilteredFacultys(filtered); // Correct the plural here: setFilteredFacultys to setFilteredFaculty
      } else {
        setFilteredFaculty([]); // If no match, set empty list
      }
    };
    
    useEffect(()=>{
        handleSearch()
    },[searchTerm])

  function view_Faculty_data(faculty_detail) {
    setSelectedFaculty(faculty_detail); // Set the selected Faculty
  }
  function edit_Faculty_data(faculty_detail) {
    setSelectForEdit(faculty_detail); // Set the selected Faculty
  }
 

  function closeDetails() {
    setSelectedFaculty(null); // Reset selected Faculty to hide the modal
    setSelectForEdit(null); // Ensure no edit modal is showing
  }
  
  function closeDetailsEdit() {
    setSelectForEdit(null); // Reset selected Faculty for edit to hide the modal
  }
  

 function  saveChanges(faculty_detail){
    setSelectForEdit(faculty_detail);
  }

  return (
    <>
    {loading ? (
      <div className="loader">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>):( 
    <div>
      <div>
        <div className="searchbar">
          <input id="searchText" type="text" placeholder="Search Faculty"   value={searchTerm}
          onChange={(e) =>{  handleSearch(); setSearchTerm(e.target.value) ;}} />
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

     
        <div className="outer-view-section">
          <div className="view-section">
            {filteredFacultys.map((faculty_detail, index) => (
              <div key={index} className="student-data">
                <div className="stu-row-data">
                  <img 
                    className="stu_img" 
                    src={faculty_detail.institution_details.img} 
                    alt={faculty_detail.basic_details.name} 
                  />
                  <div className="name-emp_id-specialist">
                    <p className="stu_name p-2">{faculty_detail.basic_details.name}</p>
                    <p className="stu_emp_idment">{faculty_detail.institution_details.emp_id}</p>
                    <p className="stu_specialist">{faculty_detail.institution_details.specialization}</p>
                  </div>
                </div>

                <button
                  className="edit-stu-btn"
                  onClick={() => edit_Faculty_data(faculty_detail)}
                >
                  Edit Details
                  <FontAwesomeIcon icon={faAngleRight} size="1.5x" />
                </button>

                <button
                  className="view-stu-btn"
                  onClick={() => view_Faculty_data(faculty_detail)}
                >
                  View Details
                  <FontAwesomeIcon icon={faAngleRight} size="1.5x" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
          


          {/* View -Open - Section */}
          <AnimatePresence>
        <motion.div  
            className="view-data-open" style={{ display: selectedFaculty ? 'block' : 'none' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
          {selectedFaculty && ( 
            <motion.div 
            className="view_data_content"   
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "-100vh" }}
          >
              <button className="close-btn" onClick={closeDetails}>
                <FontAwesomeIcon icon={faTimes} size="2x" />
              </button>
              <div className="view-img-and-name">
                <img className="faculty_img" src={selectedFaculty.institution_details.img} alt={selectedFaculty.basic_details.name} />

                <h2 className="faculty_name">{selectedFaculty.basic_details.name}</h2>
              </div>
              <div className="faculty_details">
                <div className="faculty_basic">
                  <h3 >Basic Details</h3>
                  <p>Gender: {selectedFaculty.basic_details.gender}</p>
                  <p>Date of Birth: {selectedFaculty.basic_details.dob}</p>
                </div>

                <div className="faculty_contact">
                  <h3 >Contact Details</h3>
                  <p>Mobile: {selectedFaculty.contact_details.mobile}</p>
                  <p>Email: {selectedFaculty.contact_details.email}</p>
                </div>


                <div className="faculty_institution">
                  <h3>Institution Details</h3>
                  <p>Employee ID: {selectedFaculty.institution_details.emp_id}</p>
                  <p>Year Attended: {selectedFaculty.institution_details.year_attended}</p>
                  <p>Specialization: {selectedFaculty.institution_details.specialization}</p>
                  <p>Employment Type: {selectedFaculty.institution_details.emp_type}</p>
                </div>

                <div className="faculty_responsibility">
                  <h3>Academic Responsibility</h3>
                  <p>Courses Taught: {selectedFaculty.academic_responsibility.courses_taught.join(', ')}</p>
                  <p>Administrative Role: {selectedFaculty.academic_responsibility.administrative_role}</p>
                </div>
              </div>

              <button className="go-back " onClick={closeDetails}>
                Go Back
              </button>
              </motion.div>
          )}
         </motion.div>
        </AnimatePresence>


      {/* Edit -Open - Section */}
      {/* <div className="edit-data-open" style={{ display: selectedFaculty ? 'block' : 'none' }}> */}
        <div className="edit-data-open" style={{ display: selectedForEdit? 'block' : 'none' }}>
          {selectedForEdit && (
            <div className="edit_data_content">
              <button className="close-btn" onClick={closeDetailsEdit}>
                <FontAwesomeIcon icon={faTimes} size="2x" />
              </button> 
              <h1>Edit Faculty Details</h1>
              <img className="stu_img" src={selectedForEdit.img} alt={selectedForEdit.name} />
              <h2>{selectedForEdit.name}</h2>
              <p>emp_idment: {selectedForEdit.emp_id}</p>

            
              <div className="form">
                    <div className="form-con">
                      <div className="con1">
                        <div className="input-field">
                          <input
                            type="text"
                            required
                            spellCheck="false"
                            name="name"
                            value={selectedForEdit.name}
                          ></input>
                          <label>Faculty Name </label>
                        </div>

                        <div className="input-field">
                          {/* <input type="text" required spellCheck="false" name="stream"></input> */}
                          <select>
                            <option>CSE</option>
                            <option>ECE</option>
                            <option>EE</option>
                            <option>ME</option>
                            <option>CIVIL</option>
                          </select>
                        </div>

                        <div className="input-field">
                          <input
                            type="text"
                            required
                            spellCheck="false"
                            name="emp_idment_no"
                            value={selectedForEdit.emp_id}
                          ></input>
                          <label>emp_idment No:</label>
                        </div>

                        <div className="input-field">
                          <input
                            type="text"
                            required
                            spellCheck="false"
                            name="mob"
                            value={selectedForEdit.mobile}
                          ></input>
                          <label>Mobile No : </label>
                        </div>

                        <div className="input-field">
                          <input
                            type="text"
                            required
                            spellCheck="false"
                            name="dob"
                          ></input>
                          <label>DOB</label>
                        </div>
                      </div>
                      <div className="con-2">
                        <div className="input-field">
                          <input
                            type="text"
                            required
                            spellCheck="false"
                            name="registration_no"
                          ></input>
                          <label>Registration No: </label>
                        </div>
                        <div className="input-field">
                          <select>
                            <option>B.Tech</option>
                            <option>BCA</option>
                            <option>BBA</option>
                            <option>MBA</option>
                            <option>BPT</option>
                          </select>
                        </div>

                        <div className="input-field">
                          <input
                            type="email"
                            required
                            spellCheck="false"
                            name="email"
                          ></input>
                          <label>Email: </label>
                        </div>

                        <div className="input-field">
                          <input
                            type="text"
                            required
                            spellCheck="false"
                            name="admission_year"
                          ></input>
                          <label>Admission Year: </label>
                        </div>

                        <div className="input-field">
                          <select>
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="input-field" id="address">
                      <input
                        type="text"
                        required
                        spellCheck="false"
                        name="address"
                      ></input>
                      <label>Local Address: </label>
                    </div>

                    <div className="input-field" id="profile-url">
                    
                      <input
                        type="text"
                        required
                        spellCheck="false"
                        name="profile_pic"
                      
                      ></input>
                      <label> <img
                        src="https://cdn-icons-png.flaticon.com/128/7610/7610196.png"
                        width={"20px"} style={{position:'relative' , left:'20px'}}
                      />Profile-Url</label>
                    </div>

             </div>
   
                {/*<p>specialist: {selectedForEdit.specialist}</p>
              <p>Graduation Year: {selectedForEdit.passout}</p> */}

                <button type='submit' className="confirm-form-changes" onClick={()=>saveChanges(newSFacultyObj)}>
                  Save Changes 
                </button>
                <button type='submit' className="confirm-form-changes">
                  Dormant Profile
                </button>
                <button className="go-back" onClick={closeDetailsEdit}>
                   Cancel 
                </button>
        </div>
          )}
      {/* </div> */}
      </div>

     </div> )}
    </>
  );
}

export default View_faculty;
