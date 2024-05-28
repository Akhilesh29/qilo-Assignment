import React from 'react'
import './topbar.css';
import Profile from './PROFILE/Profile';
import Weather from './WEATHER/Weather';

const Topbar = () => {
  return (
    <div className="topbar">
      <Profile />
      <Weather />
    </div>
  )
}

export default Topbar