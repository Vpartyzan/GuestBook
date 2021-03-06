import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Profile from './Profile/Profile';
import Comments from './Comments/Comments';
import { Container } from '@material-ui/core';
import Header from './Header/Header';

function App(props) {  
  return (
    <BrowserRouter>      
      <div className="App">
        <Header />
        <Container fixed>                    
          <Profile state={props.state} dispatch={props.dispatch} />
          <Comments comments={props.state}  />
        </Container>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
