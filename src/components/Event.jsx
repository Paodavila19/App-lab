import { useForm } from 'react-hook-form';
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


function Event({ onSave }) {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
   // const para generar la fecha automaticamente
  const ahora = new Date();
  const offset = ahora.getTimezoneOffset() * 60000; // Ajusta la zona horaria
  const fechaActual = new Date(ahora - offset).toISOString().substr(0, 10);
  const [_id, setId] = useState("");
  const [resultadoId, setProID] = useState("");
  const [nombrePro, setnombrePro] = useState("");
  const [descripcion, setdesc] = useState("");
  const [personalId, setPersID] = useState(user._id);
  const [tipo_id, setTipo] = useState(user.tipo_id);
  const [nombre, setNombre] = useState(user.nombre);
  const [email, setEmail] = useState(user.email);
  const [doc_identidad, setDoc] = useState(user.doc_identidad);
  const [cargo, setCargo] = useState(user.cargo);
  const [foto, setFoto] = useState(user.foto);
  const [User,setUser] = useState(user.usuario);
  const [password,setPass] = useState(user.password);
  const [especialidad, setEspe] = useState("");
  const [fecha, setfecha] = useState(fechaActual);

  const evento = {
    _id,
   
    resultado: {
      resultadoId,
      nombrePro,
      descripcion,
    },
    personal: {
      personalId,
      tipo_id,
      nombre,
      email,
      doc_identidad,
      cargo,
      foto,
      User,
      password,
    },

    especialidad,
    fecha
  };
  const resultados = [
    {
      "_id": 1,
      "nombre": "Policitemia",
      "descripción": "Aumento anormal en el número de glóbulos rojos en la sangre."
    },
    {
      "_id": 2,
      "nombre": "Anemia",
      "descripción": "la concentración de hemoglobina en los glóbulos rojos, es inferior a lo normal."
    },
    {
      "_id": 3,
      "nombre": "Hipertiroidismo",
      "descripción": "Producción en exceso de la tiroxina libre."
    },
    {
      "_id": 4,
      "nombre": "Normal",
      "descripción": "El resultado se encuentra dentro de los valores de referencia."
    },
    {
      "_id": 5,
      "nombre": "Hipotiroidismo",
      "descripción": "Baja producción de la tiroxina libre."
    },
    {
      "_id": 6,
      "nombre": "Neutropenia",
      "descripción": "los niveles de neutrófilos en la sangre están por debajo de lo normal."
    }
  ]
 
  const save = (evento) => {
    onSave(evento);
    setId("");
    setProID("");
    setnombrePro("");
    setdesc("");
    setPersID(user._id);
    setTipo(user.tipo_id);
    setNombre(user.nombre);
    setEmail(user.email);
    setDoc(user.doc_identidad);
    setCargo(user.cargo);
    setFoto(user.foto);
    setPass(user.password)
    setUser(user.usuario)
    setEspe("");
    setfecha(fechaActual);
    console.log(nombrePro)
  };
  return (
    <>
    
    <div>
      <h1 className="font-bold px-6 text-lg mb-4 ml-10 text-blue-500">Crear evento</h1>
    </div>
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-10 flex flex-col my-2 rounded-lg border border-gray-200 ">
  <form onSubmit={handleSubmit(save)}>
    <div className="-mx-3 md:flex">
    <div className="md:w-1/2 px-3">
        <label className="block text-sm font-bold mb-2" htmlFor="resultados">
          Resultados
        </label>
        <div className="relative">
          <select
            className="block appearance-none w-full bg-gray bg-lighter border border-gray-lighter text-gray-darker py-3 px-4 pr-8 rounded focus:outline-blue-300"
            id="resultado"
            {...register("resultado", { required: true })}
            onChange={(event) => {
              const selectedresultado = resultados.find(proc => proc.nombre === event.target.value);
              if (selectedresultado) {
                setProID(selectedresultado._id);
                setnombrePro(selectedresultado.nombre);
                setdesc(selectedresultado.descripcion);
              } else {
                // Si no se selecciona ningún resultado o no se encuentra en la lista, puedes restablecer los valores a su estado inicial
                setProID("");
                setnombrePro("");
                setdesc("");
              }
            }}
            value={nombrePro}
          
          >
            <option value="">Seleccione un resultado</option>
            {resultados.map(proc => (
              <option key={proc._id} value={proc.nombre}>{proc.nombre}</option>
            ))}
          </select>
          {errors.resultado && <p className="text-red-500 mt-1">Campo requerido</p>}
          <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-gray-darker">
            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 px-3">
        <label className="block text-sm font-bold mb-2" htmlFor="Fecha">
          Fecha
        </label>
        <input
          className="appearance-none block w-full bg-gray-lighter text-gray-darker border border-gray-lighter rounded py-3 px-4 focus:outline-blue-300"
          id="Fecha"
          type="text"
          name="Fecha"
          defaultValue={fechaActual}
          readOnly
          {...register("Fecha", { required: true })}
        />
      </div>
    </div>  
    <button
      disabled={!resultadoId}
      className="bg-blue-500  hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full  mb-4 pd-2 mt-10 "
      onClick={() => save(evento)}
      type="submit"
    >
      Crear evento
    </button>
  </form>
</div>
</>
  );
}
export default Event;
