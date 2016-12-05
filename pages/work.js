//Work
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';



// const work = [
//   {
//     name: 'Redesign of the Watch Strap',
//     image: '',
//     desc: 'HCD, Low Fidelity Prototype',
//     url: 'https://www.behance.net/gallery/36578203/Re-designing-the-Watch-Strap'
//   },
//   {
//     name: 'Personal Website',
//     image: '',
//     desc: 'HTML/CSS/JS',
//     url: 'http://ni-tta.github.io'
//   },
//   {
//     name: 'Personal Photography Website',
//     image: '',
//     desc: 'HTML/CSS/JS',
//     url: 'http://throughtheeyesofcat.github.io'
//   },
//   {
//     name: 'In the Law News Project',
//     image:'',
//     desc: 'PHP, SQL, HTML/CSS/JS',
//     url: ''
//   },
//   {
//     name: 'Oppia Mobile Design',
//     image: '',
//     desc: 'Mobile UI Design',
//     url: ''
//   },
//   {
//     name: 'Digital Illustration',
//     image: '',
//     desc: 'Adobe Illustrator',
//     url: 'https://www.behance.net/aicatn'
//   },
//   {
//     name: 'Artwork',
//     image:'',
//     desc: 'Sumi-e Brush Painting',
//     url: 'http://aicatn.deviantart.com/gallery/27817821/Paintings'
//   }
// ];

// const workEl= _.map(works, (work, index) => {
//   return (
//     <div
//       key={ `workEl-${index}` }
//       className={ classNames('work', `workEl-${index}`) }
//     >
//         <div className="work__explanation">
//           <div className="work__explanation--name">
//             { work.name }
//           </div>
//           <div className="work__explanation--desc">
//             { work.desc }
//           </div>
//         </div>
//     </div>
//   );
// });


export default class Work extends Component {
  render () {
    return (
      <div className="page page--work">
        <Helmet
          title={config.siteTitle}
        />
        <div className="page__title">
          Work
        </div>
        <div className="grid--wrapper">
          <div className="grid grid--1">
            <img src={prefixLink("/img/watch.png")}/>
          </div>
          <div className="grid grid--2">
            <img src={prefixLink("/img/photo.png")}/>
          </div>
          <div className="grid grid--3">
            <img src={prefixLink("/img/personal.png")}/>
          </div>
          <div className="grid grid--1">
            <img src={prefixLink("/img/inthenews.png")}/>
          </div>
          <div className="grid grid--2">
            <img src={prefixLink("/img/oppia.png")}/>
          </div>
          <div className="grid grid--3">
            <img src={prefixLink("/img/port_logo.png")}/>
          </div>
          <div className="grid grid--center">
            <img src={prefixLink("/img/painting.png")}/>
          </div>
        </div>
      </div>
    );
  }
}
