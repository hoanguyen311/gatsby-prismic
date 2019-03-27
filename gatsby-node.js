const path = require('path');
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allPrismicBlog {
        edges {
          node {
            uid
            id
          }
        }
      }
    }
  `);
  const templage = path.resolve('./src/templates/post.jsx');

  pages.data.allPrismicBlog.edges.forEach((edge) => {
    createPage({
      path: `/${edge.node.uid}`,
      component: templage,
      context: {
        uid: edge.node.uid
      }
    });
  })
}