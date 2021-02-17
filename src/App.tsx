import React, { useState, useEffect } from 'react';
import { UserContext, context, msjObj } from './Store';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory  } from "react-router-dom";
import {Box, Input, Button} from '@material-ui/core'
import User1 from './Components/User1';
import User2 from './Components/User2';
import Nav from './Components/Nav';
import './App.scss';

function App() {
  const [ msgList, setMsgList ] = useState<msjObj[]>(context)
  
  useEffect(() => {
    alert("You can use also responsive(phone) page");
  }, []);
  
  return (
    <Router>
      <Nav/>
      <UserContext.Provider value={{msgList, setMsgList}}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/user1"/>
          </Route>  
          <Route path = "/user1">
            <User1/>
          </Route>
          <Route path = "/user2">
            <User2/>
          </Route>
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
