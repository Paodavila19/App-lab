import { useNavigate } from "react-router-dom";
import Evento from "../components/Evento.jsx";
import Event from "../components/Event.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from '../components/Sidebar.jsx';

const EVENTOS = [
    {
        "_id": 1,
        "resultado": {
            "_id": 1,
            "nombre": "Policitemia",
            "descripcion": "Aumento anormal en el número de glóbulos rojos en la sangre."
        },
        "personal": {
            "_id": 10,
            "tipo_id": "Cedula",
            "nombre": "Andrea Cardenas",
            "email": "andreacardenas@gmail.com",
            "doc_identidad": "30376893",
            "cargo": "Bacterióloga",
            "foto": "https://i.pinimg.com/564x/bd/42/8e/bd428e6bb156d90045700dbf3e967c3e.jpg",
            "User": "andreac",
            "password": "12345"
        },
        "fecha": {
            "$date": "2022-06-22"
        }
    },
    {
        "_id": 2,
        "resultado": {
            "_id": 2,
            "nombre": "Hipertiroidismo",
            "descripcion": "Producción en exceso de la tiroxina libre."
        },
        "personal": {
            "_id": 2,
            "tipo_id": "Cedula",
            "nombre": "Camilo Pachon",
            "email": "camilopachon@gmail.com",
            "doc_identidad": "30788290",
            "cargo": "Bacteriólogo",
            "foto": "https://i.pinimg.com/564x/bb/7b/7d/bb7b7d34c357e4618b0dcebf2d06d147.jpg",
            "User": "camilop",
            "password": "12345"
        },
        "fecha": {
            "$date": "2023-10-03"
        }
    },
    {
        "_id": 3,
        "resultado": {
            "_id": 3,
            "nombre": "Neutropenia",
            "descripcion": "los niveles de neutrófilos en la sangre están por debajo de lo normal."
        },
        "personal": {
            "_id": 3,
            "tipo_id": "Cedula",
            "nombre": "Javier Garcia",
            "email": "javiergarcia@gmail.com",
            "doc_identidad": "30377846",
            "cargo": "Patólogo",
            "foto": "https://i.pinimg.com/564x/74/89/b8/7489b83fe25adc88908336cb6c0f13c2.jpg",
            "User": "francisco",
            "password": "12345"
        },
        "fecha": {
            "$date": "2023-09-17"
        }
    },
]

let idSecuence = 3;

function Eventos() {
    
    const navigate = useNavigate();

    const [eventos, setEventos] = useState(EVENTOS);


    const { pacienteId } = useParams();
    const [pacientes, setPacientes] = useState(null);


    useEffect(() => {
        fetch('http://localhost:3000/pacientes/' + pacienteId)
            .then((res) => res.json())
            .then(datosRespuesta => {
                setPacientes(datosRespuesta);
            })
            .catch(console.log)
    }, [])

    const crearEvento = (evento) => {
        const newEvento = {
            _id: String(++idSecuence),

            resultado: {
                _id: evento.resultado.resultadoId,
                nombre: evento.resultado.nombrePro,
                descripcion: evento.resultado.descripcion
            },   

            personal:
            {
                _id: evento.personal.personalId,
                tipo_id: evento.personal.tipo_id,
                nombre: evento.personal.nombre,
                email: evento.personal.email,
                doc_identidad: evento.personal.doc_identidad,
                cargo: evento.personal.cargo,
                foto: evento.personal.foto,
                User: evento.personal.User,
                password: evento.personal.password
            },

            especialidad: evento.especialidad,
            fecha:
            {
                $date: evento.fecha
            }
        };

        setEventos([newEvento, ...eventos])
    };

    return (
        <>
            <Sidebar />
            {pacientes ? (
                <div className="px-8 pt-6 pb-8 m-10 flex flex-col my-2" style={{ marginLeft: '330px' }}>
                    <div>
                        <br />
                        <h1 className="font-bold px-6 text-lg text-center text-blue-500">Información del paciente</h1>
                        <br />
                    </div>
                    <table className="w-full border-collapse  bg-white text-left text-sm text-gray-500 min-width: 100% rounded-xl shadow-md">
                        <tbody>
                            <tr>
                                <td className="p-3 font-bold  text-gray-900 text-center border-b  " colSpan="2">Nombre</td>
                                <td className="p-3 font-bold  text-gray-900 text-center border-b  " colSpan="2">{pacientes.nombre}</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-bold bg-gray-50 text-gray-900 border-b ">Tipo de documento</td>
                                <td className="p-3 text-gray-800 text-center  border-b">{pacientes.tipo_id}</td>
                                <td className="p-3 font-bold bg-gray-50 text-gray-900 border-b  ">Documento</td>
                                <td className="p-3 text-gray-800 text-center  border-b">{pacientes.doc_identidad}</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-bold bg-gray-50 text-gray-900 border-b  ">Fecha de nacimiento</td>
                                <td className="p-3 text-gray-800 text-center border-b">{pacientes.fecha_nacimiento}</td>
                                <td className="p-3 font-bold bg-gray-50 text-gray-900 border-b  ">Edad</td>
                                <td className="p-3 text-gray-800 text-center  border-b">{pacientes.edad}</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-bold bg-gray-50 text-gray-900 border-b  ">Género</td>
                                <td className="p-3 text-gray-800 text-center  border-b">{pacientes.genero}</td>
                                <td className="p-3 font-bold bg-gray-50 text-gray-900 border-b  ">Correo electrónico</td>
                                <td className="p-3 text-gray-800 text-center  border-b">{pacientes.email}</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-bold bg-gray-50 text-gray-900 border-b ">Dirección</td>
                                <td className="p-3 text-gray-800 text-center  border-b">{pacientes.direccion}</td>
                                <td className="p-3 font-bold bg-gray-50 text-gray-900 border-b ">Celular</td>
                                <td className="p-3 text-gray-800 text-center  border-b">{pacientes.celular}</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-bold bg-gray-50 text-gray-900 rounded-bl-xl">EPS</td>
                                <td className="p-3 text-gray-800 text-center  ">{pacientes.eps}</td>
                                <td className="p-3 font-bold bg-gray-50 text-gray-900  ">Grupo sanguíneo</td>
                                <td className="p-3 text-gray-800 text-center  ">{pacientes.grupo_sanguineo}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            ) : (
                <p>Cargando datos del paciente...</p>
            )}
          <div className="overflow-hidden rounded-lg  m-5" style={{ marginLeft: '320px' }}>

            <Event onSave={(evento) => {
                crearEvento(evento);

            }} />

            <div>
                <h1 className="font-bold px-6 mt-4 ml-10 mb-4 text-lg text-blue-500">Eventos</h1>
            </div>

            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md ml-10 mr-10 overflow-x:auto ">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500 min-width: 100%">
                    <thead className="bg-gray-50">
                        <tr className="border">
                            <th scope="col" className="border px-6 py-4 font-bold text-gray-900">Fecha</th>
                            <th scope="col" className="border px-6 py-4 font-bold text-gray-900">Personal Asistencial</th>
                            <th scope="col" className="border px-6 py-4 font-bold text-gray-900">Diagnotico</th>
                            <th scope="col" className="border px-6 py-4 font-bold text-gray-900">Registros</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {eventos.map((evento) => (
                            <Evento key={evento._id} evento={evento} />
                        ))}
                    </tbody>
                </table>
            </div>
            <button className="bg-blue-500  hover:bg-blue-600 text-white font-bold  mb-4 pd-2   m-4 py-3 px-6 rounded-full ml-10" onClick={() => navigate('/ListarPacientes')}>Regresar</button>
            </div>
        </>
    );
}

export default Eventos;