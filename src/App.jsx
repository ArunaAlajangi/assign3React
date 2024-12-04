import { useState } from 'react'

import './App.css'
import About from './Routing/About'
import Home from './Routing/Home'
import Xton from './Routing/Xton'
import JoinUs from './Routing/JoinUs'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Header from './Header'
import Usestate from './Stores/Pages/Usestate'




function App() {
  // const [searchQuery, setSearchQuery] = useState("");

  // const handleSearch = (query) => {
  //   setSearchQuery(query);
  // };

  return (
    <div className="container">
      <Navbar/>
      <Header/>
      <Usestate/>
      <Routes>
        
        <Route path='/about' element = {<About/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/xton' element = {<Xton/>}/>
        <Route path='/joinUs' element = {<JoinUs/>}/>



      </Routes>
      {/* <About/>
      <Home/>
      <Xton/>
      <JoinUs/> */}
      
    </div>
  )
}

export default App
