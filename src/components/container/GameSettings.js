import React, {Fragment} from 'react'

import GameSettingsView from '../presentational/GameSettings'
import {actionChangeDifficultType, actionChangeCardType} from "../../actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";


class GameSettings extends React.Component{
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(evt){
        let value = evt.target.className;
        switch (evt.target.name){
            case 'card_type':{
                this.props.changeCardType(value);
                break
            }
            case 'difficult_type':{
                this.props.changeDifficultType(value);
                break
            }
        }
    }

    render(){
        return(
            <GameSettingsView onClick={this.onClick}/>
        )
    }
}

const putActionsToProps = (dispatch) => {
    return{
        changeCardType: bindActionCreators(actionChangeCardType, dispatch),
        changeDifficultType: bindActionCreators(actionChangeDifficultType, dispatch)
    };
};

const WrapperGameSettings = connect(null, putActionsToProps)(GameSettings);

export default WrapperGameSettings;