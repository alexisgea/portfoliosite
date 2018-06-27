import get from "lodash/get";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import React from "react";

class Blog extends React.Component {
  render() {
    const title = get(this, "props.data.site.siteMetadata.title");
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
                <Link to={node.fields.slug}>
                  <div key={node.fields.slug} className="blog-post">
                    {node.frontmatter.image && (
                      <img
                        src={node.frontmatter.image.childImageSharp.resize.src}
                        alt={node.frontmatter.title}
                      />
                    )}
                    <div className="blog-meta-info">
                      <h3>{title}</h3>
                      <em>{node.frontmatter.date}</em>
                      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                    </div>
                  </div>
                </Link>
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
            image {
              childImageSharp {
                resize(width: 590) {
                  src
                  height
                  width
                }
              }
            }
            title
          }
        }
      }
    }
  }
`;
