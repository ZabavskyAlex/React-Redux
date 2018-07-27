import React, {Fragment} from 'react'

function GameSettings({onClick}){
        return(
                <div className="settings" id="settings">
                    <div className="cards">
                        <h6>Skirt Cards</h6>
                        <label><input onClick={onClick} name="card_type" type="radio" className="smile"/><div></div></label>
                        <label><input onClick={onClick} name="card_type" type="radio" className="car"/><div></div></label>
                        <label><input onClick={onClick} name="card_type" type="radio" className="minion"/><div></div></label>
                    </div>
                    <div className="difficult">
                        <h6>Game Difficulty</h6>
                        <label><input onClick={onClick} type="radio" name="difficult_type" className="level_low"/><div>Low (5 х 2)</div></label>
                        <label><input onClick={onClick} type="radio" name="difficult_type" className="level_medium"/><div>Medium (6 x 3)</div></label>
                        <label><input onClick={onClick} type="radio" name="difficult_type" className="level_hight"/><div>Hight (8 x 3)</div></label>
                    </div>
                </div>
        )
};

export default GameSettings;