import React from 'react'
import {Link} from 'react-router-dom'
import { FaInstagram } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className='socials'>
      <div className="socialsDiv">
        <div className="socialsTop">
          <h2>Social Media</h2>
          <span>Descripción y agreagmos fotos del ig para que hagan click .. preguntar.</span>
        </div>
        <div className="socialsBottom">
          <div className="socialsBottomImages">
            <div className="socialsBottomImg">
              <img src="./assets/uploads/instagram-01.jpg" alt="" />
              <div className="socialsHover">
                <Link to='/'>sillon</Link>
                <FaInstagram />
              </div>
            </div>
            <div className="socialsBottomImg">
              <img src="./assets/uploads/instagram-02.jpg" alt="" />
              <div className="socialsHover">
                <Link to='/'>sillon2</Link>
                <FaInstagram />
              </div>
            </div>
            <div className="socialsBottomImg">
              <img src="./assets/uploads/instagram-03.jpg" alt="" />
              <div className="socialsHover">
                <Link to='/'>sillon 3</Link>
                <FaInstagram />
              </div>
            </div>
            <div className="socialsBottomImg">
              <img src="./assets/uploads/instagram-04.jpg" alt="" />
              <div className="socialsHover">
                <Link to='/'>sillon 4</Link>
                <FaInstagram />
              </div>
            </div>
            <div className="socialsBottomImg">
              <img src="./assets/uploads/instagram-05.jpg" alt="" />
              <div className="socialsHover">
                <Link to='/'>sillon 5</Link>
                <FaInstagram />
              </div>
            </div>
            <div className="socialsBottomImg">
              <img src="./assets/uploads/instagram-06.jpg" alt="" />
              <div className="socialsHover">
                <Link to='/'>sillon 6</Link>
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Socials