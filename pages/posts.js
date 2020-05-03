// Import dependencies
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import Link from 'next/link'

// Import components
import Navigation from '../components/Navigation'

// Extend React.component so that we can set our API data AND render our component
export default class extends Component {

  // Resolve promise and set initial props.
  static async getInitialProps () {

    // Make request for posts.
    const response = await axios.get( 'http://the-trekkers-hymn.local/wp-json/wp/v2/posts')

    // Return response to posts object in props.
    return {
      posts: response.data
    }
  }

  render() {
    return (
      <Fragment>
        <Navigation/>
        <h1>Our Posts Page!</h1>
        <ul>
          {
            this.props.posts.map( post => {
              return (
                <li key={ post.id }>
                  <Link href={ `/posts/${ post.slug }` }>
                      <a href={ `/posts/${ post.slug }` }>
                          { post.title.rendered }
                      </a>
                  </Link>
              </li>
              )
            })
          }
        </ul>
      </Fragment>
    )
 }
}