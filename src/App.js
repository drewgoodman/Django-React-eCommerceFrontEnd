import { Container } from 'react-bootstrap'

import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'

import Icons from './components/Icons'


function App() {
  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <Container>
          <h1> Welcome to ProShop! </h1>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

Icons();
export default App;
