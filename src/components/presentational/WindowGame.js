import React, {Fragment} from 'react'
import GameSettings from "./GameSettings";

const WindowGame = ({props}) => {
    return(
        <Fragment>
            <div className="display">
                <div className="wrapper">
                    {props.GameSettings}
                    <div  className="content" id="content">

                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default WindowGame;