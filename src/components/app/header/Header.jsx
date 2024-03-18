import React from 'react';
import Profile from './profile/Profile';
import ToggleButton from './switch/ToggleButton';
import './Header.css';

const Header = () => {
  return (
    <div className='container-header'>
      <div className='header-path'>
        <h1>Pathfinding Visualizer</h1>
      </div>
      <div className='header-view-option'>
        <ToggleButton />
      </div>
      <div className='header-profile'>
        <Profile />
      </div>
    </div>
  )
}

export default Header