import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className='intro'>
      <div className="introLeft">
        <div className="introLeftDiv">
          <div className="introLeftContent">
            <h2 className="introTitle">Somos Sillonian</h2>
            <Link to='/products' className='introLink'>Compra YA!</Link>
          </div>
          <img src="./assets/uploads/intro2.jpg" alt="" />
        </div>
      </div>
      <div className="introRight">
        <div className="introRightDiv">
          <div className="introRightContent">
            <div className="introRightInner">
              <div className="introRightTexts">
                <h3 className="introRightTitle">Sillones</h3>
                <p className="introRightDesc">Dos cuerpos</p>
              </div>
              <img src="./assets/uploads/sillon1.jpg" alt="" />
            </div>
            <div className="introRightHover">
              <div className="introRightHoverTexts">
                <h3 className="introRightTextTitle">Sillones</h3>
                <p className="introRightTextDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link to='/' className='introRightLink'>Ver más</Link>
              </div>
            </div>
          </div>
          <div className="introRightContent">
            <div className="introRightInner">
              <div className="introRightTexts">
                <h3 className="introRightTitle">Accesorios</h3>
                <p className="introRightDesc">Personaliza tu sillón</p>
              </div>
              <img src="./assets/uploads/telas.jpg" alt="" />
            </div>
            <div className="introRightHover">
              <div className="introRightHoverTexts">
                <h3 className="introRightTextTitle">Accesorios</h3>
                <p className="introRightTextDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link to='/' className='introRightLink'>Descubrí más</Link>
              </div>
            </div>
          </div>
          {/* agregamos mas secciones */}
          {/* <div className="introRightContent">
            <div className="introRightInner">
              <div className="introRightTexts">
                <h3 className="introRightTitle">Kids</h3>
                <p className="introRightDesc">Best Clothes for Kids</p>
              </div>
              <img src="./assets/uploads/baner-right-image-03.jpg" alt="" />
            </div>
            <div className="introRightHover">
              <div className="introRightHoverTexts">
                <h3 className="introRightTextTitle">Kids</h3>
                <p className="introRightTextDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link to='/' className='introRightLink'>Discover More</Link>
              </div>
            </div>
          </div>
          <div className="introRightContent">
            <div className="introRightInner">
              <div className="introRightTexts">
                <h3 className="introRightTitle">Accessories</h3>
                <p className="introRightDesc">Best Trend for Accessories</p>
              </div>
              <img src="./assets/uploads/baner-right-image-04.jpg" alt="" />
            </div>
            <div className="introRightHover">
              <div className="introRightHoverTexts">
                <h3 className="introRightTextTitle">Accessories</h3>
                <p className="introRightTextDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link to='/' className='introRightLink'>Discover More</Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
  );
};

export default Intro;
