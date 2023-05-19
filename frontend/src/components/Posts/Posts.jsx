import React, { useEffect, useState } from 'react'
import style from "./Posts.module.css"
import Post from './Post/Post'

function Posts(props) {

    const [posts, setPosts] = useState([]);

    const fetchData = () =>{
        fetch("http://localhost:3000/posts")
            .then(response => response.json())
            .then(data => setPosts(data))
    }

    useEffect(() => {
        fetchData();
    }, []);

    let testDrive = posts.filter((val) => {
        if(props.searchTerm === ''){
        return val
        } else if(val.title.toLowerCase().includes(props.searchTerm.toLocaleLowerCase())){
        return val;
        }
    })

    useEffect(() => {
        const delayDebouceFn = setTimeout(() => {
            testDrive = posts.filter((val) => {
                if(props.searchTerm === ''){
                return val
                } else if(val.title.toLowerCase().includes(props.searchTerm.toLocaleLowerCase())){
                return val;
                }
            })
        }, 1000)

        return () => clearTimeout(delayDebouceFn)
    }, [props.searchTerm])

    return (
    <div className={style.container}>
        <ul>
            {

                (!props.isActive) ?

                testDrive.map((val, key) => {
                    return(
                    <Post key={key} id={key} title={val.title} body={val.body} liked={val.favorite}/>
                    )
                })

                :

                testDrive.map((val, key) => {
                    if(val.favorite){
                        return(
                            <Post key={key} id={key} title={val.title} body={val.body} liked={val.favorite}/>
                        )
                    }
                }) 
            }
        </ul>
    </div>
    )
}

export default Posts