import React, {Fragment} from 'react'
import Card from './Card'
import {connect} from "react-redux";

import Timer from './Timer'
import {actionAddStackElement,
    actionDeleteStackElement,
    actionDeleteStackFirstElement,
    actionClearStackElements
} from "../../actions";
import {bindActionCreators} from "redux";
import { Redirect } from 'react-router'

class GamePage extends React.Component{
    constructor(props){
        super(props);

        this.state = {'countCards': '',
            'arrayInvertedElement': '',
            'remainingCards': '',
            'linkOnScorePage': false};
        this.setCountDivCard();
        this.setRandomInvertedElement();

        this.checkStackElements = this.checkStackElements.bind(this);
    }

    setCountDivCard(){

        let countDivCard;

        if(this.props.difficultType === "level_low")
            countDivCard = 10;
        else if (this.props.difficultType === "level_medium")
            countDivCard = 18;
        else
            countDivCard = 24;

        this.state.remainingCards = countDivCard;
        this.state.countCards = Math.pow(2, countDivCard - 1).toString(2).split('').map((i, j) => j);
    }

    setRandomInvertedElement(){
        let arrayInvertedElement = [],
            countTrue = this.state.countCards.length / 2,
            countFalse = countTrue;

        if(countTrue % 2 !== 0){
            countTrue++;
            countFalse--;
        }

        while(countTrue || countFalse ){

            let randomNum = Math.floor(Math.random() * (1 - 0 + 1));

            if(randomNum === 0 && countFalse > 0){
                arrayInvertedElement.push(false);
                countFalse--;
            }
            else if(randomNum === 1 && countTrue > 0){
                arrayInvertedElement.push(true);
                countTrue--;
            }
        }

        this.state.arrayInvertedElement = arrayInvertedElement;
    }

    deleteElements(array){

        for(let i = 0; i < array.length; i++){
            let delElement = document.getElementById(`${array[i][0]}`);
            delElement.parentElement.parentElement.removeChild(delElement.parentElement);
            this.setState({remainingCards: this.state.remainingCards - 1});
        }
        console.log(this.state.remainingCards);

        if(this.state.remainingCards === 0)
            this.finishGame()
    }

    saveResult(){
        fetch('https://mmg-score.herokuapp.com/',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    username: this.props.firstName,
                    email: this.props.email,
                    score: this.props.time
                })
            })
            .then(function(res){ console.log(res) })
            .catch(function(res){ console.log(res) })
    }

    finishGame(){
        this.saveResult();
        this.setState({linkOnScorePage:true});
    }

    converterStringToArray(){
        let arrBuf = String(this.props.stackElements).split(','),
            arrRez = [],
            arrPair = [];

        arrBuf.forEach((value, iter) =>{
            arrPair.push(value);
            if(iter % 2 !== 0){
                arrRez.push(arrPair);
                arrPair = [];
            }
        });
        return arrRez;
    }

    checkStackElements(){
        let stackElements = this.converterStringToArray();


        if(stackElements.length > 1){

            let len = stackElements.length;

            if(stackElements[len - 2][1] === stackElements[len - 1][1]){

                let array = [stackElements[len - 2], stackElements[len - 1]];

                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        this.deleteElements(array);
                        resolve();
                    }, 3000)
                });

                this.props.clearStackElements();
            }
            else
                this.props.deleteStackFirstElement();
        }
    }

    render(){
        if(this.state.linkOnScorePage)
            return <Redirect to="/result"/>;
        else {
            return(
                <Fragment>
                    <div className="display">
                        <div className="wrapper">
                            <Timer/>
                            <div  className="content content_game" id="content" onClick={this.checkStackElements}>
                                {this.state.countCards.map(
                                    (key) => <Card key={key} id={key} mirrorReflection={this.state.arrayInvertedElement[key]}/>
                                )}
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
        }
    }
}

const putStateToProps = (state) => {
    return{
        difficultType: state.gameSettings.difficultType,
        stackElements: state.stackElements.stackElements,
        firstName: state.formRegistration.firstName,
        email: state.formRegistration.email,
        time: state.timeGame.timeGame
    };
};

const putActionsToProps = (dispatch) => {
    return{
        addStackElement: bindActionCreators(actionAddStackElement, dispatch),
        deleteStackElement: bindActionCreators(actionDeleteStackElement, dispatch),
        deleteStackFirstElement: bindActionCreators(actionDeleteStackFirstElement, dispatch),
        clearStackElements: bindActionCreators(actionClearStackElements, dispatch)
    };
};

const WrapperGamePage = connect(putStateToProps, putActionsToProps)(GamePage);

export default WrapperGamePage;