import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <div style={{
      overflowY: 'hidden',
    }}>
        <Outlet/>
    </div>
  )
}

export default HomeLayout