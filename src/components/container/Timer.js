import React, {Fragment} from 'react'
import {connect} from "react-redux";
import {actionChangeTimeGame} from "../../actions";
import {bindActionCreators} from "redux";

class Timer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date(), timer:''};
    }

    componentDidMount() {
        this.tick();
        this.timerId = setInterval(
            ()=> this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            timer: this.convertTime(new Date() - this.state.date)
        });
    }

    convertTime(time_game){
        time_game = Math.floor(time_game / 1000);
        this.props.changeTimeGame(time_game);
        if(time_game < 60)
            return `${time_game} s`;
        else if(time_game < 3600){
            let tM = Math.floor(time_game / 60),
                tS = time_game - tM * 60;
            return `${tM} m ${tS} s`;
        }
        else {
            let tH = Math.floor(time_game / 3600),
                tM = Math.floor((time_game - tH * 3600) / 60 ),
                tS = time_game -tH *3600 - tM * 60;
            return `${tH} h ${tM} m ${tS} s`;
        }
    }

    render() {
        return (
            <Fragment>
                <div id="timer" className="timer">{`Time: ${this.state.timer}`}</div>
            </Fragment>
        );
    }
}


const putStateToProps = (state) => {
    return{
        timeGame: state.timeGame
    };
};

const putActionsToProps = (dispatch) => {
    return{
        changeTimeGame: bindActionCreators(actionChangeTimeGame, dispatch)
    };
};

const WrapperTimer = connect(putStateToProps, putActionsToProps)(Timer);

export default WrapperTimer;

