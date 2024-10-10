import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './_verification_certificate.css';
// import Test from './Test';

const students = [
  { id: 1, name: "John Doe", enroll: "CSE120", year: "2024", verified: true },
  { id: 2, name: "Jane Smith", enroll: "ECE210", year: "2023", verified: false },
  { id: 3, name: "Bob Johnson", enroll: "MECH310", year: "2022", verified: true },
];

const Verification_certificate = () => {
  const [enrollment, setEnrollment] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [verificationStatus, setVerificationStatus] = useState(students); // Initialize with students data
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false); // For accordion toggle


  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleProceed = () => {
    const foundStudent = students.find(student => student.enroll === enrollment);
    if (foundStudent) {
      setSelectedStudent(foundStudent);
      setAccordionOpen(true);
    } else {
      alert('Student not found!');
    }
  };
  const handleVerify = () => {
    if (selectedFiles.length === 0) {
      alert('Please upload files for verification!');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const updatedStatus = verificationStatus.map(student => ({
        ...student,
        // verified: true, // Mock verification
      }));
      setVerificationStatus(updatedStatus);
      setLoading(false);
      setShowPopup(true); // Trigger popup after verification
    }, 500); // Simulate async process
  };

  const closePopup = () => {
    setShowPopup(false); 
    setAccordionOpen(false); // Close accordion after closing popup
    setEnrollment(''); // Reset enrollment input
    setSelectedStudent(null); // Reset selected student
    setSelectedFiles([]); // Reset selected files
  };


  return (
    <motion.div className='verification-whole'>
    <div className="single-verification bulk-verification">
      <h2>Single Certificate Verification</h2>

      <input 
        type="text" 
        value={enrollment} 
        onChange={(e) => setEnrollment(e.target.value)} 
        placeholder="Enter Enrollment No" 
      />
      <button onClick={handleProceed}>Proceed</button>

      {/* Accordion for Uploading and Verifying Certificate */}
      <AnimatePresence>
        {accordionOpen && (
          <motion.div 
            className="virification-accordion"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="verification-section">
              <h3>{selectedStudent.name}</h3>
              <p>Enrollment No: {selectedStudent.enroll}</p>
              <p>Year: {selectedStudent.year}</p>

              <input type="file" multiple onChange={handleFileUpload} /> {/* Allow multiple files */}
              <button 
                onClick={handleVerify} 
                disabled={loading}
                className={loading ? 'disabled-button' : ''}
              >
                {loading ? 'Verifying...' : 'Verify Certificate'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Popup for Verification Completion */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            className="popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="popup-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <h3>Verification Result</h3>
              <p>{selectedStudent.name} has been {selectedStudent.verified ? 'Verified ✔' : 'Not Verified'}</p>
              <button onClick={closePopup} className="close-popup-btn">
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

    <div className="bulk-verification">
      <h2>Bulk Certificate Verification</h2>

      <input type="file" multiple onChange={handleFileUpload} />
      
      <button 
        onClick={handleVerify} 
        disabled={loading}
        className={loading ? 'disabled-button' : ''}
      >
        {loading ? 'Verifying...' : 'Verify Certificates'}
      </button>

      {/* Popup for Verification Completion */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            className="popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
           <motion.div 
              className="popup-content ledger"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <h3>Verification Results</h3>
              
              <div className="ledger-table">
                <div className="ledger-header">
                  <div className="ledger-cell">Name</div>
                  <div className="ledger-cell">Enrollment</div>
                  <div className="ledger-cell">Year</div>
                  <div className="ledger-cell">Status</div>
                </div>
                
                <ul>
                  {verificationStatus.map(student => (
                    <div className="ledger-row" key={student.id}>
                      <div className="ledger-cell">{student.name}</div>
                      <div className="ledger-cell">{student.enroll}</div>
                      <div className="ledger-cell">{student.year}</div>
                      <div className="ledger-cell">
                        {student.verified ? 
                          <span className="verified">Verified ✔</span> : 
                          <span className="not-verified">Not Verified</span>}
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
              
              <button onClick={closePopup} className="close-popup-btn">
                Done
              </button>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
        {/* <Test/> */}
    </motion.div>

  );
}

export default Verification_certificate;
