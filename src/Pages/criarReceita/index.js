import './criarReceita.css';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import { isEmpty } from 'lodash';
import { Navigate, redirect, useNavigate } from 'react-router-dom';



function CriarReceita() {
  const [nomeReceita, setNomeReceita] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [preparo, setPreparo] = useState('');
  const [url, setUrl] = useState('');
  const navigate = useNavigate('/');

  const handleChangeReceitas = Event => {

    setNomeReceita(Event.target.value);

  }
  const handleChangeIngredientes = Event => {

    setIngredientes(Event.target.value);

  }
  const handleChangeModoPreparo = Event => {

    setPreparo(Event.target.value);

  }
  const handleChangeUrl = Event => {

    setUrl(Event.target.value);

  }
  
  function dados(Event) {

    if(isEmpty(nomeReceita)) {

      alert("Sem nome de Receita Informado!")

    }else if(isEmpty(ingredientes)){

      alert("Sem Ingredientes Informados!")

    }else if (isEmpty(preparo)) {

      alert("Sem Modo de Preparo Informado!")

    }else if (isEmpty(url)) {

      alert("Sem URL Informada!")

    }else {

    Event.preventDefault();
    axios.post('http://localhost:3000/receitas', {
      titulo: nomeReceita,
      ingredientes: ingredientes,
      modoPreparo: preparo,
      imagem: url
    })
    .then(console.log)
    alert("Receita Adicionada com Sucesso.");
    navigate("/")
  }

  }

  return (
    
    <div className='maior'>
    <div className='menor'>
    
    
      
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nome da Receita:</Form.Label>
        <Form.Control onChange={handleChangeReceitas} placeholder="Ex: Batata Frita com Bacon" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Ingredientes">
        <Form.Label>Ingredientes:</Form.Label>
        <Form.Control onChange={handleChangeIngredientes} as="textarea" rows={3} placeholder="Ex: 1. Batata Frita - 2. Bacon"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="Preparo">
        <Form.Label>Modo de Preparo:</Form.Label>
        <Form.Control onChange={handleChangeModoPreparo} as="textarea" rows={3} placeholder="Ex: Frite a Batata e Adicione o Bacon."/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>URL da Imagem:</Form.Label>
        <Form.Control onChange={handleChangeUrl} placeholder="Ex: Batata Frita com Bacon" />
      </Form.Group>
      <Button variant="primary" type='submit' onClick={dados} >Adicionar</Button>
    </Form>

    
    </div>
    </div>

    

  );
}

export default CriarReceita;
