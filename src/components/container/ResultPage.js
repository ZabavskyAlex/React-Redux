import React, {Fragment} from 'react'
import {connect} from "react-redux";

import {bindActionCreators} from "redux";
import {actionChangeAllGameResults} from "../../actions";
import {resultsGameSelectors} from '../../selectors'


class ResultPage extends React.Component{

    constructor(props){
        super(props);

        this.getAllResults();
    }

    getAllResults(){
        let that = this;
        fetch('https://mmg-score.herokuapp.com/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'GET'
        }, that).then(function(response) {
            return response.json();
        }).then(function(data) {
            that.props.changeResultsGame(data.result);
        });
    }

    render(){
        return(
            <div className="display">
                <div className="wrapper">
                    <div  className="content" id="content">
                        <div className="content congratulations" id="content">
                            <div>
                                Congratulations, you won!
                            </div>
                            <div className="your_score">
                                <div>Your time: {this.props.time} s</div>
                            </div>

                            <div>Best players:</div>

                            {this.props.resultBestPlayers.map((rez)=>{
                                return (
                                    <div className="player_score">
                                        <div>{rez.username}</div>
                                        <div>{`${rez.score} s`}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const putActionsToProps = (dispatch) => {
    return{
        changeResultsGame: bindActionCreators(actionChangeAllGameResults, dispatch)
    };
};


const WrapperResultPage = connect(resultsGameSelectors, putActionsToProps)(ResultPage);

export default WrapperResultPage;
