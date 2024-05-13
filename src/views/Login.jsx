import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import logo from "../assets/logo1.png";
import backgroundSVG from '../assets/fondo_login.svg';


const personal = [
  {
    "_id": 10,
    "tipo_id": "Cedula",
    "nombre": "Santiago Lorduy",
    "email": "santiagos@gmail.com",
    "doc_identidad": "1003435122",
    "cargo": "Analista",
    "foto": "https://randomuser.me/api/portraits/men/78.jpg",
    "usuario": "santiagos",
    "password": "12345"
  },
  {
    "_id": 2,
    "tipo_id": "Cedula",
    "nombre": "Paola Davila",
    "email": "paolad@gmail.com",
    "doc_identidad": "9876543210",
    "cargo": "Analista",
    "foto": "https://randomuser.me/api/portraits/women/90.jpg",
    "usuario": "paolad",
    "password": "12345"
  },
  {
    "_id": 3,
    "tipo_id": "Cedula",
    "nombre": "Luisa Salazar",
    "email": "luisaf@hotmail.com",
    "doc_identidad": "1007240356",
    "cargo": "Medico",
    "foto": "https://randomuser.me/api/portraits/men/74.jpg",
    "usuario": "luisaf",
    "password": "12345"
  },
  {
    "_id": 4,
    "tipo_id": "cedula",
    "nombre": "Gabriela Giraldo",
    "email": "gabrielag@gmail.com",
    "doc_identidad": "1357924680",
    "cargo": "Analista",
    "foto": "https://randomuser.me/api/portraits/men/2.jpg",
    "usuario": "gabrielag",
    "password": "12345"
  }
]

function Login() {
  const navigate = useNavigate();
  const { user, login } = useAuth();

  const [errorMessage, setErrorMessage] = useState(""); // Estado para el mensaje de error

  if (user) {
    return <Navigate to="/" />;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const loginObject = Object.fromEntries(formData.entries());

    if (!loginObject.username || !loginObject.password) {
      setErrorMessage("Los campos son requeridos");
      return; 
    } else {
      setErrorMessage("");
    }

    const foundUser = personal.find(
      (user) =>
        user.usuario === loginObject.username &&
        user.password === loginObject.password
    );

    if (foundUser) {
      login(foundUser);
      navigate('/');
    } else {
      setErrorMessage("Usuario o contraseña incorrectos");
    }
  }

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center" style={{ backgroundImage: `url(${backgroundSVG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="p-4" style={{ marginLeft: '500px' }}>
        <div className="bg-white justify-center p-6 rounded-lg shadow-md" style={{ width: "400px"}}>
        <img src={logo} alt="Logo de la plataforma" className="w-40 mx-auto" />
        <h3 className="mb-5 font-bold text-center text-blue-700">Laboratorio Clínico</h3>
          <form className="flex flex-col items-center" method="post" onSubmit={handleSubmit}>
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>} {/* Mostrar el mensaje de error si existe */}
            <label htmlFor="username" className="text-blue-700 mb-6 text-left w-full">
              Iniciar sesión
            </label>
            <input
              className="mb-6 mx-auto rounded-md p-3 text-black focus:outline-blue-300"
              name="username"
              id="username"
              placeholder="Nombre de usuario"
              style={{ width: "350px" }}
            />
            <input
              className="mb-6 rounded-lg p-3 text-black focus:outline-blue-300"
              type="password"
              name="password"
              id="password"
              placeholder="Contraseña"
              style={{ width: "350px" }}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full mb-4"
              type="submit"
            >
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
  
  
  
}

export default Login;






