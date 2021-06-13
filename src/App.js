import './App.css';
import NavBar from './components/NavBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {ItemCountCard} from './components/ItemCountCard'


const theme = createMuiTheme({
  palette:{
    primary:{
      main: '#C2361D'
    },
   secondary:{
      main: '#752112' 
   }
  }
})
function App() {
  return (
   <ThemeProvider theme={theme}>  
     <NavBar/>
     <div className="mainContainer">
    <ItemCountCard precio="Aun no definido" tamaño="Aun no definido" imag="/img/F1.jpeg" cantidadDisponible="10">
     </ItemCountCard >
     <ItemCountCard precio="Aun no definido" tamaño="Aun no definido" imag="" cantidadDisponible="5">
     </ItemCountCard >
     <ItemCountCard precio="Aun no definido" tamaño="Aun no definido" imag="" cantidadDisponible="3">
     </ItemCountCard >
     
     </div>
     
  </ThemeProvider> 
  );
}

export default App;
