import { Link } from "gatsby"
import React from "react"

export const BlogCard = ({ post }) => {
  return (
    <div className="post">
      <h3>{post?.frontmatter?.title}</h3>
      <hr />
      <span>{post?.frontmatter?.description}</span>
      <br />
      <date>{post?.frontmatter?.date}</date>
      <br />
      <Link to={post?.fields?.slug}>check</Link>
    </div>
  )
}
