import './detalhes.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Detalhes() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [receitas, setReceitas] = useState([]);



  useEffect(()=>{
    axios.get(`http://localhost:3000/receitas/${id}`)
    .then((response) => setReceitas(response.data))
    .catch((error) => console.log(error))
    .finally(console.log("dentro do finally"))
    

  }, [navigate, id]);

  return (
    
    <div style={{textAlign: 'center'}}>
    <div className='detail'>
      
      

      <div className='itens'>
        <p></p>
      <h1>{receitas.titulo}</h1>
      <p></p>
      <img src={receitas.imagem} alt={receitas.titulo} style={{height: '600px', width: '800px'}} />
      <p></p>
      <h3>Ingredientes</h3>
      <p></p>
      <span style={{height: '600px', width: '800px'}}>{receitas.ingredientes}</span>
      <h3>Modo de Preparo:</h3>
      <span style={{paddingBottom: '150px', height: '600px', width: '800px'}}>{receitas.modoPreparo}</span>
      

      </div>

    </div>

    <Button variant="primary" href={`/`} >Voltar</Button>

    </div>

    

  );
}

export default Detalhes;
