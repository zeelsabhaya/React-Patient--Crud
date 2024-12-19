import './App.css'
import { Route, Routes } from 'react-router'
import Header from './component/Header'
import Home from './component/Home'
import Add from './component/Add'
import Edit from './component/Edit'
import View from './component/View'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
        <Route path='/Edit/:id' element={<Edit />} />
        <Route path='/View/:id' element={<View />} />
      </Routes>
    </>
  )
}

export default App
