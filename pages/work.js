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
        <div className="page__title">
          Work
        </div>
      </div>
    );
  }
}
