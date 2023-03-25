import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contatos from '../../pages/Contatos/Contatos';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Produtos from '../../pages/Produtos/Produtos';
import Vendas from '../../pages/Vendas/Vendas';

function Rotas() {
  return (

    <Routes>
      <Route path='/'           element={ <Login />     as React.ReactElement } />
      <Route path='/home'       element={ <Home />      as React.ReactElement } />
      <Route path='/contatos'   element={ <Contatos />  as React.ReactElement } />
      <Route path='/produtos'   element={ <Produtos />  as React.ReactElement } />
      <Route path='/vendas'     element={ <Vendas />    as React.ReactElement } />
    </Routes>

  );
}

export default Rotas;
