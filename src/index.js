import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import EventPage from './components/events/eventsPage';
import LoginPage from './components/login/loginPage';
import UserProvider from './context/userContext';
import HomePage from './components/home/homePage';
import ChildrenPage from './components/children/childrenPage';
import EventDetails from './components/events/eventDetails';
import Signup from './components/signup/signupPage';
import Notification from './components/notification/notification';
import axios from 'axios';
import ChildDetails from './components/children/childDetails';
import ProfilePage from './components/profile/profilePage';
import ChildEventsPage from './components/events/childEventsPage';
import { ThemeProvider, createTheme } from '@mui/material';
import CalendarPage from './components/schedule/calendarPage';


axios.interceptors.request.use(
  (config) => {

    const token = localStorage.getItem('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  }
)


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      { 
        path: '/children-page',
        element: <ChildrenPage /> 
      },
      {
        path: 'children-page/:childId',
        element: <ChildDetails />
      },
      {
        path: '/events-page',
        element: <EventPage />
      },
      {
        path:'events-page/:eventId',
        element: <EventDetails />
      },
      {
        path: 'child-events',
        element: <ChildEventsPage />
      },
      {
        path: '/schedule-page/:childId',
        element: <CalendarPage />
      },
      {
        path: '/profile',
        element: <ProfilePage />
      }
    ]
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/signup',
    element: <Signup />
  }
])

const myTheme = {
  palette : {
    mode: 'light'
  ,
  primary: {
    main: '#84fa66', //green 
  },
  secondary: {
    main: '#ec70ff', // purple
    dark: '#be02db',
  },
}
}

const theme = createTheme(myTheme);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <Notification>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </Notification>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
