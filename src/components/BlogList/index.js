// Write your JS code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const UpdatedData = data.map(eachItem => ({
      author: eachItem.author,
      id: eachItem.id,
      avatarUrl: eachItem.avatar_url,
      imageUrl: eachItem.image_url,
      title: eachItem.title,
      topic: eachItem.topic,
    }))

    this.setState({blogsList: UpdatedData, isLoading: false})
  }

  render() {
    const {blogsList, isLoading} = this.state
    return (
      <div className="BlogList-container" testid="loader">
        {isLoading ? (
          <Loader type="TailSpin" color="#000BFF" width={50} height={50} />
        ) : (
          <ul className="BlogList-unOrderList-container">
            {blogsList.map(eachBlog => (
              <BlogItem key={eachBlog.id} BlogDetails={eachBlog} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
