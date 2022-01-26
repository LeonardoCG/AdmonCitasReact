import Paciente from "./Paciente";

function ListadoPaciente({pacientes, setPaciente, eliminarPaciente}) {

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen">

            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">Pacientes & Citas</span>
                    </p>

                    <div className="md:h-screen overflow-scroll">
                        {pacientes.map( (paciente) => (
                            <Paciente 
                                key={paciente.id}
                                paciente={paciente}
                                setPaciente={setPaciente}
                                eliminarPaciente={eliminarPaciente}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No xisten pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Agrega tus {''}
                        <span className="text-indigo-600 font-bold">Pacientes & Citas aqui!</span>
                    </p>
                </>
            )}
        </div>
    )
}

export default ListadoPaciente;
