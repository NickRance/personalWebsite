import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import '../css/typography.css';

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  };

  render() {
    const { data, location } = this.props;

    const isRoot = location.pathname === '/';
  const ListLink = props => (
      <Link to={props.to} style={{
          display:'inline-block',
          marginRight: '1rem',
          color: 'white',
          textDecoration: 'none',
      }}>
          {props.children}
      </Link>
  )
    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          // Old meta config below
          // meta={[
          //   { name: 'description', content: 'Sample' },
          //   { name: 'keywords', content: 'sample, something' },
          // ]}
          meta={data.site.siteMetadata.meta}
        />
        <div
          style={{
            background: `#2196F3`,
            marginBottom: `1.45rem`,
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: isRoot ? `1.45rem 1.0875rem` : `1rem 0.75rem`,
            }}
          >
            <h1 style={{ margin: 0, fontSize: isRoot ? `2.5rem` : `2rem` }}>
              <Link
                to="/"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
              Home
                  {/*data.site.siteMetadata.title*/}
              </Link>
                <ul style={{ listStyle: `none`, float: `right` }}>
                    <ListLink to="/bio.html">About</ListLink>
                    <ListLink to="/blog/">Blog</ListLink>
                </ul>
            </h1>
          </div>
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {this.props.children()}
        </div>
      </div>
    );
  }
}

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
