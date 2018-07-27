import React, {Fragment} from 'react'

const GameRules = () => {
    return(
       <Fragment>
            <h5>How to play:</h5>
            <p>Memory is a counter game where the object is to find pairs</p>
            <p>When the game begins, all pictures are hidden</p>
            <h5>To Play:</h5>
            <ol>
                <li>Select two cards to try to match the pictures</li>
                <li>If you match the pictures you can go again</li>
                <li>If they don't match it is the computer turn them</li>
                <li>The player that finds all pairs wins!</li>
                <li>Have Fun!</li>
            </ol>
        </Fragment>
    )
};

export default GameRules;