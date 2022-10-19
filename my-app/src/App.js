import './App.css';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widges from './widges';

function App() {
  return (
    <div className='App'>
      {/* sidebar */}
     <Sidebar/>
      {/* feed */}
      <Feed/>
       {/* widges */}
       <Widges/>
    </div>
  );
}

export default App;
