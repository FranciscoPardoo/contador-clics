import Button from './componentes/Button'
import './App.css'
import Contador from './componentes/contador'
import { useState } from 'react'

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className='App'>
      <h1>Contador de clics</h1>
      <div className="contenedor-principal">
        <Contador numClics={numClics}/>
        <div>
          <Button
          texto="Clic"
          esBotonDeClic={true}
          manejarClic={manejarClic}
          />
          <Button
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
          />
        </div>
      </div>
    </div>
  )
}

export default App
