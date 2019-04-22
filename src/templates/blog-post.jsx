import React from 'react';
import { Link, graphql } from 'gatsby';

import SEO from '~src/components/SEO';
import Layout from '~src/layouts/Layout';
import formatReadingTime from '~src/helpers/formatReadingTime';

function BlogPostTemplate({ pageContext, data }) {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        keywords={[`блог`, `gatsby`, `javascript`, `react`]}
      />
      <h1>{post.frontmatter.title}</h1>
      <p>
        {post.frontmatter.date}
        {` • ${formatReadingTime(post.timeToRead)}`}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr />

      <ul>
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

export const pageQuery = graphql`
  query BlogPostBySlugAmp($slug: String!) {
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

export default BlogPostTemplate;
