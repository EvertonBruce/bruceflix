import React from 'react';
import PagerDefaut from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    return (
        <PagerDefaut>
            <h1>Cadastro de Categoria</h1>

            <Link to="/">
                Home
            </Link>
        </PagerDefaut>
    );
}

export default CadastroCategoria;