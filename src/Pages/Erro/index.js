import './erro.css';
import Imagem from '../../components/image/error 404.png';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

function Erro() {
  

  return (
    
    <div className='botao'>
    <div className='center'>
    
      <img src={Imagem} className='imagem'></img>
      
    
    </div>
    <Button variant="primary" href={`/`} >Voltar à Página Inicial</Button>
    </div>
    

  );
}

export default Erro;
