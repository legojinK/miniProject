import { useState } from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import AppLayout from "./layout/AppLayout.jsx";
import HomePage from "./pages/Homepage/HomePage.jsx";
import MoviePage from "./pages/Movies/MoviePage.jsx";
import MovieDetail from "./pages/MovieDetail/MovieDetail.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";

function App() {

  return (
      <Routes>
        <Route path='/' element={<AppLayout />} >
          <Route index element={<HomePage />} />
          <Route path='movies'>
              <Route index element={<MoviePage />} />
              <Route path=':id' element={<MovieDetail />} />
          </Route>
          {/*<Route path='/movies' element={<MoviePage />} />*/}
          {/*<Route path='/movies/:id' element={<MovieDetail />} />*/}
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

  )
}

export default App
