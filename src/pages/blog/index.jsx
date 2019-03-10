import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from '../../layouts/Layout';
import SEO from '../../components/SEO';
import formatReadingTime from '../../helpers/formatReadingTime';

function BlogIndex() {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
              }
              timeToRead
            }
          }
        }
      }
    `,
  );

  const posts = allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO
        title="Все посты"
        keywords={[`блог`, `gatsby`, `javascript`, `react`]}
      />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <div key={node.fields.slug}>
            <h3>
              <Link to={`/${node.fields.slug}`}>{title}</Link>
            </h3>
            <small>{node.frontmatter.date} • {formatReadingTime(node.timeToRead)}</small>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        );
      })}
    </Layout>
  );
}

export default BlogIndex;
