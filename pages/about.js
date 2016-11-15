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

export default class About extends Component {
  render () {
    return (
      <div className="page page--about">
        <Helmet
          title={config.siteTitle}
        />
        <h1>
          About
        </h1>
      </div>
    );
  }
}
