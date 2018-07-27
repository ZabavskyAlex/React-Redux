import React, {Fragment} from 'react'
import {connect} from "react-redux";
import {actionAddStackElement, actionDeleteStackElement} from "../../actions";
import {bindActionCreators} from "redux";


class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {openBack:''};

        this.onClick = this.onClick.bind(this);
    }

    onClick(evt){
        this.setState({openBack: 'open_back'});
        this.props.addStackElement([this.props.id, (this.props.mirrorReflection ? true: false)]);

        new Promise((resolve, reject) => {
            setTimeout(() => {
                this.setState({openBack: ''});
                this.props.deleteStackElement(this.props.id);
                resolve();
            }, 2000)
        });
    }

    render(){
        let mirrorReflectionClassStyle = '';
        if(this.props.mirrorReflection)
            mirrorReflectionClassStyle = 'mirror_reflection';
        return(
            <Fragment>
                <div className={`flip-container ${this.props.difficultType}`} key={this.props.key} onClick={this.onClick}>
                    <div className={`${this.state.openBack} flipper`}>
                        <div className={`${this.props.difficultType} front`}  id={this.props.id}/>
                        <div className={`${this.props.difficultType} ${this.props.typeCard} back ${mirrorReflectionClassStyle}`}/>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const putStateToProps = (state) => {
    return{
        difficultType: state.gameSettings.difficultType,
        typeCard: state.gameSettings.cardType,
        stackElements: state.stackElements
    };
};

const putActionsToProps = (dispatch) => {
    return{
        addStackElement: bindActionCreators(actionAddStackElement, dispatch),
        deleteStackElement: bindActionCreators(actionDeleteStackElement, dispatch)
    };
};

const WrapperCard = connect(putStateToProps, putActionsToProps)(Card);

export default WrapperCard;