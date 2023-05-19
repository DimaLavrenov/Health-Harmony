import React, { useState } from 'react'
import style from "./Favorites.module.css"

function Favorites(props) {    
  const [fav, setFav] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:3000/posts")
      .then(response => response.json())
      .then(data => setFav(data))
    console.log(fav)
    props.setisActive(!props.isActive)
  }

  return (
    <div>
      <div onClick={fetchData} className={style.container}>
        Favorites
      </div>
    </div>
  )
}

export default Favorites