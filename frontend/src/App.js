import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Badge from 'react-bootstrap/esm/Badge';
import { useContext } from 'react';
import { Store } from './Store';

function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar className="navbarColor">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Shopify</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart<span> </span>
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="dark">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                      {/* to display quantity of items and not no. of items */}
                    </Badge>
                  )}
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/product/:slug" element={<ProductScreen />} />
            </Routes>
          </Container>
        </main>

        {/*footer stick to bottom with d-flex flex-container*/}
        <footer>
          <div className="text-center">All Rights Reserved..</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
