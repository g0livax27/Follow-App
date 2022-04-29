import './App.css';
import { useState, useEffect } from 'react';
import bootstrap from 'bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import ListsPage from '../ListPage/ListPage';
import BillsPage from '../BillsPage/BillsPage';
import WishListPage from '../WishListPage/WishListPage';

function App() {
  const [ user, setUser ] = useState(null);
  const [ expenses, setExpenses ] = useState([]);


  useEffect(() => {
    (async() => {
      try{
        const response = await fetch('http://localhost:3001/api/expenses');
        const data = await response.json();
        setExpenses(data);
      }catch(err){
        console.log(err);
      }
    })()
  }, []);

  return(
    <main className="App">
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/:month' element={<ListsPage expenses={expenses}/>}></Route>
        <Route path='/:month/bills' element={<BillsPage expenses={expenses}/>}/>
        <Route path='/:month/wishlists' element={<WishListPage item={expenses}/>}></Route>
      </Routes>
    </main>
  )
};

export default App;