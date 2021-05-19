const axios = require('axios')
exports.onPreInit = () => console.log('Loaded gatsby-fetch-api plugin')

// constants for your GraphQL user and Author types
const USER_NODE_TYPE = `User`

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
  getNodesByType
}) => {
  const { createNode } = actions

  const res = await axios.get('http://jsonplaceholder.typicode.com/users')

  // loop through data and create Gatsby nodes
  res.data.forEach((user) =>
    createNode({
      ...user,
      id: createNodeId(`${USER_NODE_TYPE}-${user.id}`),
      parent: null,
      children: [],
      internal: {
        type: USER_NODE_TYPE,
        content: JSON.stringify(user),
        contentDigest: createContentDigest(user)
      }
    })
  )

  return
}
