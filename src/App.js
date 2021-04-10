import { Container } from 'react-bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'

import Header from './components/Header'
import Footer from './components/Footer'

// register Font Awesome Icons used
library.add(
  faShoppingCart,
  faUser
)


function App() {
  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <Container>
          <h1> Welcome to ProShop! </h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
