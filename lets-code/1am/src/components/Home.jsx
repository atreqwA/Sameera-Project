import React from 'react';
import am from "../assets/logo.svg";
import "../styles/home.css";
import arr from "../assets/arrow.svg";
import line from "../assets/line.svg";
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true });

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
       <nav className="navbar">
  <ul className="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">Build</a></li>
    <li><a href="#">Deploy</a></li>
  </ul>
</nav>
</nav>
      <div className="container">  
        <div className="hero">
          <p 
            className={`title ${titleInView ? 'scroll-fade' : ''}`} 
            ref={titleRef}
          >
            REVOLUTIONIZE <br/> YOUR CODING WITH
          </p>
          <img 
            src={am} 
            alt="Hero" 
            ref={imageRef} 
            className={imageInView ? 'hero-image' : ''} // Add animation class
          />
        </div>
        <h6 
          className={`scroll-slide ${textInView ? 'scroll-fade' : ''}`} 
          ref={textRef}
        >
          Scroll to Explore
        </h6>
        <div className="arrow">
          <img src={line} alt="Line" />
          <img src={arr} alt="Arrow" />
        </div>
      </div>
     
    </>
  );
}

export default Home;
