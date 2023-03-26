import './App.css'
import Rotas from './components/Routes/Rotas'
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='page-container'>
      {/* Declarar a propriedade basename="/GPTI-ERP-Project dentro do BrowserRouter ao fazer deploy */}
      <BrowserRouter basename="/GPTI-ERP-Project">
        <Header />
        <Rotas />
      </BrowserRouter>
    </div>

  )
}
export default App;