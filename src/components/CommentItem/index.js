// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {list, liked, deleted} = props
  const {id, name, comment, time, isliked} = list
  const clicklikeimage = () => {
    liked(id)
  }
  const deleteitem = () => {
    deleted(id)
  }
  const source = isliked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const addclass = isliked ? 'addcolor' : ''
  const posteddate = formatDistanceToNow(time)

  return (
    <li className="licontainer">
      <div className="uppercontainer">
        <div className="profilepic">{name.replace(/ /g, '')[0]}</div>
        <div className="commentnamecontainer">
          <p className="commentname">
            {name}
            <span className="timeposted">{`${posteddate} ago`}</span>
          </p>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="lowercontainer">
        <div className="likeimagecontainer">
          <img
            src={source}
            alt="like"
            className="likeimage"
            onClick={clicklikeimage}
          />
          <span className={`like ${addclass}`}>Like</span>
        </div>

        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
          className="delete"
          onClick={deleteitem}
        />
      </div>
    </li>
  )
}
export default CommentItem
