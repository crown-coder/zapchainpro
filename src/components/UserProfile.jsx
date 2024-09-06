import React from 'react'
import { FaUser } from "react-icons/fa";

const UserProfile = () => {
  return (
    <div className='zapchain__userprofile'>
        <div className='user-profile'>
            <FaUser />
        </div>
        <h2>@sadi_boi</h2>
    </div>
  )
}

export default UserProfile