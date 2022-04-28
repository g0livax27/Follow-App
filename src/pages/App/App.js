import './App.css';
import { useState } from 'react';
import bootstrap from 'bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import AuthPage from '../AuthPage/AuthPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [user, setUser ] = useState(null);

  return (
    <main className="App">
      <Router>
        <header className="App-header">
          <Navbar>
            <Container>
              <Link to={'/sign-up'} className="nav-link">
                Sign Up
              </Link>
            </Container>
          </Navbar>
        </header>
          {
            user ?
            <Routes>
              <Route path="/orders/new" element={<NewOrderPage/>}/>
              <Route path="/orders" element={<OrderHistoryPage/>}/>
            </Routes>
            :
            <AuthPage setUser={setUser}/>
          }
      </Router>
    </main>
  );
}

export default App;
