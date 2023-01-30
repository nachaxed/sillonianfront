import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {

  const user = useSelector((state) => state.user.currentUser);

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [error, setError] = useState(null);

  const registerHandler = async (e) => {
    e.preventDefault();

    if (password !== retypePassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {

      await axios.post('/api/auth/register', {
        username,
        email,
        password
      });

      navigate('/login');

    } catch (error) {
      setError("Fallo en el registro, Intente nuevamente");
    }


  }

  useEffect(() => {
    user && navigate('/');
  }, [navigate, user]);

  return (
    <div className='formSign'>
      <div className="formSignDiv">
        <form>
          <h3 className="formSignTitle">Registrate</h3>
          <div className="formSignGroups">
            <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder='tu nombre' required />
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Tu correo electronico' required />
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Tu contraseña' required />
            <input type="password" onChange={(e) => setRetypePassword(e.target.value)} placeholder='Confirma tu contraseña' required />
          </div>
          <button onClick={registerHandler}>Registrate</button>
          {error && <span className='error'>{error}</span>}
          <p>¿Tienes cuenta? <Link to='/login'>Inicia Sesion aquí</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register
