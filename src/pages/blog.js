import get from "lodash/get";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import projects from "../projects";
import ProjectCard from "../components/ProjectCard";
import React from "react";

class Blog extends React.Component {
  render() {
    const title = get(this, "props.data.site.siteMetadata.title");
    const subTitle = get(this, "props.data.site.siteMetadata.subTitle");
    const posts = get(this, "props.data.allMarkdownRemark.edges");

    return (
      <div id="main" className="wrapper style1">
        <div className="container">
          <Helmet title={title} />
          <section>
            <h2>Blog</h2>
            {posts.map(({ node }) => {
              const title = get(node, "frontmatter.title") || node.fields.slug;
              return (
                <div key={node.fields.slug} className="blog-post">
                  <h3>
                    <Link to={node.fields.slug}>{title}</Link>
                  </h3>
                  <em>{node.frontmatter.date}</em>
                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </div>
              );
            })}
          </section>
        </div>
      </div>
    );
  }
}

export default Blog;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        subTitle
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
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;
