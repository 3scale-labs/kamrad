import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import markdownTemplate from '../utils/markdownTemplate'

const simpleVar = "I'm a var!!"

const Template = ({
  data // this prop will be injected by the GraphQL query below.
}) => {
  const [todo, setTodo] = useState(null)
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  useEffect(() => {
    const getTodo = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      const todoData = await res.json()
      setTodo(todoData.title)
    }
    getTodo()
  }, [])
  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: markdownTemplate(html, {
                todo,
                simpleVar
              })
            }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
export default Template
