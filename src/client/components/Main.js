import React from 'react'
import { Link } from 'react-router'

const Main =(props)=> {

    return(
        <div>
            <h1>
                <Link to="/">redux-base</Link>
                {props.children && React.cloneElement( props.children, props ) }
            </h1>
        </div>
    )
}

export default Main;
