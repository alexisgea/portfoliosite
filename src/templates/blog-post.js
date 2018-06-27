import { DiscussionEmbed } from "disqus-react";
import get from "lodash/get";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import React from "react";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const postId = post.id.match(/\/posts\/(.*?)\//)[1];
    const siteTitle = get(this.props, "data.site.siteMetadata.title");
    const { previous, next } = this.props.pathContext;

    return (
      <div id="main" className="wrapper style1">
        <div className="container">
          <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
          <h2>{post.frontmatter.title}</h2>
          <p>
            <em>{post.frontmatter.date}</em>
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />

          <DiscussionEmbed
            shortname="alexisgiard"
            config={{
              url: `https://www.alexisgiard.com/${postId}`,
              identifier: postId,
              title: post.frontmatter.title
            }}
          />

          <hr />

          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              listStyle: "none",
              padding: 0
            }}
          >
            {previous && (
              <li>
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              </li>
            )}

            {next && (
              <li>
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
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
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
