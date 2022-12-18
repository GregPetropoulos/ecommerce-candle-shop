import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
          {/* Public Routes */}
            <Route path='/' element={<Outlet />} />
            <Route index element={<HomeScreen />} />
            <Route path='product/:id' element={<ProductScreen />} />
          
          {/* Protected Routes */}
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
