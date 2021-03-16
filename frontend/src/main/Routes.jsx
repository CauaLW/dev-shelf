import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/template/Home'
import Register from '../components/template/Register'
import Alter from '../components/template/Alter'

const Routes = props => {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/cadastrar" component={Register}></Route>
            <Route path="/alterar" component={Alter}></Route>
            <Redirect from="*" to="/"></Redirect>
        </Switch>
    )
}

export default Routes