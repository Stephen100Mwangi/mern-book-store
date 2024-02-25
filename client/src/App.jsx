import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateBook from './Pages/CreateBook'
import Home from './Pages/Home'
import DeleteBook from './Pages/DeleteBook'
import UpdateBook from './Pages/UpdateBook'
import ShowBooks from './Pages/ShowBooks'

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/books/create' element={<CreateBook />}></Route>
      <Route path='/books/show/:id' element={<ShowBooks />}></Route>
      <Route path='/books/update/:id' element={<UpdateBook />}></Route>
      <Route path='/books/delete/:id' element={<DeleteBook />}  ></Route>
    </Routes>
  )
}

export default App
