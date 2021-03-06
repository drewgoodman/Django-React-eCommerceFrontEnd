import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import CartScreen from './screens/CartScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import ProductListScreen from './screens/ProductListScreen'
import OrderListScreen from './screens/OrderListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import UserEditScreen from './screens/UserEditScreen'

import Icons from './components/Icons'


function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/profile" component={ProfileScreen} />

          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/admin/orderslist" component={OrderListScreen} />
          
          <Route path="/admin/userlist/" component={UserListScreen} />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />

          <Route path="/admin/productlist/" component={ProductListScreen} />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

Icons();
export default App;
