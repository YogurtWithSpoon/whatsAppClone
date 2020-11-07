import './App.scss';
import SideBar from './components/sidebar/sidebar'
import Chat from './components/chat/chat'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
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
    </div>
  );
}

export default App;
