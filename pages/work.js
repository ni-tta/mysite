//Work
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class Work extends Component {
  render () {
    return (
      <div className="page page--work">
        <Helmet
          title={config.siteTitle}
        />
        <h1>
          Work
        </h1>
        <div className="col col--1">
          <img src="me.jpg"></img>
        </div>
        <div className="col col--2">
          lorum ipsum
        </div>
      </div>
    );
  }
}
