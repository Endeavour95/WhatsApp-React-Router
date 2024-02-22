import { Grid } from '@mui/material';
import './App.css';
import MainPage from './components/MainPage';

function App() {
  return (
    <Grid data-testid={"hello"}>
      <MainPage />
    </Grid>
  );
}

export default App;
