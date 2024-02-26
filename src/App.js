import { Grid } from '@mui/material';
import './App.css';
import MainPage from './components/MainPage';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <Grid data-testid={"hello"}>
      <MainPage />
      {/* <Outlet/> */}
    </Grid>
  );
}