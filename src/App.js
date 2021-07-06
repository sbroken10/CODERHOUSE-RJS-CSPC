import './App.css';
import NavBar from './components/navVar/components/NavBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ItemListContainer } from './components/items/components/ItemListContainer';
import { ItemDetailContainer } from './components/items/components/ItemDetailContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { CartProvider } from './components/contexts/components/CartContext';
import { Cart } from './components/cart/components/Cart'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#C2361D'
    },
    secondary: {
      main: '#752112'
    }
  }
})
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Switch>
          <Route exact path="/CODERHOUSE-RJS-CSPC">
            <div className="mainContainer">
              <ItemListContainer />
            </div>
          </Route>
          <Route exact path="/Contactenos">
            <h2>Proximamente</h2>
          </Route>
          <CartProvider>
            <Route exact path='/detalle/:identi'>
              <div>
                <ItemDetailContainer />
              </div>
            </Route>
            <Route exact path='/cart'>
              <h2><Cart /></h2>
            </Route>
          </CartProvider>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
