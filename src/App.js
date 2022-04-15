import {Routes, Route} from 'react-router-dom';

import Main from './pages/Main';
import StartPage from './pages/StartPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<StartPage/>}/>
      <Route path='/main' element={<Main/>}/>
    </Routes>
  );
}

export default App;
