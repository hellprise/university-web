import React from "react"
import { BlogCard } from "./blog-card"

export const RandomPosts = ({ posts }) => {
  let articles = posts

  function random(n) {
    return Math.floor(Math.random() * Math.floor(n))
  }

  function shuffle(arr) {
    for (let i = 0; i < arr.length; i++) {
      let j = random(arr.length)
      let k = random(arr.length)
      let t = arr[j]
      arr[j] = arr[k]
      arr[k] = t
    }
    return arr
  }

  articles = shuffle(articles)
  return (
    <div className="random-posts">
      {articles.map((post, index) => (
        <BlogCard post={post} key={post?.id || index} />
      ))}
    </div>
  )
}
