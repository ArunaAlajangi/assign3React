import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({onSearch}) => {

  const[searchTerm , setSearchTerm] =useState("");

  const handleSearchChange =(e)=>{

    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };
  return (
    <div className = "navSection">

        <img src="./logo.png" alt="" className="logo"></img>
        <ul>
        
        <Link to="/Home"> <li>Home</li> </Link>

        <Link to = "/About"> <li>About</li> </Link>
        
        <Link to = "/Xton"><li>Xton</li></Link>

        <Link to="/JoinUs"><li>joinUs</li></Link>
        
        </ul>
        <div className="Search-box">

          <input type="text" placeholder='Search' value={searchTerm}  onChange={handleSearchChange}/>  

          <button> Signin</button>


        </div>
       

      
    </div>
  )
}

export default Navbar
