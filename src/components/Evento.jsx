import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


function Evento({ evento }) {
    useNavigate();
    return (
        <tr className="border hover:bg-gray-50">
            <th className="border px-6 py-4">{evento.fecha.$date}</th>
            <td className=" border flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div className="relative h-10 w-10">
                    <img
                        className="h-full w-full rounded-full object-cover object-center"
                        src={evento.personal.foto}
                        alt=""
                    />
                </div>
                <div className="text-sm">
                    <div className="font-medium text-gray-700">{evento.personal.nombre}</div>
                    <div className="text-gray-400">{evento.personal.email}</div>
                </div>
            </td>
            <td className="border px-6 py-4">{evento.resultado.nombre}</td>
            <td className="border px-6 py-4">
                <div className="flex justify-center gap-4">
                        <Link to={`/registro/${evento._id}`}> 
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </Link>

                </div>
            </td>
        </tr>


    );
}

export default Evento;

