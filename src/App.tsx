import React, { useState, useEffect } from 'react';
import { UserContext, context, IMsjObj } from './Store';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory  } from "react-router-dom";
import {Box, Input, Button} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import User1 from './Components/User1';
import User2 from './Components/User2';
import Nav from './Components/Nav';
import './App.scss';

function App() {
  const [ msgList, setMsgList ] = useState<IMsjObj[]>(context)
  
  useEffect(() => {
    // alert("You can use also responsive(phone) page");
  }, []);

  const resetMessages = () => {
    setMsgList([]);   
    console.log('reseted');
     
  }
  
  return (
    <Router>
      <Button disabled={ msgList.length > 0 ? false : true } 
              fullWidth={true} 
              variant="contained" 
              color="primary" 
              onClick={resetMessages}>
                <DeleteIcon/>
                Reset Messages
      </Button>
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
