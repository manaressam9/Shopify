import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar className="navbarColor">
            <Container>
              <Link className="myBrand" to="/">
                <Navbar.Brand>Shopify</Navbar.Brand>
              </Link>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
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
