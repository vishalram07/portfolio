import React from "react";
import "./Experience.css";
import css3 from '../../assests/css3.png'
import html from '../../assests/html-5.png'
import js from '../../assests/javascript.png'
import react from '../../assests/react.png'
import bs from '../../assests/bootstrap.png'
import three from '../../assests/threejs.png'
import node from '../../assests/node.jpg'
import postgr from '../../assests/postgresql.png'
import python from '../../assests/python.png'
import rails from '../../assests/rails.png'
import ruby from '../../assests/ruby.png'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img src={html} className="experience_details-icon" alt="html"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={css3} className="experience_details-icon" alt="css"/>
              <div>
               
                <h4>CSS3</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={js} className="experience_details-icon" alt="js"/>
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={react} className="experience_details-icon" alt="react"/>
              <div>                
                <h4>REACT & REDUX</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={bs} className="experience_details-icon" alt="bs"/>
              <div>           
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={three} className="experience_details-icon" alt="threejs"/>
              <div>
               
                <h4>Three.js</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img src={postgr} className="experience_details-icon" alt="postgresql"/>
              <div>
               
                <h4>PostgreSQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={ruby} className="experience_details-icon" alt="ruby"/>
              <div>
                <h4>Ruby</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={rails} className="experience_details-icon" alt="rails"/>
              <div>
             
                <h4>Ruby on Rails</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={python} className="experience_details-icon" alt="python"/>
              <div>
                <h4>Python</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={node} className="experience_details-icon" alt="node"/>
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
