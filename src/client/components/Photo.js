import React from 'react'
import { Link } from 'react-router'
import Styles from '../styles/styles.scss'

const Photo =(props)=> {
    return(
        <div className="container">
            <div>
                <Link to={`/view/${props.post.code}`} >
                    <img className="photo" src={props.post.display_src} alt={props.post.caption} />
                </Link>
                <button onClick={props.increment.bind(null, props.i)} className="button">{props.post.likes}</button>
            </div>
        </div>
    )
}

export default Photo
