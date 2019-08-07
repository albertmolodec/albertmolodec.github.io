// Гайд: https://www.gatsbyjs.org/docs/mdx/programmatically-creating-pages/
import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from "@mdx-js/react"

function BlogPostMdxTemplate({ data: { mdx } }) {
  return (
    <div>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXProvider>{mdx.body}</MDXProvider>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
      body
    }
  }
`;

export default BlogPostMdxTemplate;
