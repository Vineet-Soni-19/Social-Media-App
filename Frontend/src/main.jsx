import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import LogIn from './pages/LogIn.jsx';
import Profile from './pages/Profile.jsx';
import Newpost from './pages/Newpost.jsx';
import Home from './pages/Home.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/index';

const router=createBrowserRouter(
  createRoutesFromElements(

    <Route path='/id/' element={<App/>}>
      <Route path='home' element={<Home/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='newpost' element={<Newpost/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
