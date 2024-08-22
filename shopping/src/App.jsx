import React, {useEffect, useState} from 'react'
import './App.css'
import {Route, Routes} from "react-router";
import ProductList from "./page/ProductList.jsx";
import Login from "./page/Login.jsx";
import PrivateRoute from "./route/PrivateRoute.jsx";
import Navbar from "./component/Navbar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
// 1 . 3개의 페이지
// 2 . 페이지 이동 가능
// 3 . 헤더 만들기 3개로 나눠서
// 4 . 로그인 버튼 눌렀을 시 로그인 페이지 나옴
// 5. 상품 디테일 페이지 눌렀을 시 로그인이 안되어 있으면 로그인페이지 나옴
// 6. 로그인되면 버튼 바뀌고 로그아웃 버튼 누르면 로그아웃됨

  const [auth,setAuth]=useState(false) //true 로그인

/*
  로그인 auth 변화 체크 디버깅
  useEffect(() => {
    console.log(111,auth)
  }, [auth]);
*/

  return (

    <>
        <Navbar/>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/login" element={<Login setAuth={setAuth}/>} />
            <Route path="/product/:id" element={<PrivateRoute auth={auth}/>} />
          </Routes>
    </>
  )
}

export default App
