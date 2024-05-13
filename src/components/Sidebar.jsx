import { FaHome, FaSignOutAlt, FaPlus, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import logo from "../assets/logo1.png"


const Sidebar = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    return (
        <aside className="bg-white text-white flex flex-col items-center fixed top-0 left-0 h-screen">
    <div className="py-10 px-5">
        <div className="flex flex-col items-center mb-7"> 
            <img src={logo} alt="Logo de la plataforma" className="w-64 mb-1" /> 
            <h1 className="text-blue-700 text-xl font-bold">laboratorio clinico</h1>
        </div>

        <button
            className="flex items-center text-blue-500 hover:bg-blue-100 py-2 px-4 w-full text-left focus:outline-none"
            onClick={() => navigate("/")}
        >
            <FaHome className="mr-2" /> Home 
        </button>

        <button
            className="flex items-center text-blue-500 hover:bg-blue-100 py-2 px-4 w-full text-left focus:outline-none"
            onClick={() => navigate("/ListarPacientes")}
        >
            <FaUsers className="mr-2" /> Listar Pacientes 
        </button>

        <button
            className="flex items-center text-blue-500 hover:bg-blue-100 py-2 px-4 w-full text-left focus:outline-none"
            onClick={() => navigate("/Paciente")}
        >
            <FaPlus className="mr-2" /> Paciente 
        </button>

        <button
            className="flex items-center text-blue-500 hover:bg-blue-100 py-2 px-4 w-full text-left focus:outline-none"
            onClick={logout}
        >
            <FaSignOutAlt className="mr-2" /> Cerrar Sesión 
        </button>
    </div>
</aside>

    );
};

export default Sidebar;