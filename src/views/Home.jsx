import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Sidebar from '../components/Sidebar';


const Dashboard = () => {
    return (
        <>
            <Sidebar />
            <div className="bg-white" style={{ marginLeft: '320px' }}>
                <div className="container flex flex-col mx-auto bg-white">
                    <div className="grid w-full  mb-8 md:grid-cols-2 xl:gap-14 md:gap-5">
                        <div className="flex flex-col justify-center col-span-1 text-center lg:text-start">
                            <div className="flex items-center justify-center mb-4 lg:justify-Normal">
                                
                                <h4 className="mb-8 font-extrabold leading-tight lg:text-3xl text-dark-grey-900" style={{ marginLeft: '40px' }}>
                                    Sistema de gestión de resultados de laboratorio
                                </h4>
                            </div>
                            <h1 className="mb-8 font-bold leading-tight lg:text-2xl text-dark-grey-900" style={{ marginLeft: '40px' }}>
                                Juntos, por una salud más clara y confiable.
                            </h1>
                            <p className="mb-6 text-base font-Normal leading-7 lg:w-3/4 text-justify text-grey-900" style={{ marginLeft: '40px' }}>
                                <strong>Contexto</strong> <br />
                                Plataforma en línea especializada en la gestión de resultados de laboratorio médico. Ofrece un sistema integral que permite a los profesionales de la salud acceder, analizar y gestionar eficientemente los resultados de pruebas médicas para una mejor atención al paciente. Desde pruebas simples de laboratorio hasta análisis complejos, BioInsights Diagnostic simplifica el proceso para médicos, laboratorios y pacientes. Los pacientes también pueden acceder fácilmente
                            </p>
                            
                        </div>
                        <div className="w-full bg-blue-100 flex items-center justify-center h-screen">

                            <img 
                            className="w-full rounded-md"
                            src="https://centromedicoabc.com/storage/2023/08/shutterstock_1789303811.webp"
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




