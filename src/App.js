import './App.css';
import NavBar from './components/NavBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {makeStyles} from '@material-ui/core'
import {MainContainer} from './components/MainContainer'

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
const styles = makeStyles(theme => ({
  offset: theme.mixins.toolbar
  }))

function App() {
  const classes = styles()
  return (
   <ThemeProvider theme={theme}>  
     <NavBar/>
     <MainContainer precio="Aun no definido" tamaño="Aun no definido" estado="Disponible" className="Contenedor">
     </MainContainer >
  </ThemeProvider> 
  );
}

export default App;
