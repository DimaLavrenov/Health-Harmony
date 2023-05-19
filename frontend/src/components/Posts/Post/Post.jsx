import React, { useEffect, useState } from 'react'
import style from "./Post.module.css"

function Post(props) {
  const [lox, setLox] = useState(props.liked);

  const newUser = {
    id: props.id,
    title: props.title,
    body: props.body,
    favorite: lox
  }

  useEffect(() => {

    if(lox){
      const hello = () => {
        fetch(`http://localhost:3000/posts/${props.id + 1}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser)
        })
      }
      hello()

    } else{
      const bye = () => {
        fetch(`http://localhost:3000/posts/${props.id + 1}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })
      }
      bye()
    }
  }, [lox])

  const test = () => {
    if(lox){
      setLox(false)
    } 
    else{
      setLox(true)
    }
  }

  return (
    <div className={style.item}>
        <div className={style.title}>
            <h4>{props.title}</h4>
            {
              (lox) ? <i onClick={test} className="fa fa-heart" style={{color: 'red'}}></i> : <i onClick={test} className="fa fa-heart" style={{color: 'black'}}></i>
            }
        </div>
        <div className={style.body}>
            <p>{props.body}</p>
        </div>
    </div>
  )
}

export default Post