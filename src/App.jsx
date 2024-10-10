import { useState } from 'react'
// import Student_container from './components/sidenavbar/Sidebar'  
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import LandingPage from './LandingPage.jsx'
import Home from './Home.jsx'


// STUDENT
import Stu_layout from './components/01_student/Stu_layout.jsx'
import Calender from "./components/01_student/calender/Calender";
import Admit_card from "./components/01_student/exams/Admit_card";
import Exam_form from "./components/01_student/exams/Exam_form";    // 
import Exam_routine from "./components/01_student/exams/Exam_routine";
import Marks from "./components/01_student/marks/Marks";
import Password from "./components/01_student/password/Password";
import Payment from "./components/01_student/payment/Payment";
import Routine from "./components/01_student/routine/Routine";
import Student_detail from "./components/01_student/student_detail/Student_detail";

// university 
import Uni_layout from './components/02_university/Uni_layout.jsx'
import Add_course from './components/02_university/course/Add_course.jsx'
import View_course from './components/02_university/course/View_course.jsx'
import Add_faculty from './components/02_university/faculty/Add_faculty.jsx'
import View_faculty from './components/02_university/faculty/View_faculty.jsx'
import Add_student from './components/02_university/student/Add_student.jsx'
import View_student from './components/02_university/student/View_student.jsx'
import Certificate_Issue from './components/02_university/certification/Certificate_Issue.jsx'
import Verification_certificate from './components/02_university/certification/Verification_certificate.jsx'
import Certificate_records from './components/02_university/certification/Certificate_records.jsx'
import Certificate_Access_Control from './components/02_university/certification/Certificate_Access_Control.jsx'

// AICTE
import Aic_layout from './components/03_aicte/Aic_layout.jsx'
import Add_university from './components/03_aicte/add_university/Add_university.jsx'
import Monitoring from './components/03_aicte/monitoring/Monitoring.jsx'
import Verify_university from './components/03_aicte/verify_university/Verify_university.jsx'

// COMPANY
import Comp_layout from './components/04_company/Comp_layout.jsx'
import Verify_degree from './components/04_company/verify_degree/Verify_degree.jsx'

import './App.css'
import UserAccessControl from './components/02_university/certification/Certificate_Access_Control.jsx'


function App() {
  const router1=createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<LandingPage/>}> 
            <Route path='' element={<Home/>}/>

        {/*student*/}
            <Route path='student/' element={<Stu_layout/>}>
              <Route path='calender' element={<Calender/>}/>
              <Route path='admit_cards' element={<Admit_card/>}/>
              <Route path='exam_forms' element={<Exam_form/>}/>
              <Route path='exam_routine' element={<Exam_routine/>}/>
              <Route path='marks' element={<Marks/>}/>
              <Route path='password' element={<Password/>}/>
              <Route path='payment' element={<Payment/>}/>
              <Route path='routine' element={<Routine/>}/>
              <Route path='student_detail' element={<Student_detail/>}/>
            </Route>

        {/*University*/}
            <Route path='university/' element={<Uni_layout/>}> 
              <Route path='certificate-issue' element={<Certificate_Issue/>}/>
              <Route path='certificate-verify' element={<Verification_certificate/>}/>
              <Route path='certificate-record' element={<Certificate_records/>}/>
              <Route path='certificate-access-control' element={<UserAccessControl role={"admin"}/>}/>
              <Route path='add_course' element={<Add_course/>}/> 
              <Route path='view_course' element={<View_course/>}/>
              <Route path='add_faculty' element={<Add_faculty/>}/>
              <Route path='view_faculty' element={<View_faculty/>}/>
              <Route path='add_student' element={<Add_student/>}/> 
              <Route path='view_student' element={<View_student/>}/>
            </Route>

         {/*AICTE*/}
            <Route path='aicte/' element={<Aic_layout/>}>
              <Route path='add_unisversity' element={<Add_university/>}/>
              <Route path='monitoring' element={<Monitoring/>}/>
              <Route path='verify_university' element={<Verify_university/>}/>
            </Route>

         {/*COMPANY*/}
            <Route path='company/' element={<Comp_layout/>}>
              <Route path='verify_degree' element={<Verify_degree/>}/>
            </Route>

        </Route>
    )
)
  return (  
    <RouterProvider router={router1}/>

  )
}

export default App
