import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from '~src/layouts/Layout';
import SEO from '~src/components/SEO';
import formatReadingTime from '~src/helpers/formatReadingTime';

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
                date(formatString: "DD MMMM, YYYY", locale: "ru-RU")
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
          <div style={{ margin: '1.5em 0' }} key={node.fields.slug}>
            <h3>
              <Link to={`/${node.fields.slug}`}>{title}</Link>
            </h3>
            <small style={{ display: 'block', margin: '0.3em 0' }}>
              {node.frontmatter.date} • {formatReadingTime(node.timeToRead)}
            </small>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        );
      })}
    </Layout>
  );
}

export default BlogIndex;
