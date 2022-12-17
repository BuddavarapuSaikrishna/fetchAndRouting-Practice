// Write your JS code here

import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {BlogDetails} = props
  const {id, topic, title, imageUrl, avatarUrl, author} = BlogDetails
  return (
    <li>
      <Link className="item-link" to={`/blogs/${id}`}>
        <div className="Blog-list-items-container">
          <img className="Blog-image" src={imageUrl} alt={author} />
          <div className="Blog-details-container">
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="author-details">
              <img className="avatar-image" src={avatarUrl} alt={author} />
              <p className="author">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
