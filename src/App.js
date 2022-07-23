import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Ejurnal from './pages/Ejurnal';
import History from './pages/History';
import Home from './pages/Home';


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path='/history' element={<History />} />
      <Route path="/ejurnal" element={<Ejurnal />} />
    </Routes>
  );
}

export default App;