import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './pages/About';
import Account from './pages/Account';
import Borrowed from './pages/Borrowed';
import Ejurnal from './pages/Ejurnal';
import History from './pages/History';
import Home from './pages/Home';
import LoanHistory from './pages/LoanHistory';
import Profile from './pages/Profile';


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path='/history' element={<History />} />
      <Route path="/ejurnal" element={<Ejurnal />} />
      <Route path="/borrowed" element={<Borrowed />} />
      <Route path="/loanhistory" element={<LoanHistory />} />
      <Route path="/account" element={<Account />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;