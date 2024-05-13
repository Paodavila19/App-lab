import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { FiTrash, FiPlus } from 'react-icons/fi'; // Importa los iconos de React Icons

function Paciente() {
    useNavigate();

    const [pacientes, setPacientes] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/pacientes')
            .then((res) => res.json())
            .then(datosRespuesta => {
                setPacientes(datosRespuesta);
            })
            .catch(console.log);
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/pacientes/${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                // Eliminar el paciente de la lista después de eliminarlo del servidor
                setPacientes(pacientes.filter(paciente => paciente.id !== id));
                console.log('Paciente eliminado exitosamente');
            })
            .catch((error) => console.error('Error al eliminar el paciente:', error));
    };

    return (
        <>
            <Sidebar />

            <div className="bg-white overflow-hidden rounded-xl shadow-md m-2" style={{ marginLeft: '320px', marginRight: '20px' }}>
                <div>
                    <br />
                    <h1 className="font-bold px-6 text-lg text-center text-blue-500">Listado de pacientes</h1>
                    <br />
                </div>
                <table className="w-full border-collapse border-xl bg-white text-left text-sm text-gray-500">
                    <thead>
                        <tr>
                            <th className="p-3 font-bold bg-gray-200 text-gray-900 text-center border border-gray-300 hidden lg:table-cell">Documento</th>
                            <th className="p-3 font-bold bg-gray-200 text-gray-900 text-center border border-gray-300 hidden lg:table-cell">Nombre</th>
                            <th className="p-3 font-bold bg-gray-200 text-gray-900 text-center border border-gray-300 hidden lg:table-cell">Edad</th>
                            <th className="p-3 font-bold bg-gray-200 text-gray-900 text-center border border-gray-300 hidden lg:table-cell">Grupo sanguíneo</th>
                            <th className="p-3 font-bold bg-gray-200 text-gray-900 text-center border border-gray-300 hidden lg:table-cell">EPS</th>
                            <th className="p-3 font-bold bg-gray-200 text-gray-900 text-center border border-gray-300 hidden lg:table-cell">Eventos</th>
                            <th className="p-3 font-bold bg-gray-200 text-gray-900 text-center border border-gray-300 hidden lg:table-cell">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pacientes &&
                            pacientes.map((paciente) => (
                                <tr key={paciente.id} className="border hover:bg-gray-50">
                                    <th className="border px-6 py-4 text-center">{paciente.doc_identidad}</th>
                                    <td className="border px-6 py-4 text-center">{paciente.nombre}</td>
                                    <td className="border px-6 py-4 text-center">{paciente.edad}</td>
                                    <td className="border px-6 py-4 text-center">{paciente.grupo_sanguineo}</td>
                                    <td className="border px-6 py-4 text-center">{paciente.eps}</td>
                                    <td className="border px-6 py-4 text-center">
    <div className="flex justify-center"> {/* Envuelve el icono en un div con clase flex y justify-center */}
        <Link to={`/Eventos/${paciente.id}`}>
            <FiPlus className="text-gray-500 hover:text-gray-600 focus:outline-none" />
        </Link>
    </div>
</td>
                                    <td className="border px-6 py-4 text-center">
                                        <button
                                            onClick={() => handleDelete(paciente.id)}
                                            className="text-gray-500 hover:text-gray-600 focus:outline-none"
                                        >
                                            <FiTrash className="h-6 w-4 cursor-pointer" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Paciente;
