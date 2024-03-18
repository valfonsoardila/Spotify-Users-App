import React, {useState} from 'react';
import './Container.css';
import Header from "../header/Header";

const Container = ({hovered}) => {
  return (
    <div className="container-blur"
      style={{
        filter: hovered ? 'blur(5px)' : 'none'
      }}
    >
      <div className="main-container">
        <Header />
        <div className="content-container">

        </div>
      </div>
    </div>
  )
}

export default Container