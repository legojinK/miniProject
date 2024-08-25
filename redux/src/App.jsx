import './App.css'
import { useDispatch,useSelector } from 'react-redux'
import Box from "./component/box.jsx";

function App() {


    const dispatch =useDispatch()
    const count = useSelector(state=>state.count)
    const id = useSelector(state=>state.id)
    const password = useSelector(state=>state.password)

    const increase =()=>{
        dispatch({type: 'Increase'})
    }
    const login =()=>{
        dispatch({type: 'Login',payload:{id:"hello",password:"world"}})
    }

    const decrease =()=>{
        dispatch({type: 'Decrease'})
    }


  return (
    <>
        <h1> Number : {count}</h1>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
        <Box/>
        <h1> 로그인 </h1>
        <h3> 아이디 - {id} / 비밀번호 - {password}</h3>
        <button onClick={login}>login</button>
    </>
  )
}

export default App
