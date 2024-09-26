import React from 'react'
import { Outlet } from 'react-router-dom'
import Uni_banner from './_uni_banner/Uni_banner';
import Uni_sidebar from './_uni_sidebar/Uni_sidebar';
import './_uni_layout_02.css'

function Uni_layout() {
    return (
    <>
        <div class="wallet-profile">
          <p class="wallet-profile-name">akashbera</p>
          <img class="wallet-profile-img" src="/src/assets/3.png" alt="" />
        </div>

        <div class="container">
           <Uni_sidebar/>  {/* hidden from document */}
          <div className="fake_sidebar_forA_reason"></div>
          <div class="right-container">
            <h1 id="uni_head">University of Engineering & Management , Jaipur </h1>  {/* hidden from document */}
            <Uni_banner/>
            <div id="content"> 
                  <Outlet/>
                  {/* <div class= "footer">
                    this is a footer 
                  </div> */}
            </div>
          
          </div>
        
        </div>

    </>
    )
  }

export default Uni_layout; 