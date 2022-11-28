import * as React from "react"
import { Link } from "gatsby"

import { BlogCard } from "../components/blog-card"

const PaginatedTemplate = ({ pageContext }) => {
  let { pageCount, group, index, first, last } = pageContext
  const previousIndex = index - 1
  const nextIndex = index + 1

  const previousPageUrl =
    previousIndex === 1 ? "/blog" : `/blog/${previousIndex}`
  const nextPageUrl = `/blog/${nextIndex}`

  console.log("pageCount", pageCount)
  console.log("group", group)

  return (
    <>
      <section>
        <div className="posts">
          {group.map((post, idx) => (
            <BlogCard key={idx} post={post} />
          ))}
        </div>
        <nav className="pagination">
          {!first && (
            <Link style={{ "margin-right": "8px" }} to={previousPageUrl}>
              Previous page
            </Link>
          )}
          {Array(pageCount)
            .fill(true)
            .map((count, idx) => (
              <Link
                to={`/blog/${idx === 0 ? "" : idx + 1}`}
                style={{ margin: "0 4px" }}
                key={idx + 1}
              >
                {idx + 1}
              </Link>
            ))}
          {!last && (
            <Link style={{ "margin-left": "8px" }} to={nextPageUrl}>
              Next page
            </Link>
          )}
        </nav>
      </section>
    </>
  )
}

export default PaginatedTemplate
