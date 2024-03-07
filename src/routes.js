import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Erro from './Pages/Erro';
import Detalhes from './Pages/Detalhes';
import CriarReceita from './Pages/criarReceita';

import Header from './components/Header';


function RoutesApp(){

    return(

        <BrowserRouter>
        
            <Header/>
            <Routes>

                <Route path='/' element={ <Home/> } />
                <Route path='/detalhes/:id' element={ <Detalhes/> } />
                <Route path='/criar-receita' element={ <CriarReceita/> } />

                <Route path='*' element={ <Erro/> } />

            </Routes>
            

        </BrowserRouter>

    );

}

export default RoutesApp;