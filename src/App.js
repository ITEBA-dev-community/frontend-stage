import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Borrowed from './pages/Borrowed';
import Ejurnal from './pages/Ejurnal';
import History from './pages/History';
import Home from './pages/Home';
import LoanHistory from './pages/LoanHistory';


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path='/history' element={<History />} />
      <Route path="/ejurnal" element={<Ejurnal />} />
      <Route path="/borrowed" element={<Borrowed />} />
      <Route path="/loanhistory" element={<LoanHistory />} />
    </Routes>
  );
}

export default App;