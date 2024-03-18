import React from 'react';
import Profile from './profile/Profile';
import ToggleButton from './switch/ToggleButton';
import Path from './path/Path';
import './Header.css';

const Header = ({path}) => {
  return (
    <div className='container-header'>
      <div className='header-path'>
        <Path path={path} />
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