import { Patient } from './Patient'

export const ClientList = ( {patients, setPatient, deletePatient} ) => {

  return (
    <section className="md:w-1/2 lg:w-3/5">

      {patients.length ? 
        (<>
          <h2 className="text-3xl font-black text-center">Lista de pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Administra tus {''}
            <span className='text-indigo-600 font-bold'>Pacientes y citas</span>
          </p>
          
          <section className='md:h-screen overflow-auto' >

            { patients.map( patient => (
              <Patient 
                key={patient.id} 
                patient={patient} 
                setPatient={setPatient}
                deletePatient={deletePatient}
              />
            ))}
          </section>
        </>
        ) : (
          <>
            <h2 className="text-3xl font-black text-center">No hay pacientes</h2>
            <p className='text-xl mt-5 mb-10 text-center'>
              Comienza agregando pacientes {''}
              <span className='text-indigo-600 font-bold'>y aparecerán acá</span>
            </p>
          </>
        ) }
      
      

    </section>
  )
}
