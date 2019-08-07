import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from '~src/layouts/Layout';
import SEO from '~src/components/SEO';
import formatReadingTime from '~src/helpers/formatReadingTime';

function BlogIndex() {
  const { allMarkdownRemark, allMdx } = useStaticQuery(
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
        allMdx {
          edges {
            node {
              frontmatter {
                title
              }
              excerpt(pruneLength: 20)
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  );

  const posts = allMarkdownRemark.edges;
  const postsMDX = allMdx.edges;

  return (
    <Layout>
      <SEO
        title="Все посты"
        keywords={[`блог`, `gatsby`, `javascript`, `react`]}
      />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <div style={{ marginTop: '2rem' }} key={node.fields.slug}>
            <h3>
              <Link to={`/${node.fields.slug}`}>{title}</Link>
            </h3>
            <small>
              {node.frontmatter.date} • {formatReadingTime(node.timeToRead)}
            </small>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        );
      })}
      
      <h2 style={{ marginTop: '20px' }}>MDX test</h2>
      {postsMDX.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <div style={{ marginTop: '2rem' }} key={node.fields.slug}>
            <h3>
              <Link to={`/${node.fields.slug}`}>{title}</Link>
            </h3>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        );
      })}
    </Layout>
  );
}

export default BlogIndex;
