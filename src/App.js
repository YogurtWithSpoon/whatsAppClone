import './App.scss';
import React from 'react';
import SideBar from './components/sidebar/sidebar'
import Chat from './components/chat/chat'
import Login from './components/login/login';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {useStateValue} from './datalayer/stateprovider'

function App() {
  const [{userName}, dispatch ] = useStateValue();
  
  return (
    <div className="app">
      {!userName ? (
        <Login />
      ) : ( 
        <div className="app__body">
        <Router>
              <SideBar />
              <Switch>
                <Route path="/rooms/:roomId">
                  <Chat />
                </Route>
              </Switch>
        </Router>
      </div>
      )}
    </div>
  );
}

export default App;
