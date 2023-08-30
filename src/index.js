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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Notification>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </Notification>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
