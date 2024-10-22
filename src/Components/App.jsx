import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import QtifyHome from './QtifyHome'
import SongPage from '../Pages/SongPage'
import Error from '../Pages/Error'

import FooterComponent from './Footer'


const App = () => {
  return (
<>

<BrowserRouter>
<Routes>
    <Route path='/' element={<QtifyHome/>}/>
    <Route path='/songpage' element={<SongPage/>}/>
    <Route path='/*' element={<Error/>}/>
</Routes>
</BrowserRouter>

</>
  )
}

export default App
