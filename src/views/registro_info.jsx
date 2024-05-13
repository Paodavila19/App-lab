import { useState } from 'react';
import { FiPlus, FiTrash, FiX } from 'react-icons/fi';
import Sidebar from '../components/Sidebar';

function Historia() {


    const PRUEBAS = [
        {
            "_id": 1,
            "nombre": "Recuento de Globulos Rojos",
            "descripción": "Cantidad de glóbulos rojos presentes en una muestra de sangre."
        },
        {
            "_id": 2,
            "nombre": "Hemoglobina",
            "descripción": "Cantidad de hemoglobina en la sangre. Proteína presente en los glóbulos rojos que transporta oxígeno."
        },
        {
            "_id": 3,
            "nombre": "Tiroxina libre [FT4]",
            "descripción": "Cantidad de hormona tiroidea T4 que no está unida a proteínas y que está disponible para ser utilizada por el cuerpo."
        },
        {
            "_id": 4,
            "nombre": "Neutrófilos Valor abosulto",
            "descripción": "Cantidad absoluta de neutrófilos presentes en un microlitro de sangre."
        },
        {
            "_id": 5,
            "nombre": "Volumen Corpuscular Medio (VCM)",
            "descripción": "Tamaño promedio de los glóbulos rojos en una muestra de sangre."
        },
        {
            "_id": 6,
            "nombre": "Hematocrito",
            "descripción": "Porcentaje del volumen total de sangre que está ocupado por glóbulos rojos."
        },
        {
            "_id": 7,
            "nombre": "Hormona estimulante de la tiroides [TSH]",
            "descripción": "Cantidad de hormona estimulante de la tiroides producida por glándula pituitaria medida en sangre."
        },
        {
            "_id": 8,
            "nombre": "Neutrófilos %",
            "descripción": "Porcentaje de neutrófilos en relación con el total de glóbulos blancos presentes en una muestra de sangre."
        }
    ];

    const [modalAbierto, setModalAbierto] = useState(false);
    const [registros, setRegistros] = useState([
        { prueba: 'Recuento de Globulos Rojos', valor: '5.35', unidad: 'Mill/uL' }
    ]);
    const [formulario, setFormulario] = useState({
        prueba: '',
        valor: '',
        unidad: ''
    });
    const [errores, setErrores] = useState({
        prueba: '',
        valor: '',
        unidad: ''
    });

    const handleCloseModal = () => {
        setModalAbierto(false);
        setFormulario({ prueba: '', valor: '', unidad: '' });
        setErrores({ prueba: '', valor: '', unidad: '' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({ ...formulario, [name]: value });
        setErrores({ ...errores, [name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let hayErrores = false;
        const newErrores = {};

        if (!formulario.prueba.trim()) {
            newErrores.prueba = 'Campo obligatorio';
            hayErrores = true;
        }
        if (!formulario.valor.trim()) {
            newErrores.valor = 'Campo obligatorio';
            hayErrores = true;
        }
        if (!formulario.unidad.trim()) {
            newErrores.unidad = 'Campo obligatorio';
            hayErrores = true;
        }

        if (hayErrores) {
            setErrores(newErrores);
            return;
        }

        const nuevoRegistro = {
            prueba: formulario.prueba,
            valor: formulario.valor,
            unidad: formulario.unidad
        };
        setRegistros([...registros, nuevoRegistro]);
        setFormulario({ prueba: '', valor: '', unidad: '' });
        setModalAbierto(false);
    };

    const handleDelete = (index) => {
        const updatedRegistros = [...registros];
        updatedRegistros.splice(index, 1);
        setRegistros(updatedRegistros);
    };

    return (
        <>
            <Sidebar />
            <div className="overflow-hidden rounded-lg m-5" style={{ marginLeft: '320px', marginRight: '20px' }}>
                <button onClick={() => setModalAbierto(true)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mb-4 ml-10">
                    <FiPlus className="inline-block mr-2" /> Agregar
                </button>

                {modalAbierto && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                        <div className="bg-white rounded-lg p-8">
                            <div className="flex justify-end">
                                <button onClick={handleCloseModal} className="text-gray-600 hover:text-gray-700">
                                    <FiX />
                                </button>
                            </div>
                            <h2 className="text-lg font-semibold mb-4 text-blue-500">Agregar Registro</h2>
                            <form onSubmit={handleSubmit} className="mb-4">
                                <div className="grid grid-cols-3 gap-4">
                                    <select
                                        name="prueba"
                                        value={formulario.prueba}
                                        onChange={handleChange}
                                        className={`block appearance-none border rounded-md px-3 py-2 focus:outline-blue-300 ${errores.prueba && 'border-red-500'}`}
                                    >
                                        <option value="">Seleccionar Prueba</option>
                                        {PRUEBAS.map((prueba) => (
                                            <option key={prueba._id} value={prueba.nombre}>{prueba.nombre}</option>
                                        ))}
                                    </select>
                                    {errores.prueba && <p className="text-red-500 mt-1">{errores.prueba}</p>}
                                    <input
                                        type="text"
                                        name="valor"
                                        placeholder="Valor"
                                        value={formulario.valor}
                                        onChange={handleChange}
                                        className={`border rounded-md px-3 py-2 focus:outline-blue-300${errores.valor && 'border-red-500'}`}
                                    />
                                    {errores.valor && <p className="text-red-500 mt-1">{errores.valor}</p>}
                                    <input
                                        type="text"
                                        name="unidad"
                                        placeholder="Unidad"
                                        value={formulario.unidad}
                                        onChange={handleChange}
                                        className={`border rounded-md px-3 py-2 focus:outline-blue-300${errores.unidad && 'border-red-500'}`}
                                    />
                                    {errores.unidad && <p className="text-red-500 mt-1">{errores.unidad}</p>}
                                </div>
                                <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                                    Guardar
                                </button>
                            </form>
                        </div>
                    </div>
                )}

                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md ml-10 mr-10 overflow-x:auto">
                    <table className="w-full border-collapse bg-white text-left text-sm text-gray-500 min-width: 100%">
                        <thead className="bg-gray-50">
                            <tr className="border">
                                <th scope="col" className="border px-6 py-4 font-bold text-gray-900">Prueba</th>
                                <th scope="col" className="border px-6 py-4 font-bold text-gray-900">Valor</th>
                                <th scope="col" className="border px-6 py-4 font-bold text-gray-900">Unidad</th>
                                <th scope="col" className="border px-6 py-4 font-bold text-gray-900">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                            {registros.map((registro, index) => (
                                <tr key={index} className="border hover:bg-gray-50">
                                    <td className="border px-6 py-4">{registro.prueba}</td>
                                    <td className="border px-6 py-4">{registro.valor}</td>
                                    <td className="border px-6 py-4">{registro.unidad}</td>
                                    <td className="px-6 py-4 flex justify-center">
                                        <button onClick={() => handleDelete(index)} className="text-gray-500 hover:text-gray-600 focus:outline-none">
                                            <FiTrash className="h-6 w-4 cursor-pointer"/>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Historia;
