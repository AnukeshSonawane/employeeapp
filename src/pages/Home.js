import React from 'react'
import Navbar from '../components/Navbar';

const Home = () => {
  return (


    
    <header>

{/* =============================================    Navbar    ======================================================= */}

     <Navbar/>

{/* ==================================================================================================================== */}

      <div>
        <h1 className='ems'><i>Welcome to Godrej Infotech</i></h1>
        <div className='theone'>
          <img src={"./theone.jpg"} height="400"></img>
        </div>
      </div>
    </header>




  )
}

export default Home;

