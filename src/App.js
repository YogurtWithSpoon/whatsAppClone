import './App.scss';
import SideBar from './components/sidebar/sidebar'
import Chat from './components/chat/chat'

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
