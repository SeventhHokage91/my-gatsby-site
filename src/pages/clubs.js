import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const ClubsPage = ({ data }) => {
  return (
    <Layout pageTitle="Clubs">
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`
export default ClubsPage