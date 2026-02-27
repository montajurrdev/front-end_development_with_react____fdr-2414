
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import RootLayout from './components/layout/RootLayout'
import Error from './components/pages/Error'
import SignUp from './components/pages/SignUp'
import Task from './components/pages/Task'
import Login from './components/pages/Login'
import About from './components/pages/About'

function App() {
  

  return (
    <>
<Routes>
  <Route element={<RootLayout/>}>
    <Route index element={<Home/>}/>
    <Route path='signup' element={<SignUp/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='task' element={<Task/>}/>

    <Route path='*' element={<Error/>}/>
  </Route>
</Routes>
    </>
  )
}

export default App
