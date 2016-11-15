import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import $ from 'jquery';
import _ from 'lodash';

// export default class Index extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {}

//   render () {
//     const data = [
//       {
//         name: 'Christian Kitty',
//         title: 'Senior Executive Advisor'
//       },
//       {
//         name: 'Julia Kitty',
//         title: 'Kitty'
//       },
//       {
//         name: 'Cow Kitty',
//         title: 'Cow'
//       },
//       {
//         name: 'Bunny Kitty',
//         title: 'Bunny'
//       }
//     ];

//     const peopleElements = _.map(data, (person, index) => {
//       return (
//         <div
//           key={ `personElem-${index}` }
//           className="person__wrapper"
//         >
//           <div className="col col--1">
//             { person.name }
//           </div>
//           <div className="col col--2">
//             { person.title }
//           </div>
//         </div>
//       );
//     });
 // <div className="repeating">
 //          { peopleElements }
 //        </div>
  // <div className="grad"></div>
 // 
export default class Home extends Component {
  render () {
    return (
      <div className="page page--home">
        <Helmet
          title={config.siteTitle}
        /> 
        <div className="home--content">
          <img src="logo.png" alt="Catherine Ai Nitta" align="middle" ></img>
        </div>
      </div>
    );
  }
}

