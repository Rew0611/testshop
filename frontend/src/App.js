import './App.css';
import {Container} from 'react-bootstrap'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductDetails from './screens/ProductDetails';
function App() {
  return (
      <Router>
      <Header />
      <main>
      <Container>
      <Routes>
        <Route exact path ="/" element ={<HomeScreen />}/>
        <Route  path ="/product/:id" element ={<ProductDetails/>}/>
      </Routes>
      </Container>
      </main>
      <Footer />
      </Router>
  );
}

export default App;
