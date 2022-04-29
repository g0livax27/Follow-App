import './App.css';
import { useState, useEffect } from 'react';
import bootstrap from 'bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import BillsPage from '../BillsPage/BillsPage';

function App() {
  const [ user, setUser ] = useState(null);
  const [ bills, setBills ] = useState([]);


  useEffect(() => {
    (async() => {
      try{
        const response = await fetch('http://localhost:3001/api/bills');
        const data = await response.json();
        setBills(data);
      }catch(err){
        console.log(err);
      }
    })()
  }, []);

  return(
    <main className="App">
      <Routes>
        <Route path='/expenses' element={<MainPage/>}/>
        <Route path='/bills' element={<BillsPage bill={bills}/>}/>
      </Routes>
    </main>
  )
};

export default App;