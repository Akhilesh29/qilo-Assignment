import React from 'react'
import './element.css';

const Element = () => {
  return (
    <div className='elem'>
      <ul>
        <li>This app uses OpenWeatherMap API integration to fetch live weather status of you location.</li>
        <li>Allow location permission.</li>
        <li>Use Add and Delete button to add or delete this element.</li>
      </ul>
    </div>
  )
}

export default Element