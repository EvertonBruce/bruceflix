import React from 'react';
import PagerDefaut from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo() {
    return (
        <PagerDefaut>
            <h1>Cadastro de vídeos</h1>

            <Link to="/cadastro/categoria">
                Cadastrar categoria
            </Link>
        </PagerDefaut>
    );
}

export default CadastroVideo;