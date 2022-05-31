import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainPage from '../MainPage/MainPage';
import NewPage from '../NewPage/NewPage';
import ListsPage from '../ListPage/ListPage';
import BillsPage from '../BillsPage/BillsPage';
import WishListPage from '../WishListPage/WishListPage';
import EditPage from '../EditPage/EditPage';

function App() {
  const [user, setUser] = useState(getUser());
  const [expenses, setExpenses] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api/expenses');
        const data = await response.json();
        setExpenses(data);
      } catch (err) {
        console.log(err);
      }
    })()
  }, [refresh]);

  return (
    <main className="App">
      <Header user={user} showLogin={showLogin} setShowLogin={setShowLogin} showSignUp={showSignUp} setShowSignUp={setShowSignUp} refresh={refresh} setRefresh={setRefresh} />
      {
        user ?
          <>
            <Routes>
              <Route path='/' element={<MainPage user={user} setUser={setUser} showLogin={showLogin} showSignUp={showSignUp} />} />
              <Route path='/expenses/:month/new' element={<NewPage user={user} />} />
              <Route path='/:month' element={<ListsPage expenses={expenses} user={user} />} />
              <Route path='/:month/bills' element={<BillsPage expenses={expenses} user={user} />} />
              <Route path='/:month/wishlist' element={<WishListPage item={expenses} user={user} />} />
              <Route path='/:id/edit' element={<EditPage months={expenses} user={user} />} />
            </Routes>
          </>
          :
          <MainPage user={user} setUser={setUser} showLogin={showLogin} showSignUp={showSignUp} />
      }
      <Footer />
    </main>
  )
};

export default App;