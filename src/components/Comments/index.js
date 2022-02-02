import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'
import './index.css'

// const initialContainerBackgroundClassNames = [
//   'amber',
//   'blue',
//   'orange',
//   'emerald',
//   'teal',
//   'red',
//   'light-blue',
// ]
const firstlist = []

// Write your code here
class Comments extends Component {
  state = {initiallist: firstlist, name: '', comment: ''}

  name = e => {
    this.setState({name: e.target.value})
  }

  comment = e => {
    this.setState({comment: e.target.value})
  }

  liked = id => {
    this.setState(prevstate => ({
      initiallist: prevstate.initiallist.map(eachlist => {
        if (eachlist.id === id) {
          return {...eachlist, isliked: !eachlist.isliked}
        }
        return eachlist
      }),
    }))
  }

  delete = id => {
    this.setState(prevstate => ({
      initiallist: prevstate.initiallist.filter(eachlist => eachlist.id !== id),
    }))
  }

  addcomment = () => {
    const {name, comment} = this.state
    if (
      name.replace(/ /g, '').length === 0 ||
      comment.replace(/ /g, '').length === 0
    ) {
      return
    }
    const newlist = {
      id: uuidv4(),
      name,
      comment,
      time: new Date(),
      isliked: false,
    }
    this.setState(prevstate => ({
      initiallist: [...prevstate.initiallist, newlist],
      name: '',
      comment: '',
    }))
  }

  render() {
    const {initiallist, name, comment} = this.state

    return (
      <div className="container">
        <h1 className="heading">Comments</h1>
        <div className="innercontainer">
          <div className="inputcontainer">
            <p className="para">Say Something about 4.0 Technologies</p>
            <input
              type="text"
              placeholder="Your Name"
              className="inputelement"
              value={name}
              onChange={this.name}
            />
            <textarea
              className="textareaelement"
              placeholder="Your Comment"
              cols="39"
              rows="10"
              value={comment}
              onChange={this.comment}
            />
            <button type="button" className="button" onClick={this.addcomment}>
              Add Comment
            </button>
          </div>
          <div className="imagecontainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="image"
              alt="comments"
            />
          </div>
        </div>
        <div className="commentsdiv">
          <div className="countdiv">{initiallist.length}</div>
          <p className="commentspara">Comments</p>
        </div>
        <ul className="ulcontainer">
          {initiallist.map(eachlist => (
            <CommentItem
              list={eachlist}
              key={eachlist.id}
              liked={this.liked}
              deleted={this.delete}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
