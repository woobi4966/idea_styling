import {Routes, Route} from 'react-router-dom';

import Main from './pages/Main';
import PrivacyPolicy from './pages/PrivacyPolicy';
// import StartPage from './pages/StartPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
    </Routes>
  );
}

export default App;
