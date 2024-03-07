import './home.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import axios from 'axios';

function Home() {
  const [receitas, setReceitas] = useState([]);



  useEffect(()=>{
    axios.get('http://localhost:3000/receitas')
    .then((response) => setReceitas(response.data))
    .catch((error) => console.log(error))
    .finally(console.log("dentro do finally"))
    
  }, []);
  

  return (
    
    
    <div className={'container'}>
    {receitas.map((receita) => {
      return(
        <div key={receita.id} className='card'>
          
          <Card>
          <Card.Img variant="top" src={receita.imagem} width={'286px'} height={'180px'}/>
          <Card.Body>
            <Card.Title>{receita.titulo}</Card.Title>
            <Button variant="primary" href={`/detalhes/${receita.id}`}>Ver Detalhes</Button>
          </Card.Body>
        </Card>
        
        
        </div>
        
      )
    })}
    
    </div>
    

    

  );
}

export default Home;
