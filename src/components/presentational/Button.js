import React, {Fragment} from 'react'

const Button = ({onClick}) => {
    return(
        <Fragment>
            <button onClick={onClick}>New Game</button>
        </Fragment>
    )
};

export default Button;