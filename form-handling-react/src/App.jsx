import './App.css'
import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/FormikForm'

function App() {
  return (
    <>
    <h1>React Form Handling</h1>
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'warp' }}>
    <RegistrationForm />
    <FormikForm />
    </div>
    </>
  )
}

export default App