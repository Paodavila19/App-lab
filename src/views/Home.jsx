import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import logo from "../assets/logo.png";




const Dashboard = () => {
    return (
        <>
            <Sidebar />
            <div className="bg-white" style={{ marginLeft: '320px' }}>
                <div className="container flex flex-col mx-auto bg-white">
                    <div className="grid w-full  mb-8 md:grid-cols-2 xl:gap-14 md:gap-5">
                        <div className="flex flex-col justify-center col-span-1 text-center lg:text-start">
                            <div className="flex items-center justify-center mb-4 lg:justify-normal">
                                <img className="h-60" src={logo} alt="Logo" style={{ marginLeft: '40px' }} />
                                <h4 className="mb-8 font-extrabold leading-tight lg:text-4xl text-dark-grey-900">
                                    Sistema de historias electrónicas Hospital Central
                                </h4>
                            </div>
                            <h1 className="mb-8 font-bold leading-tight lg:text-2xl text-dark-grey-900" style={{ marginLeft: '40px' }}>
                                Tu bienestar, nuestra prioridad
                            </h1>
                            <p className="mb-6 text-base font-normal leading-7 lg:w-3/4 text-justify text-grey-900" style={{ marginLeft: '40px' }}>
                                <strong>Misión</strong> <br />
                                En Hospital Central, nuestra misión es brindar atención médica de calidad y compasiva a todos nuestros pacientes. Nos esforzamos por promover la salud, prevenir enfermedades y ofrecer tratamientos avanzados en un entorno seguro y acogedor.
                            </p>
                            <p className="mb-6 text-base font-normal leading-7 lg:w-3/4 text-justify text-grey-900" style={{ marginLeft: '40px' }}>
                                <strong>Visión</strong> <br />
                                Nuestra visión es convertirnos en un referente en el campo de la atención médica, destacando por nuestra excelencia clínica, innovación constante y compromiso con el bienestar de la comunidad. Aspiramos a ser el hospital de elección para pacientes, profesionales de la salud y colaboradores.
                            </p>
                        </div>
                        <div className="w-full bg-blue-950 flex items-center justify-center">
                            <img 
                                className="w-full rounded-md"
                                src="https://qtxasset.com/quartz/qcloud5/media/image/Hospital.jpg?VersionId=Um0ZgO16.EDXjcB.0UtaUE.vwMZK5WQo"
                                alt="header image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;




