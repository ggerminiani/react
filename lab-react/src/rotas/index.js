import React,{Component} from "react"
import {Route, Switch} from "react-router-dom"

import Compromisso from "../"

export default class Rotas extends Component{

    render(){
        return(
            <switch>
                <Route path="/Compromisso" Component={Compromisso}></Route>
                <Route path="*" Component={Compromisso}></Route>
            </switch>
        )
    }

}