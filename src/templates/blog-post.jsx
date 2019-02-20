import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../layouts/Layout';
import { formatReadingTime } from '../utils/helpers';

class BlogPostTemplate extends React.Component {
  // Add Codepen snippets
  componentDidMount() {
    const codepen = document.getElementsByClassName('codepen');
    if (codepen.length > 0) {
      if (!document.getElementById('codepen-script') || !this.state.codepen) {
        const s = document.createElement('script');
        s.async = true;
        s.defer = true;
        s.src = `//static.codepen.io/assets/embed/ei.js`;
        s.id = 'codepen-script';
        const body = document.body;
        if (body) {
          body.appendChild(s);
        }

        this.setState({
          codepen: true,
        });
      }
    }
  }

  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const siteDescription = post.excerpt;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        
        <h1>{post.frontmatter.title}</h1>
        <p>
          {post.frontmatter.date}
          {` • ${formatReadingTime(post.timeToRead)}`}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
