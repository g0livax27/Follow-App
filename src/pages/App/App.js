import './App.css';
import { useState, useEffect } from 'react';
import bootstrap from 'bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import BillsPage from '../BillsPage/BillsPage';

function App() {
  const [ user, setUser ] = useState(null);
  const [ bills, setBills ] = useState([]);

  useEffect(() => {
    (async() => {
      try{
        const response = await fetch('http://localhost:3001/api/bills/');
        const data = response.json();
        setBills(data);
      }catch(err){
        console.log(err);
      }
    })()
  }, []);

  return(
    <main className="App">
      <Routes>
        <Route path='/expenses' element={<HomePage/>}/>
        <Route path='/bills' element={<BillsPage/>}/>
      </Routes>
    </main>
  )
};

export default App;