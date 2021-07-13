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
import { CounterProvider } from './components/contexts/components/CounterContext';
import { CartContainer } from './components/cart/components/CartContainer';


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
    <CartProvider>
      <CounterProvider>
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
                <Route exact path='/detalle/:identi'>
                  <ItemDetailContainer />
                </Route>
                <Route exact path='/cart'>
                  <CartContainer />
                </Route>
              </Switch>
            </ThemeProvider>
          </Router>
      </CounterProvider>
    </CartProvider>
  );
}

export default App;
