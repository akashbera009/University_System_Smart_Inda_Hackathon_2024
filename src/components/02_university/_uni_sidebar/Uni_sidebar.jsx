import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { useState } from 'react';
import './_uni_sidebar_02.css'



function Uni_sidebar() {
  const [openIndex, setOpenIndex] = useState(null); // State to keep track of the currently open accordion index
  // const [bgcolouradd, setBgcolouradd] = useState(false);
  
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // If the same accordion is clicked, close it; otherwise, 
  };
  const[subOpenIndex, setSubOpenIndex] = useState(null)
  const setItColour=(sub_index)=>{  
      setSubOpenIndex(sub_index)
    }


  return (<>
    
    <div class="sidenav">

    <div>
      <div>
        <div onClick={() => toggleAccordion(0)} class="accordion" style={{backgroundColor: openIndex===0?'rgb(45, 30, 56)':''}}>
         
        <label class="label">
        <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                width="25"
                height="25"
                style={{ marginRight: "10px" }}
              >
                <path d="M12 2 0 9 12 16 22 10.1667V17.5H24V9L12 2ZM3.99902 13.4905V18.0001C5.82344 20.429 8.72812 22.0001 11.9998 22.0001 15.2714 22.0001 18.1761 20.429 20.0005 18.0001L20.0001 13.4913 12.0003 18.1579 3.99902 13.4905Z"></path>
              </svg>
          Students
        </label>
        </div>
        {openIndex === 0 && (
          <div class="panel">
            <p> 
              <NavLink to="/university/add_student">
              <p class="side-nav-sub-list" onClick={()=>setItColour(0)} style={{backgroundColor:subOpenIndex ===0 ?"rgb(45, 30, 56)": ""}}>Add New Student</p>
              </NavLink>
            </p>
            <p><NavLink to="/university/view_student"><p class="side-nav-sub-list" onClick={()=>setItColour(1)} style={{backgroundColor:subOpenIndex ===1 ?"rgb(45, 30, 56)": ""}}>View Student Details</p></NavLink></p>
          </div>
        )}
      </div>

      <div>
        <div onClick={() => toggleAccordion(1)} class="accordion"  style={{backgroundColor: openIndex===1?'rgb(45, 30, 56)':''}}>
        <label class="label">
        <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="White"
                width="25"
                height="25"
                style={{ marginRight: "10px" }}
              >
                <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM17.3628 15.2332C20.4482 16.0217 22.7679 18.7235 22.9836 22H20C20 19.3902 19.0002 17.0139 17.3628 15.2332ZM15.3401 12.9569C16.9728 11.4922 18 9.36607 18 7C18 5.58266 17.6314 4.25141 16.9849 3.09687C19.2753 3.55397 21 5.57465 21 8C21 10.7625 18.7625 13 16 13C15.7763 13 15.556 12.9853 15.3401 12.9569Z"></path>
              </svg>
          Teacher
          </label>
        </div>
        {openIndex === 1 && (
          <div class="panel">
           <p> <NavLink to="/university/add_faculty"  ><p class="side-nav-sub-list">Add New Faculty</p></NavLink></p>
           <p><NavLink to="/university/view_faculty"><p class="side-nav-sub-list">View Faculty</p></NavLink></p>
          </div>
        )}
      </div>

      <div>
        <div onClick={() => toggleAccordion(2)} class="accordion" style={{backgroundColor: openIndex===2?'rgb(45, 30, 56)':''}}>
        <label class="label">
        <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                width="25" 
                height="25"
                style={{ marginRight: "10px" }}
              >
                <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM6.02332 15.4163C7.49083 17.6069 9.69511 19 12.1597 19C14.6243 19 16.8286 17.6069 18.2961 15.4163C16.6885 13.9172 14.5312 13 12.1597 13C9.78821 13 7.63095 13.9172 6.02332 15.4163ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"></path>
              </svg>
          Accountent
          </label>
        </div>
        {openIndex === 2 && (
          <div class="panel">
            <p> <NavLink to="/university/add_student"  ><p class="side-nav-sub-list">Add New Student</p></NavLink></p>
            <p><NavLink to="/university/view_student"><p class="side-nav-sub-list">View Student Details</p></NavLink></p>
          </div>
        )}
      </div>
      <div>
        <div onClick={() => toggleAccordion(3)} class="accordion" style={{backgroundColor: openIndex===3?'rgb(45, 30, 56)':''}}>
        <label class="label">
        <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white "
                width="25"
                height="25"
                style={{ marginRight: "10px" }}
              >
                <path d="M16 2H4C3.44772 2 3 2.44772 3 3V21C3 21.5523 3.44772 22 4 22H12.2547C11.4638 20.8662 11 19.4872 11 18C11 14.134 14.134 11 18 11C19.0736 11 20.0907 11.2417 21 11.6736V7L16 2ZM13.7857 15.3269C13.8246 14.5997 14.3858 14.0083 15.11 13.9313L15.9807 13.8389C16.0841 13.8279 16.1815 13.7845 16.2589 13.715L16.9102 13.1299C17.4519 12.6431 18.2669 12.6218 18.8334 13.0795L19.5145 13.6298C19.5954 13.6951 19.6949 13.7333 19.7988 13.7389L20.6731 13.7857C21.4003 13.8246 21.9917 14.3858 22.0687 15.11L22.1611 15.9807C22.1721 16.0841 22.2155 16.1815 22.285 16.2589L22.8701 16.9102C23.3569 17.4519 23.3782 18.2669 22.9205 18.8334L22.3702 19.5145C22.3049 19.5954 22.2667 19.6949 22.2611 19.7988L22.2143 20.6731C22.1754 21.4003 21.6142 21.9917 20.89 22.0687L20.0193 22.1611C19.9159 22.1721 19.8185 22.2155 19.7411 22.285L19.0898 22.8701C18.5481 23.3569 17.7331 23.3782 17.1666 22.9205L16.4855 22.3702C16.4046 22.3049 16.3051 22.2667 16.2012 22.2611L15.3269 22.2143C14.5997 22.1754 14.0083 21.6142 13.9313 20.89L13.8389 20.0193C13.8279 19.9159 13.7845 19.8185 13.715 19.7411L13.1299 19.0898C12.6431 18.5481 12.6218 17.733 13.0795 17.1666L13.6298 16.4855C13.6951 16.4046 13.7333 16.3051 13.7389 16.2012L13.7857 15.3269ZM21.0303 17.0303L19.9697 15.9697L17.5 18.4393L16.0303 16.9697L14.9697 18.0303L16.9697 20.0303L17.5 20.5607L18.0303 20.0303L21.0303 17.0303Z"></path>
              </svg>
          Exam Cell</label>
        </div>
        {openIndex === 3 && (
          <div class="panel">
            <p> <NavLink to="/university/add_student"  ><p class="side-nav-sub-list">Add New Student</p></NavLink></p>
            <p><NavLink to="/university/view_student"><p class="side-nav-sub-list">View Student Details</p></NavLink></p>
          </div>
        )}
      </div>
      <div>
        <div onClick={() => toggleAccordion(4)} class="accordion" style={{backgroundColor: openIndex===4?'rgb(45, 30, 56)':''}}>
        <label class="label">
        <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                width="25"
                height="25"
                style={{ marginRight: "10px" }}
                color="black"
              >
                <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM11 13V17H6V13H11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
              </svg>
          Events
          </label>
        </div>
        {openIndex === 4 && (
          <div class="panel">
            <p> <NavLink to="/university/add_student"  ><p class="side-nav-sub-list">Add New Student</p></NavLink></p>
            <p><NavLink to="/university/view_student"><p class="side-nav-sub-list">View Student Details</p></NavLink></p>
          </div>
        )}
      </div>
      <div>
        <div onClick={() => toggleAccordion(5)} class="accordion" style={{backgroundColor: openIndex===5?'rgb(45, 30, 56)':''}}>
        <label class="label">
                  
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Online-Learning-Ar-Education-1--Streamline-Ultimate" height="24" width="24"   style={{ marginRight: "10px" }}><desc>Online Learning Ar Education 1 Streamline Icon: https://streamlinehq.com</desc><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" d="M3.55 14.917c-0.17724 -0.0025 -0.3519 0.0425 -0.5058 0.1305 -0.1539 0.0879 -0.2814 0.2155 -0.3692 0.3695L0.5 20.917h23l-2.175 -5.5c-0.0878 -0.154 -0.2153 -0.2816 -0.3692 -0.3695 -0.1539 -0.088 -0.3286 -0.133 -0.5058 -0.1305" stroke-width="1"></path><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" d="m0.5 20.914 0.535 1.786c0.06174 0.2061 0.1883 0.3868 0.36088 0.5152 0.17258 0.1284 0.38199 0.1978 0.59712 0.1978h20.013c0.2151 0 0.4245 -0.0694 0.5971 -0.1978 0.1726 -0.1284 0.2992 -0.3091 0.3609 -0.5152l0.535 -1.787" stroke-width="1"></path><path stroke="#ffffff" d="M19.375 18.164c-0.2071 0 -0.375 -0.1679 -0.375 -0.375s0.1679 -0.375 0.375 -0.375" stroke-width="1"></path><path stroke="#ffffff" d="M19.375 18.164c0.2071 0 0.375 -0.1679 0.375 -0.375s-0.1679 -0.375 -0.375 -0.375" stroke-width="1"></path><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" d="M12 15.586V3.44601S11.164 0.854013 4.005 0.587013c-0.14577 -0.013302 -0.29273 0.002409 -0.43239 0.046228 -0.13966 0.043818 -0.26925 0.114874 -0.38129 0.209063 -0.11204 0.09419 -0.20431 0.209646 -0.27148 0.339696 -0.06716 0.13006 -0.1079 0.27213 -0.11984 0.41801V11.728c0.02548 0.2829 0.15941 0.545 0.37377 0.7314s0.49251 0.2827 0.77623 0.2686c7.2 0.254 8.053 2.86 8.053 2.86" stroke-width="1"></path><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" d="M5.774 4.10001c1.37233 0.11216 2.72039 0.4276 4 0.936" stroke-width="1"></path><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" d="M5.774 7.10001c1.37233 0.11216 2.72039 0.4276 4 0.936" stroke-width="1"></path><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" d="M5.774 10.1c0.74323 0.075 1.48101 0.1965 2.209 0.364" stroke-width="1"></path><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" d="M18.226 4.10001c-1.3703 0.1126 -2.7163 0.42804 -3.994 0.936" stroke-width="1"></path><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" d="M18.226 7.10001c-1.3703 0.1126 -2.7163 0.42804 -3.994 0.936" stroke-width="1"></path><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" d="M16.2 10.425c-0.6725 0.1431 -1.3304 0.3484 -1.965 0.613" stroke-width="1"></path><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" d="M12 15.586V3.446s0.837 -2.592001 8 -2.859001c0.1454 -0.012608 0.2918 0.003623 0.4309 0.04776 0.1391 0.044137 0.2681 0.115311 0.3796 0.209435 0.1115 0.094125 0.2033 0.209346 0.2701 0.339046 0.0669 0.1297 0.1074 0.27133 0.1194 0.41676v10.128c-0.0255 0.2829 -0.1594 0.545 -0.3738 0.7314 -0.2143 0.1864 -0.4925 0.2827 -0.7762 0.2686 -7.2 0.254 -8.054 2.86 -8.054 2.86" stroke-width="1"></path></svg>

          Courses</label>
        </div>
        {openIndex === 5 && (
          <div class="panel">
            <p> <NavLink to="/university/add_course"  ><p class="side-nav-sub-list">Add New Course</p></NavLink></p>
            <p><NavLink to="/university/view_course"><p class="side-nav-sub-list">View Current Courses</p></NavLink></p>
          </div>
        )}
      </div>
      <div>
        <div onClick={() => toggleAccordion(6)} class="accordion" style={{backgroundColor: openIndex===6?'rgb(45, 30, 56)':''}}>

        <label class="label">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Certified-Diploma-2--Streamline-Ultimate" height="24" width="24"   style={{ marginRight: "10px" }}><desc>Certified Diploma 2 Streamline Icon: https://streamlinehq.com</desc><path d="M7.5 17h-6a1 1 0 0 1 -1 -1V2a1 1 0 0 1 1 -1h21a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path d="M0.5 6.5 6 1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path d="m18 17 5.5 -5.5" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path d="M12 18a3.487 3.487 0 0 1 -2.5 -1.051V23l2.5 -3 2.5 3v-6.051A3.487 3.487 0 0 1 12 18Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path d="M8.5 14.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path d="M10.5 14.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0 -3 0Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path d="m9.5 4 5 0" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path d="m7 7 10 0" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path></svg>
          Certificate</label>
        </div>
        {openIndex === 6 && (
          <div class="panel">
            <p> <NavLink to="/university/certificate-issue"  ><p class="side-nav-sub-list">Certificate Issuance</p></NavLink></p>
            <p><NavLink to="/university/certificate-verify"><p class="side-nav-sub-list">Verification</p></NavLink></p>
            <p><NavLink to="/university/certificate-record"><p class="side-nav-sub-list">Record Keeping</p></NavLink></p>
            <p><NavLink to="/university/certificate-access-control"><p class="side-nav-sub-list">User Access Control</p></NavLink></p>
          </div>
        )}
      </div>
      <div>
        <div onClick={() => toggleAccordion(7)} class="accordion" style={{backgroundColor: openIndex===7?'rgb(45, 30, 56)':''}}>
        <label class="label">
        <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                width="25"
                height="25"
                style={{ marginRight: "10px" }}
              >
                <path d="M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z"></path>
              </svg>
          Log Out
          </label>
        </div>
        {openIndex === 7 && (
          <div class="panel">
            <p> <NavLink to="/university/add_student"  ><p class="side-nav-sub-list">Log Out</p></NavLink></p>
        
          </div>
        )}
      </div>
    </div>

     
    </div>
</>
  )
}


// const accordionStyle = {
//   cursor: 'pointer',
//   padding: '10px',
//   fontWeight: 'bold',
//   backgroundColor: 'transparent',
//   // border: '1px solid #ccc',
//   marginTop: '2vh',
//   marginLeft:'1vw'
// };

// const panelStyle = {
//   padding: '10px',
//   // border: '1px solid #ccc',
//   borderTop: 'none',
//   backgroundColor: 'transparent'
// };

export default Uni_sidebar