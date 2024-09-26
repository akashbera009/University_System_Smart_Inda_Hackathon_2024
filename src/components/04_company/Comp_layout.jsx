import React from 'react'
import { Outlet } from 'react-router-dom'
function Comp_layout() {
  return (
    <>
    <div>Comp_layout</div>
    <Outlet/>
    </>
  )
}

export default Comp_layout