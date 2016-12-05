import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class About extends Component {
  render () {
    return (
      <div className="page page--about">
        <Helmet
          title={config.siteTitle}
        />
        <div className="page__title">
          About
        </div>
        <div className="info--wrapper">
        <div className="about--image">
        <img src={prefixLink("/img/me.jpg")} alt="" />
        </div>
        <div className="about--bullets">
          Hi, I'm Catherine. Here are some facts about myself. 
          <ul>➢ UC Berkeley junior majoring in cognitive science</ul>
          <ul>➢ Bay Area native</ul>
          <ul>➢ Human version of a cat</ul>
          Summary of my work experience
          <ul>➢ Intern at Mitsue-Links</ul>
          <ul>➢ Junior Mentor, Computer Science Mentors</ul>
          <ul>➢ Academic Intern, CS61A</ul>
          Skills
          <ul>➢ Programming: Python, Java, PHP, HTML/CSS/Javascript, C</ul>
          <ul>➢ Creative: Adobe Illustrator and Photoshop, Sketch</ul>
          <ul>➢ Other: Basic knowledge of UX methods, fluency in Japanese</ul>
        </div>
        </div>
      </div>
    );
  }
}
