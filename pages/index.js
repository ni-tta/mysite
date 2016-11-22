import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import $ from 'jquery';
import _ from 'lodash';

export default class Home extends Component {
  render () {
    return (
      <div className="page page--home">
        <Helmet
          title={config.siteTitle}
        /> 
        <div className="home--background"
              style={{
                background: `url(${prefixLink("/img/background.jpg")}) no-repeat center center`,
                backgroundSize: 'cover'
              }}
            >
            <img src={prefixLink("/img/logo.png")} alt="" />
        </div>
        <div className="home--content">
        </div>
      </div>
    );
  }
}

