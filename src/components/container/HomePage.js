import React, {Fragment} from "react";
import {connect} from 'react-redux'

import GameRules from '../presentational/GameRules'
import GameSettings from './GameSettings'
import BtnStartNewGame from '../presentational/Button'
import FormRegistration from './FormRegistration'
import {settingsSelector} from '../../selectors'


class HomePage extends React.Component {
    constructor(props){
        super(props);

        this.startCheck = this.startCheck.bind(this);
    }

    startCheck(){
        if(this.props.difficultType && this.props.typeCard)
            document.getElementById('modal_start_game').classList.add('modal_open');
        else
            alert('Please make a choice cards and difficult game');
    }

    render(){
       return (
           <Fragment>
               <div className="display">
                   <div className="wrapper">
                       <GameSettings/>
                       <BtnStartNewGame onClick={this.startCheck}/>
                       <div  className="content" id="content">
                           <GameRules/>
                       </div>
                   </div>
               </div>
               <FormRegistration/>
           </Fragment>
       )
    }
}

const WrapperHomePage = connect(settingsSelector, null)(HomePage);

export default WrapperHomePage;

