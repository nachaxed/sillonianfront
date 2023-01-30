import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'

const Form = () => {
  return (
    <div className='form'>
            <div className="formDiv">
                <div className="formTop">
                    <img src="./assets/uploads/form.jpg" alt="" />
                    <div className="formTexts">
                        <h2>Contactanos</h2>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    </div>
                </div>
                <div className="formBottom">
                    <div className="formBottomLeft">
                        <div className="formBottomMaps">
                            <iframe src="" width={600} height={450} style={{ border: 'none' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='Maps'></iframe>
                        </div>
                    </div>
                    <div className="formBottomRight">
                        <div className="formBottomTexts">
                            <h2>Hola tu consulta no molesta!!</h2>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                        </div>
                        <div className="formBottomForm">
                            <form>
                                <div className="formBottomGroups">
                                    <input type="text" required placeholder='Tu nombre' />
                                    <input type="text" required placeholder='Tu correo electronico' />
                                </div>
                                <div className="formBottomGroups">
                                    <textarea name="" id="" cols="30" rows="10" placeholder='Su Mensaje'></textarea>
                                </div>
                                <button className='formBottomBtn'><FaPaperPlane /></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Form
