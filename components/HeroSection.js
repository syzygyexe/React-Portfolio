import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Alexander Borisov</h1>
      <p>Full-stack web dev</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn-outline'
          buttonSize='btn-large'
        >
          Resume(PDF)
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
