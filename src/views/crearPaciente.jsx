import { useNavigate} from "react-router-dom";
import { useForm } from 'react-hook-form';
import Sidebar from '../components/Sidebar';
function CrearPaciente() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function handleRegister(value) {
        // hacer una peticion fetch al servidor para que registre al usuario

        fetch('http://localhost:3000/pacientes', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(value)
        })
            .then((res) => res.json())
            .then((user) => {
                navigate('/ListarPacientes')
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
<>
 <Sidebar />
        <form id="miFormulario" method="post" onSubmit={handleSubmit(handleRegister)}>

            <div className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 flex flex-col my-2" style={{ marginLeft: '320px', marginRight: '20px' }}>
            <div style={{ textAlign: 'center' }}>
                <h4  className=" font-bold p-6 text-lg text-center text-blue-500" style={{ fontWeight: 'bold' }}>Crear Paciente</h4>
            </div>
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block  tracking-wide text-grey-darker text-sm font-bold mb-2 text-gray-600" htmlFor="grid-first-name">
                            Nombre
                        </label>
                        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 focus:outline-blue-300"
                            type="text"
                            name="nombre"
                            id="nombre"
                            placeholder="Nombre"
                            {...register('nombre', { required: true })}
                        /> {errors.nombre && <p className="text-red-500 mt-1">Complete el campo</p>}
                    </div>
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block tracking-wide text-grey-darker text-sm font-bold mb-2" htmlFor="eps">
                           Tipo de documento
                        </label>
                        <select
                            className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded focus:outline-blue-300"
                            name="tipo_id"
                            id="tipo_id"
                            {...register('tipo_id', { required: true })}
                        >
                            <option value="">Seleccione su tipo de documento</option>
                            <option value="Registro civil">Registro civil</option>
                            <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                            <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
                            <option value="Cédula de extrangería">Cédula de extrangería</option>
                            <option value="Pasaporte">Pasaporte</option>
                        </select>
                        {errors.tipo_id && <p className="text-red-500 mt-1">Complete el campo</p>}
                    </div>
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block  tracking-wide text-grey-darker text-sm font-bold mb-2" htmlFor="grid-password " >
                            Número de documento
                        </label>
                        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 focus:outline-blue-300"
                            type="text"
                            name="doc_identidad"
                            id="doc_identidad"
                            placeholder="Documento de identidad"
                            {...register('doc_identidad', { required: true })} />{errors.doc_identidad && <p className="text-red-500 mt-1">Complete el campo</p>}

                    </div>
                </div>
                <div className="-mx-3 md:flex mb-2">

                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block  tracking-wide text-grey-darker text-sm font-bold mb-2" htmlFor="grid-city">
                            Dirección
                        </label>
                        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 focus:outline-blue-300"
                            type="text"
                            name="direccion"
                            id="direccion"
                            placeholder="Direccion"
                            {...register('direccion', { required: true })} />  {errors.direccion && <p className="text-red-500 mt-1">Complete el campo</p>}
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label className="block  tracking-wide text-grey-darker text-sm font-bold mb-2" htmlFor="grid-zip">
                            Celular
                        </label>
                        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 focus:outline-blue-300"
                            type="text"
                            name="celular"
                            id="celular"
                            placeholder="Número de celular"
                            {...register('celular', { required: true })} /> {errors.celular && <p className="text-red-500 mt-1">Complete el campo</p>}
                    </div>
                    <div className="md:w-1/2 px-3 ">
                        <label className="block  tracking-wide text-grey-darker text-sm font-bold mb-2" htmlFor="grid-zip">
                            Correo
                        </label>
                        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 focus:outline-blue-300"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Correo electrónico"
                            {...register('email', { required: true, pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ })} />{errors.email?.type === 'required' && <p className="text-red-500 mt-1">Email is required</p>}
                        {errors.email?.type === 'pattern' && <p className="text-red-500 mt-1">Please enter a valid email</p>}
                    </div>
                </div>
                <div> <br /></div>
                <div className="-mx-3 md:flex mb-2">

                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block tracking-wide text-grey-darker text-sm font-bold mb-2" htmlFor="eps">
                            EPS
                        </label>
                        <select
                            className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded focus:outline-blue-300"
                            name="eps"
                            id="eps"
                            {...register('eps', { required: true })}
                        >
                            <option value="">Seleccione una EPS</option>
                            <option value="Sura">Sura</option>
                            <option value="Comeva">Comeva</option>
                            <option value="Nueva EPS">Nueva EPS</option>
                            <option value="Savia Salud">Savia Salud</option>
                        </select>
                        {errors.eps && <p className="text-red-500 mt-1">Complete el campo</p>}
                    </div>


                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block tracking-wide text-grey-darker text-sm font-bold mb-2" htmlFor="eps">
                            Grupo sanguineo
                        </label>
                        <select
                            className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded focus:outline-blue-300"
                            name="grupo_sanguineo"
                            id="grupo_sanguineo"
                            {...register('grupo_sanguineo', { required: true })}
                        >
                            <option value="">Seleccione el grupo sanguineo</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                        {errors.grupo_sanguineo && <p className="text-red-500 mt-1">Complete el campo</p>}
                    </div>

                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block tracking-wide text-grey-darker text-sm font-bold mb-2" htmlFor="eps">
                            Género
                        </label>
                        <select
                            className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded focus:outline-blue-300"
                            name="genero"
                            id="genero"
                            {...register('genero', { required: true })}
                        >
                            <option value="">Seleccione un Genero</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Indenifido">Indefinido</option>

                        </select>
                        {errors.genero && <p className="text-red-500 mt-1">Complete el campo</p>}
                    </div>

                </div>
                <div> <br /> </div>
                <div className="-mx-3 md:flex mb-2">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block  tracking-wide text-grey-darker text-sm font-bold mb-2" htmlFor="grid-zip">
                            Edad
                        </label>
                        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 focus:outline-blue-300"
                            type="text"
                            name="edad"
                            id="edad"
                            placeholder="Edad"
                            {...register('edad', { required: true })} /> {errors.edad && <p className="text-red-500 mt-1">Complete el campo</p>}
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label className="block  tracking-wide text-grey-darker text-sm font-bold mb-2" htmlFor="grid-zip">
                            Fecha de nacimiento
                        </label>
                        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 focus:outline-blue-300"
                            type="date"
                            name="fecha_nacimiento"
                            id="fecha_nacimiento"
                            placeholder="Fecha de nacimiento"
                            {...register('fecha_nacimiento')} /> {errors.fecha_nacimiento && <p className="text-red-500 mt-1">Complete el campo</p>}
                    </div>
                </div>
                <div><br /></div>
                <div className="space-x-4">
                <button className="bg-blue-500 w-auto hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full  mb-4 pd-2" type="submit" form="miFormulario" >Crear Paciente</button>
                <button className="bg-blue-500 w-auto hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full  mb-4 mb-2" onClick={() => navigate('/')}>Cancelar</button>
                </div>
                
                
            </div>
        </form>
        </>
    );
}

export default CrearPaciente;