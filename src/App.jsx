import { useState, useEffect } from "react"
import { ClientList } from "./components/ClientList"
import Form from "./components/Form"
import Header from "./components/Header"

function App() {

  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})

  useEffect(() => {
    const patientsFromLocalStorage = JSON.parse(localStorage.getItem('patients') ?? [] )
    setPatients(patientsFromLocalStorage)
  }, [])
  

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify( patients ))
  }, [patients])
  

  const deletePatient = (id) => {
    const patientsUpdated = patients.filter( patient => patient.id !== id )
    setPatients(patientsUpdated)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <section className="mt-12 md:flex">
        <Form
          setPatients={setPatients} 
          patients={patients} 
          patient={patient} 
          setPatient={setPatient} />

        <ClientList 
          patients={patients} 
          setPatient={setPatient} 
          deletePatient={deletePatient}/>
      </section>
    </div>
  )
}

export default App
