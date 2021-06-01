import './App.css';
import NavBar from './components/NavBar';
import { ThemeProvider } from '@material-ui/styles';

function App() {
  return (
   <ThemeProvider>  
     <NavBar/>
  </ThemeProvider> 
  );
}

export default App;
