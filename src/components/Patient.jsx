import React from 'react'

export const Patient = ( {patient, setPatient, deletePatient} ) => {

    const { name, owner, email, date, symptom, id } = patient
    
    const handleDelete = ()=>{
        const response = confirm('Deseas elimiar el paciente')
        if(response){
            deletePatient(id)
        }
    }

  return (
    <section className='mt-5 bg-white shadow-md mx-5 my-10 px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
            <span className='font-normal normal-case'> {name} </span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
            <span className='font-normal normal-case'> {owner} </span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>E-mail: {''}
            <span className='font-normal normal-case'> {email} </span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha {''}
            <span className='font-normal normal-case'> {date} </span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas {''}
            <span className='font-normal normal-case'> {symptom} </span>
        </p>
        <section className='flex justify-between' >
            <button
                type='button'
                className='py-2 px-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md'
                onClick={ () => setPatient(patient) }
            > Editar </button>
            <button
                type='button'
                className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md'
                onClick={ handleDelete }
            > Eliminar </button> 
        </section>
    </section>
  )
}
