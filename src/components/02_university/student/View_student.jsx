import React, { useState ,useEffect} from 'react';
import './_view_student_02.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faTimes } from '@fortawesome/free-solid-svg-icons';

function View_student() {
  const stu_details = [
    {
      img: "../src/assets/85kb.jpg",
      name: "Akash Bera", 
      enroll: 12022002001070,
      branch: "IT",
      passout:2026,
    },
    {
      img: "../src/assets/662.png",
      name: "Subhayan Kapas", 
      enroll: 12022002001071,
      branch: "Mechanical",
      passout:2023,
    },
    {
      img: "../src/assets/661.png",
      name: "Debjit Ghosh", 
      enroll: 12022002001032,
      branch: "AI-ML",
      passout:2024,
    },
    {
      img: "../src/assets/661.png",
      name: "Sourin Bag ", 
      enroll: 12022002001031,
      branch: "CIVIL",
      passout:2025,
    },
    {
      img: "../src/assets/661.png",
      name: "Suman Khan ", 
      enroll: 12022002001033,
      branch: "CIVIL",
      passout:2026,
    },
    {
      img: "../src/assets/661.png",
      name: "Arindam Dutta ", 
      enroll: 12022002026019,
      branch: "CIVIL",
      passout:2020,
    },
  ];
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedForEdit, setSelectForEdit] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); // Store the search input
  const [filteredStudents, setFilteredStudents] = useState(stu_details); // Store the filtered lis

    // Function to filter students based on search term (either name or enrollment)
    const handleSearch = () => {
      const filtered = stu_details.filter(
        (student) =>
          student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student.enroll.toString().includes(searchTerm)
      );
      if(filtered){
         setFilteredStudents(filtered);
      }
     
    };
    useEffect(()=>{
        handleSearch()
    },[searchTerm])

  function view_student_data(stu_detail) {
    setSelectedStudent(stu_detail); // Set the selected student
  }
  function edit_student_data(stu_detail) {
    setSelectForEdit(stu_detail); // Set the selected student
  }
 

  function closeDetails() {
    setSelectedStudent(null); // Reset selected student to hide the modal
    setSelectForEdit(null); // Ensure no edit modal is showing
  }
  
  function closeDetailsEdit() {
    setSelectForEdit(null); // Reset selected student for edit to hide the modal
  }
  

 function  saveChanges(stu_detail){
    setSelectForEdit(stu_detail);
  }
  return (
    <>
      <div>
        <div className="searchbar">
          <input id="searchText" type="text" placeholder="Search Student"   value={searchTerm}
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
            {filteredStudents.map((stu_detail, index) => (
              <div key={index} className="student-data">
                <div className="stu-row-data">
                  <img className="stu_img" src={stu_detail.img} alt={stu_detail.name} />
                  <div className="name-enroll-branch">
                    <p className="stu_name p-2 ">{stu_detail.name}</p>
                    <p className="stu_enrollment">{stu_detail.enroll}</p>
                    <p className="stu_branch">{stu_detail.branch}</p>
                  </div>
                </div>

                <button className="edit-stu-btn"
                onClick={() => edit_student_data(stu_detail)} 
                >
                  Edit Details
                  <FontAwesomeIcon icon={faAngleRight} size="1.5x" />
                </button>
                <button
                  className="view-stu-btn"
                  onClick={() => view_student_data(stu_detail)} // Correct way to pass function
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
          <div className="view-data-open" style={{ display: selectedStudent? 'block' : 'none' }}>
        {selectedStudent && (
          <div className="view_data_content">
            <button className="close-btn" onClick={closeDetails}>
              <FontAwesomeIcon icon={faTimes} size="2x" />
            </button> 
            <img className="stu_img" src={selectedStudent.img} alt={selectedStudent.name} />
            <h2>{selectedStudent.name}</h2>
            <p>Enrollment: {selectedStudent.enroll}</p>
            <p>Branch: {selectedStudent.branch}</p>
            <p>Graduation Year: {selectedStudent.passout}</p>
           
            {/* Add more details as needed */}
                  <p>Students details are here Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ducimus modi si
              Doloremque expedita ea aut odit velit odio ducimus consequuntur possimus harum, fuga consequatur earum! Soluta dolore officia repellendus tempora facilis eos eaque? Inventore cupiditate ad eum ipsam officiis, cum accusamus!
              Quia nulla commodi,  optio ipsam mt. Asperiores, voluptatibus adipisci quibusdam harum id culpa odio? Maiores cumque inventore labore suscipit.
              Velit, laborum ducimus! Repellendus, vitae molestiae! Dicta ex veritatis eveniet accusantium laborum quae amet tenetur adipisci earum illum excepturi optio ipsam maxime a, et autem consequatur alias nemo nihil voluptatibus?
              Harum earum quae voluptate molestiae iste itaque nihil cum quasi odit nam eligendi adipisci, recusandae placeat tenetur dignissimol Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis sit animi aliquam fugiat explicabo deserunt consectetur ullam quis placeat debitis culpa adipisci ipsum, excepturi ratione dolorum possimus earum. Quas, temporibus.
              Dolore, eius illum nihil eaque nisi fugiat modi nemo provident esse nostrum, libero ad recusandae cupiditate veritatis ipsum quisquam? Dolores nemo quaerat modi voluptate exercitationem velit cumque similique magnam soluta!
              Consequuntur, labore laborum animi corporis autem fuga dignissimos, minima eius iure quis nulla molestiae harum accusantium, in reiciendis officiis? Odit, itaque placeat iste optio eligendi provident reiciendis dolorem atque amet.
              Explicabo eius commodi autem et tempore! Praesentium, quo error? Repellat omnis numquam, labore unde quae sequi dolores reiciendis explicabo nobis doloremque magni velit iste fugit facere exercitationem vitae quia vero?
              Hic laudantium impedit magni inventore officia voluptates animi iste dicta, porro commodi deserunt amet maiores laboriosam. Numquam dignissimos cumque soluta. Perspiciatis at ipsam sapiente eligendi dolore praesentium error repudiandae asperiores.
              Architecto, velit ullam? Veritatis, omnis! Necessitatibus illum rerum maxime enim architecto nesciunt incidunt animi quas! Maiores voluptatibus sit eum, consectetur cupiditate odit officiis distinctio incidunt dicta ea quidem expedita ad.
              Rerum cum dolore minima minus repudiandae ex sit. Quas, voluptatem libero, obcaecati molestiae ipsa voluptatibus praesentium sint a ducimus totam vitae, recusandae similique ipsam eum assumenda? Vero velit assumenda fugit.
              Tenetur blanditiis esse maxime quaerat itaque magni adipisci iure dignissimos sunt! Ad ea id, saepe cum perspiciatis nam omnis dignissimos a aliquid ut nobis eum voluptate architecto quo reprehenderit dolorem.
              Molestias asperiores, nisi enim sint dolorum quam iste vitae ullam accusamus sit natus ducimus molestiae tenetur nulla voluptatum laboriosam cum sed veniam temporibus quas! At quo aut laboriosam sit maiores!
              Perspiciatis vitae alias excepturi quo consequuntur, incidunt doloribus. Cumque ullam assumenda debitis. Iure est nam, ad quasi placeat voluptatum magni architecto impedit unde temporibus, beatae assumenda modi delectus obcaecati! Error!s dolorum praesentium laboriosam veritatis omnis, hic fugit! Atque dolor molestias harum ea.   cusamus, aliquam minima quisquam eaque eos non pariatur eum beatae tempora perferendis obcaecati, at architecto dhic libero laudantium distinctio accusamus sint vel provident deserunt!</p>
              <button className="go-back" onClick={closeDetails}>
                  Go Back
               </button>
          </div>
        )}

      </div>


      {/* Edit -Open - Section */}
      {/* <div className="edit-data-open" style={{ display: selectedStudent ? 'block' : 'none' }}> */}
        <div className="edit-data-open" style={{ display: selectedForEdit? 'block' : 'none' }}>
          {selectedForEdit && (
            <div className="edit_data_content">
              <button className="close-btn" onClick={closeDetailsEdit}>
                <FontAwesomeIcon icon={faTimes} size="2x" />
              </button> 
              <h1>Edit Student Details</h1>
              <img className="stu_img" src={selectedForEdit.img} alt={selectedForEdit.name} />
              <h2>{selectedForEdit.name}</h2>
              <p>Enrollment: {selectedForEdit.enroll}</p>

            
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
                          <label>Student Name </label>
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
                            name="enrollment_no"
                            value={selectedForEdit.enroll}
                          ></input>
                          <label>Enrollment No:</label>
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
   
                {/*<p>Branch: {selectedForEdit.branch}</p>
              <p>Graduation Year: {selectedForEdit.passout}</p> */}

                <button type='submit' className="confirm-form-changes" onClick={()=>saveChanges(newSstudentObj)}>
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

    </>
  );
}

export default View_student;
