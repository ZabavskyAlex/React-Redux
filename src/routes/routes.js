import React from "react";
import { Switch, Route, BrowserRouter} from "react-router-dom"

import HomePage from '../components/container/HomePage'
import NotFound from '../components/container/NotFoundPage'
import GamePage from '../components/container/GamePage'
import ResultPage from '../components/container/ResultPage'


export default class PathMap extends React.Component{
    render(){
        return(
            <BrowserRouter >
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/game" component={GamePage}/>
                    <Route path="/result" component={ResultPage}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        )
    }
}