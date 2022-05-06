import './App.css';
import { useState, useEffect } from 'react';
import bootstrap from 'bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import Header from '../../components/Header/Header';
import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader';
import Footer from '../../components/Footer/Footer';
import MainPage from '../MainPage/MainPage';
import MonthsPage from '../MonthsPage/MonthsPage';
import NewPage from '../NewPage/NewPage';
import ListsPage from '../ListPage/ListPage';
import BillsPage from '../BillsPage/BillsPage';
import WishListPage from '../WishListPage/WishListPage';
import EditPage from '../EditPage/EditPage';

function App(){
  const [ user, setUser ] = useState(getUser());
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
      {/* <Header user={user} setUser={setUser}/> */}
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/expenses' element={<MonthsPage/>} />
        <Route path='/expenses/:month/new' element={<NewPage/>} />
        <Route path='/:month' element={<ListsPage expenses={expenses}/>} />
        <Route path='/:month/bills' element={<BillsPage expenses={expenses}/>} />
        <Route path='/:month/wishlist' element={<WishListPage item={expenses}/>} />
        <Route path='/:id/edit' element={<EditPage months={expenses}/>} />
      </Routes>
      {/* <Footer/> */}
    </main>
  )
};

export default App;