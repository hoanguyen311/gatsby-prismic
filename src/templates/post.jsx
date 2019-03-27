import React from 'react';
import { graphql } from 'gatsby';

export default ({ data: { prismicBlog } }) => {
  const { data } = prismicBlog;
  return (
    <>
      <h1>{data.title.text}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
    </>
  );
};

export const query = graphql`
  query PostBySlug($uid: String!) {
    prismicBlog(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
  }
`;