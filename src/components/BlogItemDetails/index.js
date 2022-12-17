// Write your JS code here

import {Component} from 'react'

import './index.css'

class BlogItemDetails extends Component {
  state = {BlogDetails: {}}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match

    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)

    const UpdatedData = {
      id: data.id,
      imageUrl: data.image_url,
      content: data.content,
      topic: data.topic,
      title: data.title,
      author: data.author,
      avatarUrl: data.avatar_url,
    }

    this.setState({BlogDetails: UpdatedData})
  }

  render() {
    const {BlogDetails} = this.state
    const {title, avatarUrl, imageUrl, content, author} = BlogDetails
    return (
      <div className="blog-item-details-container">
        <h1 className="title-heading">{title}</h1>
        <div className="author-details">
          <img className="avatar-image" src={avatarUrl} alt={author} />
          <p>{author}</p>
        </div>
        <img className="blog-image" src={imageUrl} alt={title} />
        <p>{content}</p>
      </div>
    )
  }
}

export default BlogItemDetails
