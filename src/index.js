import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import EventPage from './components/events/eventsPage';
import InterestPage from './components/interests/interestsPage';
import SchedulePage from './components/schedule/schedule';
import EventDetails from './components/events/eventDetails';
import LoginPage from './components/login/loginPage';
import UserProvider from './context/userContext';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <EventPage />,
        // children: [
        //   {
        //     path: '/events/:eventId',
        //     element: <EventDetails />
        //   }
        // ] - in same page
      },
      { 
        path: '/events/:eventId',
        element: <EventDetails /> 
        // in new page, when on click event
      },
      {
        path: '/interests',
        element: <InterestPage />
      },
      {
        path: '/schuedule',
        element: <SchedulePage />
      }
    ]
  },
  {
    path: '/login',
    element: <LoginPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
