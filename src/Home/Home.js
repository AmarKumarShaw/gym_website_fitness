import React from 'react'
import './Home.css'
// import Image from './Image/fit.png'
const Home = () => {
  return (
    <>
    <div className='main'>
      <div className="data">
        <div className="done">
          <p>STRONG</p>
        </div>
        <div className="dtwo">
          <p>GYM</p>
        </div>
        <div className="btt">
          <div className="bone">
            <button>Get started</button>
          </div>
          <div className="btwo">
            <button>Watch more</button>
          </div>
        </div>
      </div>
      <div className="image">
        <img src="./images/fit.png" alt="" />
      </div>
    </div>

    {/* // <--------------------!2ndpage-----------------------> */}

   

    </>
  )
}

export default Home