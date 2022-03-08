import { useState, useEffect } from 'react'
import { Error } from './Error'

export default function Form( {setPatients, patients, patient, setPatient } ) {

  const [name, setName] = useState('')
  const [owner, setOwner] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [symptom, setSymptom] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(patient).length > 0  ){
      setName(patient.name)
      setOwner(patient.owner)
      setEmail(patient.email)
      setDate(patient.date)
      setSymptom(patient.symptom)
      
    }
  }, [patient])  
    

  const createID = () => {
     const random = Math.random().toString(36).substr(2)
     const date = Date.now().toString(36)
     return random + date
  }

  const handleSubmit = e => {
    e.preventDefault()
    if( [name, owner, email, date, symptom].includes('') ){
      console.log('Hay al menos un campo vacio')
      setError(true)
      return
    }
    setError(false)
    const patientsObject = {
      name,
      owner,
      email,
      date,
      symptom
    } 

    if( patient.id ){
      // edit patient
      patientsObject.id = patient.id
      const patientsUpdated = patients.map( patientState => patientState.id === patient.id ? patientsObject : patientState )
      setPatients(patientsUpdated)
      setPatient({})

    } else {
      patientsObject.id = createID()
      setPatients([...patients, patientsObject])
    }
    setName('')
    setOwner('')
    setEmail('')
    setDate('')
    setSymptom('')
  }

  return (
    <section className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form 
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5" 
        action=""
        onSubmit={handleSubmit}
      >
        {error && <Error> <p> Todos los campos son obligatorios </p> </Error> } 
        <section className="mb-5">
           <label className="block text-gray-700 uppercase font-bold " htmlFor="mascota">Nombre Mascota</label>
           <input 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              id="mascota" 
              type="text" 
              placeholder="Nombre mascota" 
              value={name}
              onChange={ e => { setName(e.target.value) } }
            />
        </section> {/* mascota */}

        <section className="mb-5">
           <label className="block text-gray-700 uppercase font-bold " htmlFor="propietario">Nombre Propietario</label>
           <input 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            id="propietario" 
            type="text" 
            placeholder="Nombre propietario"
            value={owner}
            onChange={ e => { setOwner(e.target.value) } }
          />
        </section> {/* Propietario */}
        
        <section className="mb-5">
           <label className="block text-gray-700 uppercase font-bold " htmlFor="email">Nombre email</label>
           <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="email" 
            type="email" 
            placeholder="E-mail" 
            value={email}
            onChange={ e => { setEmail(e.target.value) } }
           />
        </section> {/* email */}

        <section className="mb-5">
           <label 
            className="block text-gray-700 uppercase font-bold "
            htmlFor="alta" >
              Alta
            </label>
            
           <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="alta"
            type="date"
            value={date}
            onChange={ e => { setDate(e.target.value) } }
          />
        </section> {/* Fecha */}

        <section className="mb-5">
           <label className="block text-gray-700 uppercase font-bold " htmlFor="sintomas">Alta</label>
           <textarea 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            id="sintomas" 
            placeholder="Describe los sintomas"
            value={symptom}
            onChange={ e => { setSymptom(e.target.value) } }
            />
        </section> {/* comentarios */}

        <input 
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white font-bold rounded-md hover:bg-indigo-700 cursor-pointer " 
          value={patient.id ? "Editar Paciente" : "Agregar paciente"}
        /> {/* Enviar */}
      </form>
    </section>
  )
}