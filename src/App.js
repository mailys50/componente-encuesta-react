import './App.css';
import Encuestas from './componets/Encuestas'

function App() {
  return (
    <div className='App'>
      <div className='pagEncuestas'>
        <h1>Encuestas</h1>
        <Encuestas
        imagen ='caro'
        nombre= 'Carolina Medina'
        pais ='Trujillo'
        cargo ='Contador Público'
        empresa = 'detalles'
        comentario ='me gusta esta página porque consigo temas interesantes' />
          <h1>Encuestas</h1>
        <Encuestas
        imagen ='mailys'
        nombre= 'Mailys Brizuela'
        pais ='La Serena'
        cargo ='Ingeniero de software'
        empresa = 'Mall plaza'
        comentario ='he aprendido muchas cosas nuevas' />
          <h1>Encuestas</h1>
        <Encuestas
        imagen ='maria'
        nombre= 'María Hernadez'
        pais ='Santiago'
        cargo ='Gerente general'
        empresa = 'Mall'
        comentario ='me gusta esta página' />
      </div>
    </div>
  );
}

export default App;


