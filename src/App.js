import './App.css';
import NavBar from './components/NavBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

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
  </ThemeProvider> 
  );
}

export default App;
