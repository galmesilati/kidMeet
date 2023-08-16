import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/header/header';
import { useContext, useEffect } from 'react';
import { SetUserContext } from './context/userContext';
import axios from 'axios';
import { ME_URL } from './infra/urls';
import { Snackbar, Stack } from '@mui/material';
import Notification from './components/notification/notification';

function App() {

  const setUser = useContext(SetUserContext)

  useEffect(
    () => {
      const fetchData = async () => {
        // const token = localStorage.getItem('token')
        // if (token) {
          const meResponse = await axios.get(ME_URL)
            // {headers: {Authorization: `Bearer ${token}`}})
          // console.log(meResponse)
          setUser({
            user: {...meResponse.data}
          })
        // }
      }
      fetchData()
    }, []
  )
  return (
    <>
      <Header/>
      <Stack alignItems={"center"} paddingLeft={"5em"} paddingRight={"5em"} paddingBottom={"10em"} paddingTop={"2em"}>
        <Outlet />
        <Notification />
      </Stack>

    </>
  );
}

export default App;
